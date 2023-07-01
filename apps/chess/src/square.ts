import { Piece } from "../index";

class Square {
  piece: Piece | null;
  constructor(public x: number, public y: number, piece: Piece | null = null) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }
}

export default Square;
