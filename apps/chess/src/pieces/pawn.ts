import type { Color } from "../../index";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class Pawn extends AbstractPiece {
  constructor(public color: Color) {
    super("pawn", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;
    const direction = this.color === "white" ? -1 : 1;

    const moves = [
      [x, y + 1 * direction],
      [x - 1 * direction, y + 1 * direction], // capture left
      [x + 1 * direction, y + 1 * direction], // capture right
    ];

    if (!this.hasMoved) {
      moves.push([x, y + 2 * direction]);
    }

    return moves;
  }
}

export default Pawn;
