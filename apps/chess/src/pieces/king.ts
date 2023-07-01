import type { Color } from "../../index";
import AbstractPiece from "./abstractPiece";

class King extends AbstractPiece {
  constructor(public color: Color) {
    super("king", color);
  }
}

export default King;
