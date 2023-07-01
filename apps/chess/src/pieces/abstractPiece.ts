import type { Color, PieceName } from "../../index";

abstract class AbstractPiece {
  constructor(public name: PieceName, public color: Color) {
    this.name = name;
    this.color = color;
  }
}

export default AbstractPiece;
