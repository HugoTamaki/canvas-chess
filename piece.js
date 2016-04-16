function Piece(type, position, color, board) {
  var Piece,
      positionsIncludeLabel

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

      if (this.type === 'white-pawn') {
        if (oldLine === '2') {
          possiblePositions = [
            oldColumn + (parseInt(oldLine) + 1),
            oldColumn + (parseInt(oldLine) + 2)
          ]
        } else {
          possiblePositions = [
            oldColumn + (parseInt(oldLine) + 1)
          ]
        }

        if (positionsIncludeLabel(possiblePositions, newPosition.label)) {
          if ((newPosition.piece && newPosition.color === 'white')) {
            alert('Não da pra mover pra essa posição!')
            return false
          } else {
            this.board.fillPiece(newPosition, this)
            this.board.erase(this)
            return true
          }
        }
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