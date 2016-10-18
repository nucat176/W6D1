class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $squares = $("li");
    const that = this;
    $squares.click( e => {
      const $square = $(e.currentTarget);
      $square.addClass("clicked");
      that.makeMove($square);
      if (this.game.isOver()) {
        if (this.game.winner()) {
          alert(`${this.game.currentPlayer} wins!`);
        } else {
          alert("NO ONE WINS");
        }
      }
    });
  }

  makeMove($square) {
    const pos = [$square.attr("row"), $square.attr("col")];
    this.game.playMove(pos);
    $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    for (let i = 0; i < 9; i++) {
      const rowI = Math.floor(i / 3);
      const colI = i % 3;
      const $li = $("<li></li>");
      // $li.attr({pos: [row, col]});
      $li.attr({row: rowI, col: colI});
      $ul.append($li);
    }
    this.$el.append($ul);
  }

}

module.exports = View;
