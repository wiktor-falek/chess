import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces/index";
import Square from "./square";

class Board {
  squares: Array<Array<Square>>;
  constructor() {
    this.squares = [[], [], [], [], [], [], [], []];
  }

  getSquare(x: number, y: number) {
    if (x < 0 || y < 0 || x > 7 || y > 7) return null;
    return this.squares[y][x];
  }

  move(fromX: number, fromY: number, toX: number, toY: number) {
    const fromPiece = this.getSquare(fromX, fromY)?.piece;
    if (!fromPiece) {
      // square out of bounds or piece does not exist
      return false;
    }
    this.squares[fromY][fromX].piece = null;
    this.squares[toY][toX].piece = fromPiece;
    fromPiece.hasMoved = true;
    console.log(this.squares);
    return true;
  }

  setup() {
    // row 8
    this.squares[0][0] = new Square(0, 0, new Rook("black"));
    this.squares[0][1] = new Square(1, 0, new Knight("black"));
    this.squares[0][2] = new Square(2, 0, new Bishop("black"));
    this.squares[0][3] = new Square(3, 0, new Queen("black"));
    this.squares[0][4] = new Square(4, 0, new King("black"));
    this.squares[0][5] = new Square(5, 0, new Bishop("black"));
    this.squares[0][6] = new Square(6, 0, new Knight("black"));
    this.squares[0][7] = new Square(7, 0, new Rook("black"));

    // row 7
    this.squares[1][0] = new Square(0, 1, new Pawn("black"));
    this.squares[1][1] = new Square(1, 1, new Pawn("black"));
    this.squares[1][2] = new Square(2, 1, new Pawn("black"));
    this.squares[1][3] = new Square(3, 1, new Pawn("black"));
    this.squares[1][4] = new Square(4, 1, new Pawn("black"));
    this.squares[1][5] = new Square(5, 1, new Pawn("black"));
    this.squares[1][6] = new Square(6, 1, new Pawn("black"));
    this.squares[1][7] = new Square(7, 1, new Pawn("black"));

    // rows 6, 5, 4, 3
    for (let row = 6; row > 1; row--) {
      for (let file = 0; file < 8; file++) {
        this.squares[row][file] = new Square(file, row);
      }
    }

    // row 2
    this.squares[6][0] = new Square(0, 6, new Pawn("white"));
    this.squares[6][1] = new Square(1, 6, new Pawn("white"));
    this.squares[6][2] = new Square(2, 6, new Pawn("white"));
    this.squares[6][3] = new Square(3, 6, new Pawn("white"));
    this.squares[6][4] = new Square(4, 6, new Pawn("white"));
    this.squares[6][5] = new Square(5, 6, new Pawn("white"));
    this.squares[6][6] = new Square(6, 6, new Pawn("white"));
    this.squares[6][7] = new Square(7, 6, new Pawn("white"));

    // row 1
    this.squares[7][0] = new Square(0, 7, new Rook("white"));
    this.squares[7][1] = new Square(1, 7, new Knight("white"));
    this.squares[7][2] = new Square(2, 7, new Bishop("white"));
    this.squares[7][3] = new Square(3, 7, new Queen("white"));
    this.squares[7][4] = new Square(4, 7, new King("white"));
    this.squares[7][5] = new Square(5, 7, new Bishop("white"));
    this.squares[7][6] = new Square(6, 7, new Knight("white"));
    this.squares[7][7] = new Square(7, 7, new Rook("white"));

    this.squares[4][4] = new Square(4, 4, new Rook("white"));

    return this.squares;
  }

  flatten() {
    return this.squares.flat();
  }
}

export default Board;
