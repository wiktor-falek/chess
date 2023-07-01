import type { Color } from "../../..";
import AbstractPiece from "./abstractPiece";

class King extends AbstractPiece {
  constructor(public color: Color) {
    super(color);
  }
}

export default King;
