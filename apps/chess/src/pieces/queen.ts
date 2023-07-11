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

    // Bishop moves TODO: reuse from Bishop class
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

    // Rook moves TODO: reuse from Rook class
    // top
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x, y - i];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    // bottom
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x, y + i];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    // left
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x - i, y];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    // right
    for (let i = 1; i < 8; i++) {
      const pos: [number, number] = [x + i, y];
      const piece = board.getSquare(...pos)?.piece;
      moves.push(pos);
      if (piece) {
        break;
      }
    }

    return applyFilters(moves, board, this);
  }
}

export default Queen;
