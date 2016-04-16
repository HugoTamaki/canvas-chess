function StateMachine() {
  var StateMachine,
      states = [
        'p1SelectPosition',
        'p1MovePiece',
        'p2SelectPosition',
        'p2MovePiece'
      ]

  StateMachine = {
    states: states,
    index: 0,

    actualState: function () {
      return this.states[this.index]
    },

    changeState: function () {
      this.index = (this.index === 3) ? 0 : this.index + 1
    }
  }

  return StateMachine
}