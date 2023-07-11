import type { Color } from "../../index";
import Board from "../board";
import Square from "../square";
import applyFilters from "../utils/applyFilters";
import AbstractPiece from "./abstractPiece";

class Pawn extends AbstractPiece {
  constructor(public color: Color) {
    super("pawn", color);
  }

  moveSquares(currentSquare: Square, board: Board): number[][] {
    const { x, y } = currentSquare;
    const direction = this.color === "white" ? -1 : 1;

    const moves = [];

    const forwardOnePos: [number, number] = [x, y + 1 * direction];
    const forwardTwoPos: [number, number] = [x, y + 2 * direction];
    const captureLeftPos: [number, number] = [
      x - 1 * direction,
      y + 1 * direction,
    ];
    const captureRightPos: [number, number] = [
      x + 1 * direction,
      y + 1 * direction,
    ];

    if (!board.getSquare(...forwardOnePos)?.piece) {
      moves.push(forwardOnePos);
    }

    if (!board.getSquare(...forwardTwoPos)?.piece && !this.hasMoved) {
      moves.push(forwardTwoPos);
    }

    if (board.getSquare(...captureLeftPos)?.piece) {
      moves.push(captureLeftPos);
    }

    if (board.getSquare(...captureRightPos)?.piece) {
      moves.push(captureRightPos);
    }

    // TODO: en passant

    return applyFilters(moves, board, this);
  }
}

export default Pawn;
