function Board() {
  var Board,
      positions,
      drawLines,
      fillSquares,
      drawBoard,
      fillPieces

  Board = {
    positions: {
        A1: {
          x: 0,
          y: 875,
          piece: null
        },
        B1: {
          x: 125,
          y: 875,
          piece: null
        },
        C1: {
          x: 250,
          y: 875,
          piece: null
        },
        D1: {
          x: 375,
          y: 875,
          piece: null
        },
        E1: {
          x: 500,
          y: 875,
          piece: null
        },
        F1: {
          x: 625,
          y: 875,
          piece: null
        },
        G1: {
          x: 750,
          y: 875,
          piece: null
        },
        H1: {
          x: 875,
          y: 875,
          piece: null
        },
        A2: {
          x: 0,
          y: 750,
          piece: null
        },
        B2: {
          x: 125,
          y: 750,
          piece: null
        },
        C2: {
          x: 250,
          y: 750,
          piece: null
        },
        D2: {
          x: 375,
          y: 750,
          piece: null
        },
        E2: {
          x: 500,
          y: 750,
          piece: null
        },
        F2: {
          x: 625,
          y: 750,
          piece: null
        },
        G2: {
          x: 750,
          y: 750,
          piece: null
        },
        H2: {
          x: 875,
          y: 750,
          piece: null
        },
        A3: {
          x: 0,
          y: 625,
          piece: null
        },
        B3: {
          x: 125,
          y: 625,
          piece: null
        },
        C3: {
          x: 250,
          y: 625,
          piece: null
        },
        D3: {
          x: 375,
          y: 625,
          piece: null
        },
        E3: {
          x: 500,
          y: 625,
          piece: null
        },
        F3: {
          x: 625,
          y: 625,
          piece: null
        },
        G3: {
          x: 750,
          y: 625,
          piece: null
        },
        H3: {
          x: 875,
          y: 625,
          piece: null
        },
        A4: {
          x: 0,
          y: 500,
          piece: null
        },
        B4: {
          x: 125,
          y: 500,
          piece: null
        },
        C4: {
          x: 250,
          y: 500,
          piece: null
        },
        D4: {
          x: 375,
          y: 500,
          piece: null
        },
        E4: {
          x: 500,
          y: 500,
          piece: null
        },
        F4: {
          x: 625,
          y: 500,
          piece: null
        },
        G4: {
          x: 750,
          y: 500,
          piece: null
        },
        H4: {
          x: 875,
          y: 500,
          piece: null
        },
        A5: {
          x: 0,
          y: 375,
          piece: null
        },
        B5: {
          x: 125,
          y: 375,
          piece: null
        },
        C5: {
          x: 250,
          y: 375,
          piece: null
        },
        D5: {
          x: 375,
          y: 375,
          piece: null
        },
        E5: {
          x: 500,
          y: 375,
          piece: null
        },
        F5: {
          x: 625,
          y: 375,
          piece: null
        },
        G5: {
          x: 750,
          y: 375,
          piece: null
        },
        H5: {
          x: 875,
          y: 375,
          piece: null
        },
        A6: {
          x: 0,
          y: 250,
          piece: null
        },
        B6: {
          x: 125,
          y: 250,
          piece: null
        },
        C6: {
          x: 250,
          y: 250,
          piece: null
        },
        D6: {
          x: 375,
          y: 250,
          piece: null
        },
        E6: {
          x: 500,
          y: 250,
          piece: null
        },
        F6: {
          x: 625,
          y: 250,
          piece: null
        },
        G6: {
          x: 750,
          y: 250,
          piece: null
        },
        H6: {
          x: 875,
          y: 250,
          piece: null
        },
        A7: {
          x: 0,
          y: 125,
          piece: null
        },
        B7: {
          x: 125,
          y: 125,
          piece: null
        },
        C7: {
          x: 250,
          y: 125,
          piece: null
        },
        D7: {
          x: 375,
          y: 125,
          piece: null
        },
        E7: {
          x: 500,
          y: 125,
          piece: null
        },
        F7: {
          x: 625,
          y: 125,
          piece: null
        },
        G7: {
          x: 750,
          y: 125,
          piece: null
        },
        H7: {
          x: 875,
          y: 125,
          piece: null
        },
        A8: {
          x: 0,
          y: 0,
          piece: null
        },
        B8: {
          x: 125,
          y: 0,
          piece: null
        },
        C8: {
          x: 250,
          y: 0,
          piece: null
        },
        D8: {
          x: 375,
          y: 0,
          piece: null
        },
        E8: {
          x: 500,
          y: 0,
          piece: null
        },
        F8: {
          x: 625,
          y: 0,
          piece: null
        },
        G8: {
          x: 750,
          y: 0,
          piece: null
        },
        H8: {
          x: 875,
          y: 0,
          piece: null
        }
    },

    init: function (context, pieces) {
      drawBoard(context)
      fillPieces(context, pieces)
    },

    drawPiece: function (context, piece) {
      var img = document.getElementById(piece.type)
      var x = piece.x + 20
      var y = piece.y + 20
      context.drawImage(img, x, y, 90, 90)
    }
  }

  drawBoard = function (context) {
    drawLines(context)
    for(var i=0;i<1000;i+=125) {
      if (i % 10 === 0) {
        fillSquares(context, 0, i, '#000000')
      } else {
        fillSquares(context, 125, i, '#000000')
      }
    }
  }

  fillPieces = function (context, pieces) {
    pieces.forEach(function (piece) {
      Board.drawPiece(context, piece)
    })
  }

  drawLines = function (context) {
    for(var i=125;i<1000;i+=125) {
      context.moveTo(0, i)
      context.lineTo(1000, i)
      context.stroke()
    }

    for(var i=125;i<1000;i+=125) {
      context.moveTo(i, 0)
      context.lineTo(i, 1000)
      context.stroke()
    }
  }

  fillSquares = function (context, start, height, color) {
    context.fillStyle = color
    for(var i=start;i<1000;i+=250) {
      context.fillRect(i, height, 125, 125)
    }
  }

  return Board
}
