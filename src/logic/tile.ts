import { Piece } from "../..";

class Tile {
  piece: Piece | null;
  constructor(public x: number, public y: number, piece: Piece | null = null) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }
}

export default Tile;
