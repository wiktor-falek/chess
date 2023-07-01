import Pawn from "./src/logic/pieces/pawn";
import Knight from "./src/logic/pieces/knight";
import Bishop from "./src/logic/pieces/bishop";
import Rook from "./src/logic/pieces/rook";
import Queen from "./src/logic/pieces/queen";
import King from "./src/logic/pieces/king";

export type Color = "white" | "black";
export type Piece = Pawn | Knight | Bishop | Rook | Queen | King;
