import type { Color } from "../../index";
import AbstractPiece from "./abstractPiece";

class Bishop extends AbstractPiece {
  constructor(public color: Color) {
    super("bishop", color);
  }
}

export default Bishop;
