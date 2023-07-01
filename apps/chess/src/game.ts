import Player from "./player";

type State =
  | "ONGOING"
  | "STALEMATE"
  | "WHITE_RESIGN"
  | "BLACK_RESIGN"
  | "WHITE_WIN"
  | "WHITE_RESIGN";

class Game {
  white: Player;
  black: Player;
  moveHistory: Array<unknown>;
  state: State;
  constructor() {
    this.white = new Player();
    this.black = new Player();
    this.moveHistory = [];
    this.state = "ONGOING";
  }
}

export default Game;
