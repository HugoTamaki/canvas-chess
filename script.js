$(document).ready(function () {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext("2d")

  function drawTable() {
    drawLines()
    for(var i=0;i<1000;i+=125) {
      if (i % 10 === 0) {
        fillSquares(0, i, '#000000')
      } else {
        fillSquares(125, i, '#000000')
      }
    }
  }

  function drawLines() {
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

  function fillSquares(start, height, color) {
    context.fillStyle = color
    for(var i=start;i<1000;i+=250) {
      context.fillRect(i, height, 125, 125)
    }
  }

  drawTable()
})