import type { Color } from "../../index";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class Knight extends AbstractPiece {
  constructor(public color: Color) {
    super("knight", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;

    const moves = [
      [x - 2, y - 1],
      [x - 1, y - 2],
      [x + 1, y - 2],
      [x + 2, y - 1],
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x - 1, y + 2],
      [x - 2, y + 1],
    ];

    return moves;
  }
}

export default Knight;
