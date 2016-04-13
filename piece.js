function Piece(type, position) {
  var Piece

  Piece = {
    x: position.x,
    y: position.y,
    type: type,
    display: true
  }

  return Piece
}