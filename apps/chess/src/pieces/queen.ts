import type { Color } from "../../index";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class Queen extends AbstractPiece {
  constructor(public color: Color) {
    super("queen", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;
    const moves = [];

    for (let i = -7; i < 8; i++) {
      if (i !== 0) {
        moves.push([x + i, y + i]);
        moves.push([x + i, y - i]);
      }
      if (y !== i) {
        moves.push([x, i]);
      }
      if (x !== i) {
        moves.push([i, y]);
      }
    }

    return moves;
  }
}

export default Queen;
