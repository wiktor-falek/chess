import type { Color } from "../../index";
import Board from "../board";
import Square from "../square";
import applyFilters from "../utils/applyFilters";
import AbstractPiece from "./abstractPiece";

class Knight extends AbstractPiece {
  constructor(public color: Color) {
    super("knight", color);
  }

  moveSquares(currentSquare: Square, board: Board): number[][] {
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

    return applyFilters(moves, board, this);
  }
}

export default Knight;
