function Board() {
  var Board,
      drawLines,
      fillSquares,
      drawBoard,
      fillPieces,
      findPosition

  Board = {
    positions: positions,

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

    findPosition: function (label) {
      return this.positions.find(function (obj) { return obj.label ===  label})
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
