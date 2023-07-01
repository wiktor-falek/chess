import type { Color } from "../../..";

abstract class AbstractPiece {
  constructor(public color: Color) {
    this.color = color;
  }
}

export default AbstractPiece;
