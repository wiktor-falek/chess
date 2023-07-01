import type { Color } from "../../..";
import AbstractPiece from "./abstractPiece";

class Pawn extends AbstractPiece {
  constructor(public color: Color) {
    super(color);
  }
}

export default Pawn;
