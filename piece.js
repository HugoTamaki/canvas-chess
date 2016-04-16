function Piece(type, position, color, board) {
  var Piece,
      positionsIncludeLabel,
      whitePawnAction

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
          newLine,
          possiblePositions

      oldColumn = this.position.label.split('')[0]
      oldLine = this.position.label.split('')[1]
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

  whitePawnAction = function (oldPosition, newPosition, piece) {
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

    if (positionsIncludeLabel(possiblePositions, newPosition.label)) {
      if ((newPosition.piece && newPosition.color === 'white')) {
        alert('Não da pra mover pra essa posição!')
        return false
      } else {
        piece.board.fillPiece(newPosition, piece)
        piece.board.erase(piece)
        return true
      }
    }
  }

  positionsIncludeLabel = function (positions, label) {
    return positions.filter(function (position) {
      return position.label === label
    })
  }

  position.piece = Piece

  return Piece
}