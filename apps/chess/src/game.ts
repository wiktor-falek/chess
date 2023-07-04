import Board from "./board";
import Player from "./player";

type State =
  | "ONGOING"
  | "STALEMATE"
  | "WHITE_RESIGN"
  | "BLACK_RESIGN"
  | "WHITE_WIN"
  | "WHITE_RESIGN";

class Game {
  board: Board;
  moveHistory: Array<unknown>;
  white: Player;
  black: Player;
  currentTurn: Player;
  state: State;
  constructor() {
    this.board = new Board();
    this.white = new Player("white");
    this.black = new Player("black");
    this.moveHistory = [];
    this.currentTurn = this.white;
    this.state = "ONGOING";
  }

  setup() {
    this.board.setup();
    return this;
  }

  getValidMoves(x: number, y: number) {
    const square = this.board.getSquare(x, y);
    const piece = square?.piece;

    if (!square || !piece) return null;

    const validMoves = piece.moveSquares(square);

    // TODO: filter the moves
    //   piece jumping over other pieces (except knight)
    //   capturing your own pieces
    //   king being in check, and the move not preventing the check
    //   king will be in check after the move
    //   pawn captures with no target piece

    return validMoves;
  }

  move(fromX: number, fromY: number, toX: number, toY: number): boolean {
    const fromSquare = this.board.getSquare(fromX, fromY);
    const piece = fromSquare?.piece;

    // game has ended
    if (this.state !== "ONGOING") {
      return false;
    }

    // piece does not exist
    if (!piece) {
      return false;
    }

    // piece does not belong to current player
    // TODO: remove this once getValidMoves handles it
    if (piece.color !== this.currentTurn.color) {
      return false;
    }

    const validMoves = this.getValidMoves(fromSquare.x, fromSquare.y);

    // move is not valid
    if (validMoves === null || !validMoves.includes([toX, toY])) {
      return false;
    }

    const moveOccurred = this.board.move(fromX, fromY, toX, toY);
    if (!moveOccurred) {
      return false;
    }

    // switch player after successful move
    this.currentTurn =
      this.currentTurn.color === "white" ? this.black : this.white;

    return true;
  }
}

export default Game;
