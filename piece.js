function Piece(type, position, color, board) {
  var Piece,
      insidePossiblePositions,
      whitePawnAction,
      moveColumn,
      boardPossiblePositions,
      insideBoardPositions,
      whitePawnPossiblePositions,
      canMovePawn,
      moveByColor

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
        line: oldLine,
        x: this.board.lastClickedPosition.x,
        y: this.board.lastClickedPosition.y,
        color: this.board.lastClickedPosition.color
      }

      if (this.type === 'white-pawn' || this.type === 'black-pawn') {
        return pawnAction(oldPosition, newPosition, this)
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

  pawnAction = function (oldPosition, newPosition, piece) {
    var possiblePositions = pawnPossiblePositions(oldPosition, newPosition, piece),
        pieceColor = piece.color,
        antiColor = piece.color === 'white' ? 'black' : 'white'

    if (newPosition.piece && newPosition.piece.color === pieceColor) {
      alert('Não dá para mover pra essa posição')
      return false
    } else {
      if (insidePossiblePositions(possiblePositions, newPosition.label)) {
        piece.board.fillPiece(newPosition, piece)
        piece.board.erase(oldPosition)
        newPosition.piece = piece
        return true
      } else {
        alert('Não dá para mover pra essa posição')
        return false
      }
    }
  }

  pawnPossiblePositions = function (oldPosition, newPosition, piece) {
    var possiblePositions = [],
        offensivePositions,
        advanceOne = verticalMoveByColor(piece, 1),
        advanceTwo = verticalMoveByColor(piece, 2),
        pieceColor = piece.color,
        antiColor = piece.color === 'white' ? 'black' : 'white'

    if (canMovePawn(newPosition, oldPosition, advanceOne)) {
      if (oldPosition.line === '2' || oldPosition.line === '7') {
        possiblePositions = [
          oldPosition.column + (parseInt(oldPosition.line) + advanceOne),
          oldPosition.column + (parseInt(oldPosition.line) + advanceTwo)
        ]
      } else {
        possiblePositions = [
          oldPosition.column + (parseInt(oldPosition.line) + advanceOne)
        ]
      }

      if (newPosition.piece && newPosition.piece.color === antiColor) {
        var offensivePositions = [
          moveColumn(oldPosition.column, 1) + (parseInt(oldPosition.line) + advanceOne),
          moveColumn(oldPosition.column, -1) + (parseInt(oldPosition.line) + advanceOne)
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

  verticalMoveByColor = function (piece, qty) {
    if (piece.color === 'white') {
      return +qty
    } else {
      return -qty
    }
  }

  canMovePawn = function (newPosition, oldPosition, qty) {
    return !newPosition.piece ||
      newPosition.label !== (oldPosition.column + (parseInt(oldPosition.line) + qty))
  }

  moveColumn = function (char, times) {
    var unicode = char.codePointAt(0)
    unicode += times
    return String.fromCodePoint(unicode)
  }

  position.piece = Piece

  return Piece
}