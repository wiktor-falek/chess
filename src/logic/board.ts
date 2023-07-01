import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";
import Tile from "./tile";

class Board {
  tiles: Array<Array<Tile>>;
  constructor() {
    this.tiles = [[], [], [], [], [], [], [], []];
  }

  setup() {
    // row 8
    this.tiles[0][0] = new Tile(0, 0, new Rook("black"));
    this.tiles[0][1] = new Tile(1, 0, new Knight("black"));
    this.tiles[0][2] = new Tile(2, 0, new Bishop("black"));
    this.tiles[0][3] = new Tile(3, 0, new Queen("black"));
    this.tiles[0][4] = new Tile(4, 0, new King("black"));
    this.tiles[0][5] = new Tile(5, 0, new Bishop("black"));
    this.tiles[0][6] = new Tile(6, 0, new Knight("black"));
    this.tiles[0][7] = new Tile(7, 0, new Rook("black"));

    // row 7
    this.tiles[1][0] = new Tile(0, 1, new Pawn("black"));
    this.tiles[1][1] = new Tile(1, 1, new Pawn("black"));
    this.tiles[1][2] = new Tile(2, 1, new Pawn("black"));
    this.tiles[1][3] = new Tile(3, 1, new Pawn("black"));
    this.tiles[1][4] = new Tile(4, 1, new Pawn("black"));
    this.tiles[1][5] = new Tile(5, 1, new Pawn("black"));
    this.tiles[1][6] = new Tile(6, 1, new Pawn("black"));
    this.tiles[1][7] = new Tile(7, 1, new Pawn("black"));

    // rows 6, 5, 4, 3
    for (let row = 6; row > 2; row--) {
      for (let file = 0; file < 8; file++) {
        this.tiles[row][file] = new Tile(file, row);
      }
    }

    // row 2
    this.tiles[6][0] = new Tile(0, 6, new Pawn("white"));
    this.tiles[6][1] = new Tile(1, 6, new Pawn("white"));
    this.tiles[6][2] = new Tile(2, 6, new Pawn("white"));
    this.tiles[6][3] = new Tile(3, 6, new Pawn("white"));
    this.tiles[6][4] = new Tile(4, 6, new Pawn("white"));
    this.tiles[6][5] = new Tile(5, 6, new Pawn("white"));
    this.tiles[6][6] = new Tile(6, 6, new Pawn("white"));
    this.tiles[6][7] = new Tile(7, 6, new Pawn("white"));

    // row 1
    this.tiles[7][0] = new Tile(0, 7, new Rook("white"));
    this.tiles[7][1] = new Tile(1, 7, new Knight("white"));
    this.tiles[7][2] = new Tile(2, 7, new Bishop("white"));
    this.tiles[7][3] = new Tile(3, 7, new Queen("white"));
    this.tiles[7][4] = new Tile(4, 7, new King("white"));
    this.tiles[7][5] = new Tile(5, 7, new Bishop("white"));
    this.tiles[7][6] = new Tile(6, 7, new Knight("white"));
    this.tiles[7][7] = new Tile(7, 7, new Rook("white"));

    return this.tiles;
  }
}

export default Board;
