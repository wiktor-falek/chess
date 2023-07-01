import { Pawn, Knight, Bishop, Rook, Queen, King } from "./src/pieces/index";

export type Color = "white" | "black";
export type Piece = Pawn | Knight | Bishop | Rook | Queen | King;
export type PieceName =
  | "pawn"
  | "knight"
  | "bishop"
  | "rook"
  | "queen"
  | "king";
