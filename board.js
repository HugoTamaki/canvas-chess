function Board() {
  var Board,
      positions,
      drawLines,
      fillSquares,
      drawBoard,
      fillPieces

  Board = {
    positions: [
        {
          label: 'A1',
          x: 0,
          y: 875,
          eX: 125,
          eY: 1000,
          piece: null
        },
        {
          label: 'B1',
          x: 125,
          y: 875,
          eX: 250,
          eY: 1000,
          piece: null
        },
        {
          label: 'C1',
          x: 250,
          y: 875,
          eX: 375,
          eY: 1000,
          piece: null
        },
        {
          label: 'D1',
          x: 375,
          y: 875,
          eX: 500,
          eY: 1000,
          piece: null
        },
        {
          label: 'E1',
          x: 500,
          y: 875,
          eX: 625,
          eY: 1000,
          piece: null
        },
        {
          label: 'F1',
          x: 625,
          y: 875,
          eX: 750,
          eY: 1000,
          piece: null
        },
        {
          label: 'G1',
          x: 750,
          y: 875,
          eX: 875,
          eY: 1000,
          piece: null
        },
        {
          label: 'H1',
          x: 875,
          y: 875,
          eX: 1000,
          eY: 1000,
          piece: null
        },
        {
          label: 'A2',
          x: 0,
          y: 750,
          eX: 125,
          eY: 875,
          piece: null
        },
        {
          label: 'B2',
          x: 125,
          y: 750,
          eX: 250,
          eY: 875,
          piece: null
        },
        {
          label: 'C2',
          x: 250,
          y: 750,
          eX: 375,
          eY: 875,
          piece: null
        },
        {
          label: 'D2',
          x: 375,
          y: 750,
          eX: 500,
          eY: 875,
          piece: null
        },
        {
          label: 'E2',
          x: 500,
          y: 750,
          eX: 625,
          eY: 875,
          piece: null
        },
        {
          label: 'F2',
          x: 625,
          y: 750,
          eX: 750,
          eY: 875,
          piece: null
        },
        {
          label: 'G2',
          x: 750,
          y: 750,
          eX: 875,
          eY: 875,
          piece: null
        },
        {
          label: 'H2',
          x: 875,
          y: 750,
          eX: 1000,
          eY: 875,
          piece: null
        },
        {
          label: 'A3',
          x: 0,
          y: 625,
          eX: 125,
          eY: 750,
          piece: null
        },
        {
          label: 'B3',
          x: 125,
          y: 625,
          eX: 250,
          eY: 750,
          piece: null
        },
        {
          label: 'C3',
          x: 250,
          y: 625,
          eX: 375,
          eY: 750,
          piece: null
        },
        {
          label: 'D3',
          x: 375,
          y: 625,
          eX: 500,
          eY: 750,
          piece: null
        },
        {
          label: 'E3',
          x: 500,
          y: 625,
          eX: 625,
          eY: 750,
          piece: null
        },
        {
          label: 'F3',
          x: 625,
          y: 625,
          eX: 750,
          eY: 750,
          piece: null
        },
        {
          label: 'G3',
          x: 750,
          y: 625,
          eX: 875,
          eY: 750,
          piece: null
        },
        {
          label: 'H3',
          x: 875,
          y: 625,
          eX: 1000,
          eY: 750,
          piece: null
        },
        {
          label: 'A4',
          x: 0,
          y: 500,
          eX: 125,
          eY: 625,
          piece: null
        },
        {
          label: 'B4',
          x: 125,
          y: 500,
          eX: 250,
          eY: 625,
          piece: null
        },
        {
          label: 'C4',
          x: 250,
          y: 500,
          eX: 375,
          eY: 625,
          piece: null
        },
        {
          label: 'D4',
          x: 375,
          y: 500,
          eX: 500,
          eY: 625,
          piece: null
        },
        {
          label: 'E4',
          x: 500,
          y: 500,
          eX: 625,
          eY: 625,
          piece: null
        },
        {
          label: 'F4',
          x: 625,
          y: 500,
          eX: 750,
          eY: 625,
          piece: null
        },
        {
          label: 'G4',
          x: 750,
          y: 500,
          eX: 875,
          eY: 625,
          piece: null
        },
        {
          label: 'H4',
          x: 875,
          y: 500,
          eX: 1000,
          eY: 625,
          piece: null
        },
        {
          label: 'A5',
          x: 0,
          y: 375,
          eX: 125,
          eY: 500,
          piece: null
        },
        {
          label: 'B5',
          x: 125,
          y: 375,
          eX: 250,
          eY: 500,
          piece: null
        },
        {
          label: 'C5',
          x: 250,
          y: 375,
          eX: 375,
          eY: 500,
          piece: null
        },
        {
          label: 'D5',
          x: 375,
          y: 375,
          eX: 500,
          eY: 500,
          piece: null
        },
        {
          label: 'E5',
          x: 500,
          y: 375,
          eX: 625,
          eY: 500,
          piece: null
        },
        {
          label: 'F5',
          x: 625,
          y: 375,
          eX: 750,
          eY: 500,
          piece: null
        },
        {
          label: 'G5',
          x: 750,
          y: 375,
          eX: 875,
          eY: 500,
          piece: null
        },
        {
          label: 'H5',
          x: 875,
          y: 375,
          eX: 1000,
          eY: 500,
          piece: null
        },
        {
          label: 'A6',
          x: 0,
          y: 250,
          eX: 125,
          eY: 375,
          piece: null
        },
        {
          label: 'B6',
          x: 125,
          y: 250,
          eX: 250,
          eY: 375,
          piece: null
        },
        {
          label: 'C6',
          x: 250,
          y: 250,
          eX: 375,
          eY: 375,
          piece: null
        },
        {
          label: 'D6',
          x: 375,
          y: 250,
          eX: 500,
          eY: 375,
          piece: null
        },
        {
          label: 'E6',
          x: 500,
          y: 250,
          eX: 625,
          eY: 375,
          piece: null
        },
        {
          label: 'F6',
          x: 625,
          y: 250,
          eX: 750,
          eY: 375,
          piece: null
        },
        {
          label: 'G6',
          x: 750,
          y: 250,
          eX: 875,
          eY: 375,
          piece: null
        },
        {
          label: 'H6',
          x: 875,
          y: 250,
          eX: 1000,
          eY: 375,
          piece: null
        },
        {
          label: 'A7',
          x: 0,
          y: 125,
          eX: 125,
          eY: 250,
          piece: null
        },
        {
          label: 'B7',
          x: 125,
          y: 125,
          eX: 250,
          eY: 250,
          piece: null
        },
        {
          label: 'C7',
          x: 250,
          y: 125,
          eX: 375,
          eY: 250,
          piece: null
        },
        {
          label: 'D7',
          x: 375,
          y: 125,
          eX: 500,
          eY: 250,
          piece: null
        },
        {
          label: 'E7',
          x: 500,
          y: 125,
          eX: 625,
          eY: 250,
          piece: null
        },
        {
          label: 'F7',
          x: 625,
          y: 125,
          eX: 750,
          eY: 250,
          piece: null
        },
        {
          label: 'G7',
          x: 750,
          y: 125,
          eX: 875,
          eY: 250,
          piece: null
        },
        {
          label: 'H7',
          x: 875,
          y: 125,
          eX: 1000,
          eY: 250,
          piece: null
        },
        {
          label: 'A8',
          x: 0,
          y: 0,
          eX: 125,
          eY: 125,
          piece: null
        },
        {
          label: 'B8',
          x: 125,
          y: 0,
          eX: 250,
          eY: 125,
          piece: null
        },
        {
          label: 'C8',
          x: 250,
          y: 0,
          eX: 375,
          eY: 125,
          piece: null
        },
        {
          label: 'D8',
          x: 375,
          y: 0,
          eX: 500,
          eY: 125,
          piece: null
        },
        {
          label: 'E8',
          x: 500,
          y: 0,
          eX: 625,
          eY: 125,
          piece: null
        },
        {
          label: 'F8',
          x: 625,
          y: 0,
          eX: 750,
          eY: 125,
          piece: null
        },
        {
          label: 'G8',
          x: 750,
          y: 0,
          eX: 875,
          eY: 125,
          piece: null
        },
        {
          label: 'H8',
          x: 875,
          y: 0,
          eX: 1000,
          eY: 125,
          piece: null
        }
    ],

    init: function (context, pieces) {
      drawBoard(context)
      fillPieces(context, pieces)
    },

    drawPiece: function (context, piece) {
      var img = document.getElementById(piece.type)
      var x = piece.x + 20
      var y = piece.y + 20
      context.drawImage(img, x, y, 90, 90)
    },

    click: function (event) {
      var canvas = document.getElementById('canvas')
      var rect = canvas.getBoundingClientRect()
      var x = event.x - rect.left
      var y = event.y - rect.top

      var position = Board.positions.filter(function (position) {
        return ((x >= position.x && x <= position.eX) &&
          (y >= position.y && y <= position.eY))
      })

      console.log(position.label)
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
