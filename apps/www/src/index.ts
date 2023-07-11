import "../css/base.css";
import "../css/board.css";

import Game from "../../chess/src/game";

const boardElement: HTMLDivElement = document.querySelector("#board");
const toMoveColorElement: HTMLSpanElement =
  document.querySelector("#to-move__color");

if (boardElement === null) {
  throw new Error("Element #board does not exist");
}

const game = new Game().setup();
const board = game.board;

(function initPieces() {
  const squares = board.flatten();
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];

    const squareElement = boardElement.children[i];
    squareElement.setAttribute("x", square.x.toString());
    squareElement.setAttribute("y", square.y.toString());

    const { piece } = square;
    if (piece !== null) {
      // create the img element if piece exists on the board
      const pieceImgElement = document.createElement("img");
      pieceImgElement.classList.add("piece", `${piece.name}--${piece.color}`);
      pieceImgElement.draggable = true;
      squareElement.appendChild(pieceImgElement);
    }
  }
})();

let draggedSquareElement: HTMLDivElement;
let validMoves: number[][] | null = null;
function dragStart(e: Event) {
  console.log("drag start");
  e.preventDefault();
  const draggedPieceElement = e.target as HTMLImageElement;
  draggedSquareElement = draggedPieceElement.parentElement as HTMLDivElement;

  if (validMoves === null) {
    const x = +draggedSquareElement.getAttribute("x");
    const y = +draggedSquareElement.getAttribute("y");
    validMoves = game.getLegalMoves(x, y);
    for (const [x, y] of validMoves) {
      const squareElement = document.querySelector(
        `.square[x="${x}"][y="${y}"]`
      );
      if (squareElement) {
        squareElement.classList.add("square--movable");
      }
    }
  }
}

function dragOver(e: Event) {
  console.log("drag over");
  e.preventDefault();
}

function dragDrop(e: Event) {
  console.log("drag drop");
  e.preventDefault();

  const dropElement = e.target as HTMLElement; // .square OR .square > img.piece

  const dropSquareElement = dropElement.classList.contains("piece")
    ? dropElement.parentElement
    : dropElement;

  const fromX = +draggedSquareElement.getAttribute("x");
  const fromY = +draggedSquareElement.getAttribute("y");
  const toX = +dropSquareElement.getAttribute("x");
  const toY = +dropSquareElement.getAttribute("y");

  const hasMoved = game.move(fromX, fromY, toX, toY);

  if (hasMoved) {
    // move the image from one square to another
    const pieceImgElement = draggedSquareElement.firstChild;
    draggedSquareElement.removeChild(pieceImgElement);

    if (dropSquareElement.firstChild) {
      dropSquareElement.removeChild(dropSquareElement.firstChild);
    }
    dropSquareElement.appendChild(pieceImgElement);

    // update current turn indicator
    toMoveColorElement.innerHTML = game.currentTurn.color;
  }
}

function dragEnd(e: Event) {
  console.log("drag end");
  for (const [x, y] of validMoves) {
    const squareElement = document.querySelector(`.square[x="${x}"][y="${y}"]`);
    if (squareElement) {
      squareElement.classList.remove("square--movable");
    }
  }
  validMoves = null;
}

const pieceElements = boardElement.querySelectorAll(".square > img.piece");
pieceElements.forEach((piece) => {
  piece.addEventListener("drag", dragStart);
});

const squareElements = boardElement.querySelectorAll(".square");
squareElements.forEach((square, i) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
});
