import type { Color } from "../../index";
import AbstractPiece from "./abstractPiece";

class Rook extends AbstractPiece {
  constructor(public color: Color) {
    super(color);
  }
}

export default Rook;
