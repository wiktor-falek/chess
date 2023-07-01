import {
  Pawn,
  Knight,
  Bishop,
  Rook,
  Queen,
  King,
} from "./src/logic/pieces/index";

export type Color = "white" | "black";
export type Piece = Pawn | Knight | Bishop | Rook | Queen | King;
