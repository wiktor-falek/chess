import type { Color } from "../../index";
import AbstractPiece from "./abstractPiece";

class Rook extends AbstractPiece {
  constructor(public color: Color) {
    super("rook", color);
  }
}

export default Rook;
