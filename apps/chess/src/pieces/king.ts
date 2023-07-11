import type { Color } from "../../index";
import Board from "../board";
import Square from "../square";
import applyFilters from "../utils/applyFilters";
import AbstractPiece from "./abstractPiece";

class King extends AbstractPiece {
  constructor(public color: Color) {
    super("king", color);
  }

  moveSquares(currentSquare: Square, board: Board): number[][] {
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

    // TODO: castle

    return applyFilters(moves, board, this);
  }
}

export default King;
