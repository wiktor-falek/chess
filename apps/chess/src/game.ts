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

  validMoves(x: number, y: number) {
    const square = this.board.getSquare(x, y);

    if (square === null || square.piece === null) return null;

    return square.piece.moveSquares(square);
  }

  move(fromX: number, fromY: number, toX: number, toY: number): boolean {
    const fromSquare = this.board.getSquare(fromX, fromY);

    // prevent moves if game ended
    if (this.state !== "ONGOING") {
      return false;
    }

    // prevent player from moving a piece of another player
    if (fromSquare?.piece?.color !== this.currentTurn.color) {
      return false;
    }

    // prevent move that does not change the position
    if (fromX === toX && fromY === toY) {
      return false;
    }

    // TODO: prevent illegal moves
    // this includes:
    //   piece not being able to move to the square by convention (bishop goes only diagonally)
    //   piece jumping over other pieces (except knight)
    //   capturing your own pieces
    //   king being in check, and the move not preventing the check
    //   king will be in check after the move

    const moveOccurred = this.board.move(fromX, fromY, toX, toY);

    if (!moveOccurred) {
      return false;
    }

    this.currentTurn =
      this.currentTurn.color === "white" ? this.black : this.white;

    return true;
  }
}

export default Game;
