import type { Color } from "../../index";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class King extends AbstractPiece {
  constructor(public color: Color) {
    super("king", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;

    const moves = [
      [x - 1, y],
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
      [x, y + 1],
      [x - 1, y + 1],
    ];

    return moves;
  }
}

export default King;
