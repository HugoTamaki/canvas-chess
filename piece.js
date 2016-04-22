function Piece(type, position, color, board) {
  var Piece,
      insidePossiblePositions,
      whitePawnAction,
      moveColumn,
      boardPossiblePositions,
      insideBoardPositions,
      whitePawnPossiblePositions,
      canMovePawn

  boardPossiblePositions = board.positions.map(function (position) {
    return position.label
  })

  Piece = {
    x: position.x,
    y: position.y,
    position: position,
    type: type,
    display: true,
    color: color,
    board: board,

    movePieceTo: function (newPosition) {
      var oldColumn,
          oldLine,
          newColumn,
          newLine

      oldColumn = this.board.lastClickedPosition.label.split('')[0]
      oldLine = this.board.lastClickedPosition.label.split('')[1]
      newColumn = newPosition.label.split('')[0]
      newLine = newPosition.label.split('')[1]

      oldPosition = {
        column: oldColumn,
        line: oldLine
      }

      if (this.type === 'white-pawn') {
        return whitePawnAction(oldPosition, newPosition, this)
      }
    }
  }

  insideBoardPositions = function (label) {
    return boardPossiblePositions.find(function (elem) {
      return elem === label
    })
  }

  insidePossiblePositions = function (positions, label) {
    return positions.find(function (position) {
      return position === label
    })
  }

  whitePawnAction = function (oldPosition, newPosition, piece) {
    var possiblePositions = whitePawnPossiblePositions(oldPosition, newPosition)

    if (newPosition.piece && newPosition.piece.color === 'white') {
      alert('Não dá para mover pra essa posição')
      return false
    } else {
      if (insidePossiblePositions(possiblePositions, newPosition.label)) {
        if ((newPosition.piece && newPosition.color === 'black')) {
          newPosition.piece = piece
        }
        piece.board.fillPiece(newPosition, piece)
        piece.board.erase(piece)
        return true
      } else {
        alert('Não dá para mover pra essa posição')
        return false
      }
    }
  }

  whitePawnPossiblePositions = function (oldPosition, newPosition) {
    var possiblePositions = [],
        offensivePositions

    if (canMovePawn(newPosition, oldPosition)) {
      if (oldPosition.line === '2') {
        possiblePositions = [
          oldPosition.column + (parseInt(oldPosition.line) + 1),
          oldPosition.column + (parseInt(oldPosition.line) + 2)
        ]
      } else {
        possiblePositions = [
          oldPosition.column + (parseInt(oldPosition.line) + 1)
        ]
      }

      if (newPosition.piece && newPosition.piece.color === 'black') {
        var offensivePositions = [
          moveColumn(oldPosition.column, 1) + (parseInt(oldPosition.line) + 1),
          moveColumn(oldPosition.column, -1) + (parseInt(oldPosition.line) + 1)
        ]

        offensivePositions.forEach(function (offensivePosition) {
          if (insideBoardPositions(offensivePosition)) {
            possiblePositions.push(offensivePosition)
          }
        })
      }
    }

    return possiblePositions
  }

  canMovePawn = function (newPosition, oldPosition) {
    return !newPosition.piece ||
      newPosition.label !== (oldPosition.column + (parseInt(oldPosition.line) + 1))
  }

  moveColumn = function (char, times) {
    var unicode = char.codePointAt(0)
    unicode += times
    return String.fromCodePoint(unicode)
  }

  position.piece = Piece

  return Piece
}