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

  move(fromX: number, fromY: number, toX: number, toY: number): boolean {
    const fromSquare = this.board.getSquare(fromX, fromY);

    // prevent moves if game ended
    if (this.state !== "ONGOING") {
      return false;
    }

    // prevent player from moving a piece of another player
    if (fromSquare.piece?.color !== this.currentTurn.color) {
      return false;
    }

    // TODO: validate if the move is legal

    this.board.move(fromX, fromY, toX, toY);

    this.currentTurn =
      this.currentTurn.color === "white" ? this.black : this.white;

    return true;
  }
}

export default Game;
