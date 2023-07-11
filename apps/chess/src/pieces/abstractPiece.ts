import type { Color, PieceName } from "../../index";
import Board from "../board";
import Square from "../square";

abstract class AbstractPiece {
  hasMoved: boolean;
  constructor(public name: PieceName, public color: Color) {
    this.name = name;
    this.color = color;
    this.hasMoved = false;
  }

  abstract moveSquares(currentSquare: Square, board: Board): number[][];
}

export default AbstractPiece;
