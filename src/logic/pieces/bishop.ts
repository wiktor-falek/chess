import type { Color } from "../../..";
import AbstractPiece from "./abstractPiece";

class Bishop extends AbstractPiece {
  constructor(public color: Color) {
    super(color);
  }
}

export default Bishop;
