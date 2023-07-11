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

  getLegalMoves(x: number, y: number) {
    const square = this.board.getSquare(x, y);
    const piece = square?.piece;

    if (!square || !piece) return [];

    const legalMoves = piece.moveSquares(square, this.board);

    return legalMoves;
  }

  move(fromX: number, fromY: number, toX: number, toY: number): boolean {
    const fromSquare = this.board.getSquare(fromX, fromY);
    const piece = fromSquare?.piece;

    console.log("move()");

    // game has ended
    if (this.state !== "ONGOING") {
      console.error("game has ended");
      return false;
    }

    // piece does not exist
    if (!piece) {
      console.error("piece does not exist");
      return false;
    }

    // piece does not belong to current player
    // TODO: remove this once getLegalMoves handles it
    if (piece.color !== this.currentTurn.color) {
      console.log("not your turn");
      return false;
    }

    const legalMoves = this.getLegalMoves(fromSquare.x, fromSquare.y);

    const moveIsValid =
      legalMoves.filter((pos) => pos[0] === toX && pos[1] === toY).length === 1;

    if (!moveIsValid) {
      console.error("invalid move", { legalMoves });
      return false;
    }

    const moveOccurred = this.board.move(fromX, fromY, toX, toY);
    if (!moveOccurred) {
      console.error("failed to move");
      return false;
    }

    // switch player after successful move
    this.currentTurn =
      this.currentTurn.color === "white" ? this.black : this.white;

    return true;
  }
}

export default Game;
