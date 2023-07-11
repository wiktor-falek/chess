import type { Color } from "../../index";
import Board from "../board";
import Square from "../square";
import applyFilters from "../utils/applyFilters";
import AbstractPiece from "./abstractPiece";

class Bishop extends AbstractPiece {
  constructor(public color: Color) {
    super("bishop", color);
  }

  moveSquares(currentSquare: Square, board: Board): number[][] {
    const { x, y } = currentSquare;
    const moves: number[][] = [];

    // left top
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x - i, y - i];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    // right top
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x + i, y - i];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    // right bottom
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x + i, y + i];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    // left bottom
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x - i, y + i];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    return applyFilters(moves, board, this);
  }
}

export default Bishop;
