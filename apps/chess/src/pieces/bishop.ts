import type { Color } from "../../index";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class Bishop extends AbstractPiece {
  constructor(public color: Color) {
    super("bishop", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;
    const moves = [];

    for (let i = -7; i < 8; i++) {
      if (i !== 0) {
        moves.push([x + i, y + i]);
        moves.push([x + i, y - i]);
      }
    }

    return moves;
  }
}

export default Bishop;
