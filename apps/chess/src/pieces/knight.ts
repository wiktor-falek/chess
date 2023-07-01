import type { Color } from "../../index";
import AbstractPiece from "./abstractPiece";

class Knight extends AbstractPiece {
  constructor(public color: Color) {
    super("knight", color);
  }
}

export default Knight;
