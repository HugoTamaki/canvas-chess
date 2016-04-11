$(document).ready(function () {
  var positions = {
    A1: {
      x: 0,
      y: 875
    },
    B1: {
      x: 125,
      y: 875
    },
    C1: {
      x: 250,
      y: 875
    },
    D1: {
      x: 375,
      y: 875
    },
    E1: {
      x: 500,
      y: 875
    },
    F1: {
      x: 625,
      y: 875
    },
    G1: {
      x: 750,
      y: 875
    },
    H1: {
      x: 875,
      y: 875
    },
    A2: {
      x: 0,
      y: 750
    },
    B2: {
      x: 125,
      y: 750
    },
    C2: {
      x: 250,
      y: 750
    },
    D2: {
      x: 375,
      y: 750
    },
    E2: {
      x: 500,
      y: 750
    },
    F2: {
      x: 625,
      y: 750
    },
    G2: {
      x: 750,
      y: 750
    },
    H2: {
      x: 875,
      y: 750
    },
    A3: {
      x: 0,
      y: 625
    },
    B3: {
      x: 125,
      y: 625
    },
    C3: {
      x: 250,
      y: 625
    },
    D3: {
      x: 375,
      y: 625
    },
    E3: {
      x: 500,
      y: 625
    },
    F3: {
      x: 625,
      y: 625
    },
    G3: {
      x: 750,
      y: 625
    },
    H3: {
      x: 875,
      y: 625
    },
    A4: {
      x: 0,
      y: 500
    },
    B4: {
      x: 125,
      y: 500
    },
    C4: {
      x: 250,
      y: 500
    },
    D4: {
      x: 375,
      y: 500
    },
    E4: {
      x: 500,
      y: 500
    },
    F4: {
      x: 625,
      y: 500
    },
    G4: {
      x: 750,
      y: 500
    },
    H4: {
      x: 875,
      y: 500
    },
    A5: {
      x: 0,
      y: 375
    },
    B5: {
      x: 125,
      y: 375
    },
    C5: {
      x: 250,
      y: 375
    },
    D5: {
      x: 375,
      y: 375
    },
    E5: {
      x: 500,
      y: 375
    },
    F5: {
      x: 625,
      y: 375
    },
    G5: {
      x: 750,
      y: 375
    },
    H5: {
      x: 875,
      y: 375
    },
    A6: {
      x: 0,
      y: 250
    },
    B6: {
      x: 125,
      y: 250
    },
    C6: {
      x: 250,
      y: 250
    },
    D6: {
      x: 375,
      y: 250
    },
    E6: {
      x: 500,
      y: 250
    },
    F6: {
      x: 625,
      y: 250
    },
    G6: {
      x: 750,
      y: 250
    },
    H6: {
      x: 875,
      y: 250
    },
    A7: {
      x: 0,
      y: 125
    },
    B7: {
      x: 125,
      y: 125
    },
    C7: {
      x: 250,
      y: 125
    },
    D7: {
      x: 375,
      y: 125
    },
    E7: {
      x: 500,
      y: 125
    },
    F7: {
      x: 625,
      y: 125
    },
    G7: {
      x: 750,
      y: 125
    },
    H7: {
      x: 875,
      y: 125
    },
    A8: {
      x: 0,
      y: 0
    },
    B8: {
      x: 125,
      y: 0
    },
    C8: {
      x: 250,
      y: 0
    },
    D8: {
      x: 375,
      y: 0
    },
    E8: {
      x: 500,
      y: 0
    },
    F8: {
      x: 625,
      y: 0
    },
    G8: {
      x: 750,
      y: 0
    },
    H8: {
      x: 875,
      y: 0
    },
  }

  var canvas = document.getElementById('canvas')
  var context = canvas.getContext("2d")
  var whitePawn1,
      whitePawn2,
      whitePawn3,
      whitePawn4,
      whitePawn5,
      whitePawn6,
      whitePawn7,
      whitePawn8,
      whiteBishop1,
      whiteBishop2,
      whiteKnight1,
      whiteKnight2,
      whiteTower1,
      whiteTower2,
      whiteKing,
      whiteQueen,
      blackPawn1,
      blackPawn2,
      blackPawn3,
      blackPawn4,
      blackPawn5,
      blackPawn6,
      blackPawn7,
      blackPawn8,
      blackBishop1,
      blackBishop2,
      blackKnight1,
      blackKnight2,
      blackTower1,
      blackTower2,
      blackKing,
      blackQueen

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