import type { Color } from "../../index";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class Queen extends AbstractPiece {
  constructor(public color: Color) {
    super("queen", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;
    const moves = [
      [x, 0],
      [x, 1],
      [x, 2],
      [x, 3],
      [x, 4],
      [x, 5],
      [x, 6],
      [x, 7],
      [0, y],
      [1, y],
      [2, y],
      [3, y],
      [4, y],
      [5, y],
      [6, y],
      [7, y],
    ].filter((pos) => pos[0] !== x || pos[1] !== y); // exclude the occupied square

    for (let i = -7; i < 8; i++) {
      if (i !== 0) {
        moves.push([x + i, y + i]);
        moves.push([x + i, y - i]);
      }
    }

    return moves;
  }
}

export default Queen;
