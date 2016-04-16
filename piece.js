function Piece(type, position, color) {
  var Piece

  Piece = {
    x: position.x,
    y: position.y,
    type: type,
    display: true,
    color: color
  }

  position.piece = Piece

  return Piece
}