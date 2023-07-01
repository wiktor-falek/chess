import type { Color } from "../../..";
import AbstractPiece from "./abstractPiece";

class Queen extends AbstractPiece {
  constructor(public color: Color) {
    super(color);
  }
}

export default Queen;
