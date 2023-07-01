import "../css/base.css";
import "../css/board.css";

import Board from "../../chess/dist/board";

const boardElement: HTMLDivElement = document.querySelector("#board");

if (boardElement === null) {
  throw new Error("Element #board does not exist");
}

const board = new Board();
board.setup();

(function renderPieces() {
  const squares = board.flatten();
  for (let i = 0; i < squares.length; i++) {
    const squareElement = boardElement.children[i];
    const squareImgElement = squareElement.children[0];

    const square = squares[i];
    const piece = square.piece;

    if (piece !== null) {
      // set class to display current piece on this .square > img element
      squareImgElement.className = `${piece.name}--${piece.color}`;
    }
  }
})();
