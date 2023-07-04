import type { Color } from "../../index";
import Board from "../board";
import Square from "../square";
import AbstractPiece from "./abstractPiece";

class Rook extends AbstractPiece {
  constructor(public color: Color) {
    super("rook", color);
  }

  moveSquares(currentSquare: Square) {
    const { x, y } = currentSquare;

    const moves = [];

    for (let i = -7; i < 8; i++) {
      if (y !== i) {
        moves.push([x, i]);
      }
      if (x !== i) {
        moves.push([i, y]);
      }
    }

    console.log(moves);
    return moves;
  }
}

export default Rook;
