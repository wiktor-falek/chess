import { Piece } from "../../index";
import Board from "../board";

function filterOutOfBounds(moves: number[][]): number[][] {
  return moves.filter(([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7);
}

function filterSameColor(
  moves: number[][],
  board: Board,
  piece: Piece
): number[][] {
  return moves.filter(
    ([x, y]) => board.getSquare(x, y)?.piece?.color !== piece.color
  );
}

function filterWillBeInCheck(moves: number[][], board: Board): number[][] {
  // TODO: filter moves that will leave king in check
  return moves.filter(([x, y]) => true);
}

function applyFilters(
  moves: number[][],
  board: Board,
  piece: Piece
): number[][] {
  let filteredMoves = moves;
  filteredMoves = filterOutOfBounds(filteredMoves);
  filteredMoves = filterSameColor(filteredMoves, board, piece);
  filteredMoves = filterWillBeInCheck(filteredMoves, board);
  return filteredMoves;
}

export default applyFilters;
