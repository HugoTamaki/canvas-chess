$(document).ready(function () {
  var stateMachine = StateMachine(),
      canvas       = document.getElementById('canvas'),
      context      = canvas.getContext("2d"),
      board        = Board(context),
      whitePawn1   = Piece('white-pawn', board.findPositionByLabel('A2'), 'white', board),
      whitePawn2   = Piece('white-pawn', board.findPositionByLabel('B2'), 'white', board),
      whitePawn3   = Piece('white-pawn', board.findPositionByLabel('C2'), 'white', board),
      whitePawn4   = Piece('white-pawn', board.findPositionByLabel('D2'), 'white', board),
      whitePawn5   = Piece('white-pawn', board.findPositionByLabel('E2'), 'white', board),
      whitePawn6   = Piece('white-pawn', board.findPositionByLabel('F2'), 'white', board),
      whitePawn7   = Piece('white-pawn', board.findPositionByLabel('G2'), 'white', board),
      whitePawn8   = Piece('white-pawn', board.findPositionByLabel('H2'), 'white', board),
      whiteBishop1 = Piece('white-bishop', board.findPositionByLabel('C1'), 'white', board),
      whiteBishop2 = Piece('white-bishop', board.findPositionByLabel('F1'), 'white', board),
      whiteKnight1 = Piece('white-knight', board.findPositionByLabel('B1'), 'white', board),
      whiteKnight2 = Piece('white-knight', board.findPositionByLabel('G1'), 'white', board),
      whiteTower1  = Piece('white-tower', board.findPositionByLabel('A1'), 'white', board),
      whiteTower2  = Piece('white-tower', board.findPositionByLabel('H1'), 'white', board),
      whiteKing    = Piece('white-king', board.findPositionByLabel('E1'), 'white', board),
      whiteQueen   = Piece('white-queen', board.findPositionByLabel('D1'), 'white', board),
      blackPawn1   = Piece('black-pawn', board.findPositionByLabel('A7'), 'black', board),
      blackPawn2   = Piece('black-pawn', board.findPositionByLabel('B7'), 'black', board),
      blackPawn3   = Piece('black-pawn', board.findPositionByLabel('C7'), 'black', board),
      blackPawn4   = Piece('black-pawn', board.findPositionByLabel('D7'), 'black', board),
      blackPawn5   = Piece('black-pawn', board.findPositionByLabel('E7'), 'black', board),
      blackPawn6   = Piece('black-pawn', board.findPositionByLabel('F7'), 'black', board),
      blackPawn7   = Piece('black-pawn', board.findPositionByLabel('G7'), 'black', board),
      blackPawn8   = Piece('black-pawn', board.findPositionByLabel('H7'), 'black', board),
      blackBishop1 = Piece('black-bishop', board.findPositionByLabel('C8'), 'black', board),
      blackBishop2 = Piece('black-bishop', board.findPositionByLabel('F8'), 'black', board),
      blackKnight1 = Piece('black-knight', board.findPositionByLabel('B8'), 'black', board),
      blackKnight2 = Piece('black-knight', board.findPositionByLabel('G8'), 'black', board),
      blackTower1  = Piece('black-tower', board.findPositionByLabel('A8'), 'black', board),
      blackTower2  = Piece('black-tower', board.findPositionByLabel('H8'), 'black', board),
      blackKing    = Piece('black-king', board.findPositionByLabel('E8'), 'black', board),
      blackQueen   = Piece('black-queen', board.findPositionByLabel('D8'), 'black', board)

  var pieces = [
    whitePawn1,
    whitePawn2,
    whitePawn3,
    whitePawn4,
    whitePawn5,
    whitePawn6,
    whitePawn7,
    whitePawn8,
    whiteBishop1,
    whiteBishop2,
    whiteKnight1,
    whiteKnight2,
    whiteTower1,
    whiteTower2,
    whiteKing,
    whiteQueen,
    blackPawn1,
    blackPawn2,
    blackPawn3,
    blackPawn4,
    blackPawn5,
    blackPawn6,
    blackPawn7,
    blackPawn8,
    blackBishop1,
    blackBishop2,
    blackKnight1,
    blackKnight2,
    blackTower1,
    blackTower2,
    blackKing,
    blackQueen
  ]

  board.init(pieces, stateMachine)
  canvas.addEventListener("mousedown", board.click, false)
})