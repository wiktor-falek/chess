import type { Color } from "../../index";
import AbstractPiece from "./abstractPiece";

class Pawn extends AbstractPiece {
  constructor(public color: Color) {
    super("pawn", color);
  }
}

export default Pawn;
