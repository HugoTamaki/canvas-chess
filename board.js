function Board(context) {
  var Board,
      drawLines,
      fillSquares,
      drawBoard,
      fillPieces,
      findPosition,
      executeAction

  Board = {
    positions: positions,
    context: context,

    init: function (pieces, stateMachine) {
      this.stateMachine = stateMachine
      drawBoard()
      fillPieces(pieces)
    },

    drawPiece: function (piece) {
      var img = document.getElementById(piece.type)
      var x = piece.x + 20
      var y = piece.y + 20
      Board.context.drawImage(img, x, y, 90, 90)
    },

    findPositionByLabel: function (label) {
      return this.positions.find(function (obj) { return obj.label ===  label})
    },

    findPositionByCoord: function (x, y) {
      return this.positions.find(function (position) {
        return ((x >= position.x && x <= position.eX) &&
          (y >= position.y && y <= position.eY))
      })
    },

    fillPiece: function (position, piece) {
      this.erase(position)
      var img = document.getElementById(piece.type)
      var x = position.x + 20
      var y = position.y + 20
      this.context.drawImage(img, x, y, 90, 90)
    },

    erase: function (position) {
      this.context.fillStyle = position.color
      this.context.fillRect(position.x, position.y, 125, 125)
    },

    click: function (event) {
      var canvas = document.getElementById('canvas')
      var rect = canvas.getBoundingClientRect()
      var x = event.clientX - rect.left
      var y = event.clientY - rect.top

      var clickedPosition = Board.findPositionByCoord(x, y)

      executeAction(clickedPosition)
    }
  }

  drawBoard = function () {
    drawLines(Board.context)
    for(var i=0;i<1000;i+=125) {
      if (i % 10 === 0) {
        fillSquares(0, i, '#000000')
      } else {
        fillSquares(125, i, '#000000')
      }
    }
  }

  fillPieces = function (pieces) {
    pieces.forEach(function (piece) {
      Board.drawPiece(piece)
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

  fillSquares = function (start, height, color) {
    Board.context.fillStyle = color
    for(var i=start;i<1000;i+=250) {
      Board.context.fillRect(i, height, 125, 125)
    }
  }

  executeAction = function (position) {
    if (Board.stateMachine.actualState() === 'p1SelectPosition') {
      if (position.piece && position.piece.color === 'white') {
        Board.lastClickedPosition = position
        Board.stateMachine.changeState()
      }
    } else if (Board.stateMachine.actualState() === 'p1MovePiece') {
      if (Board.lastClickedPosition.piece.movePieceTo(position)) {
        Board.stateMachine.changeState()
      }
    }

    console.log(position)
  }

  return Board
}
