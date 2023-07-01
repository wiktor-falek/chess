import type { Color } from "../../index";

abstract class AbstractPiece {
  constructor(public color: Color) {
    this.color = color;
  }
}

export default AbstractPiece;
