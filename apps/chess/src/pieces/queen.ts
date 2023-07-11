import type { Color } from "../../index";
import Board from "../board";
import Square from "../square";
import applyFilters from "../utils/applyFilters";
import AbstractPiece from "./abstractPiece";

class Queen extends AbstractPiece {
  constructor(public color: Color) {
    super("queen", color);
  }

  moveSquares(currentSquare: Square, board: Board): number[][] {
    const { x, y } = currentSquare;
    const moves = [];

    // take Bishop and Rook move squares (static methods?)
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

    return applyFilters(moves, board, this);
  }
}

export default Queen;
