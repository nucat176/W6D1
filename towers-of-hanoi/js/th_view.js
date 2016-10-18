class HanoiView {

  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
  }

  setupTowers() {
    const $ul = $("<ul></ul>");
    for (let i = 0; i < 9; i++) {
      const height = Math.floor(i / 3);
      const tower = i % 3;
      const $li = $("<li></li>");
      $li.attr({height: height, tower: tower});

      if (tower === 0) {
        $li.text(height + 1);
        $li.addClass("disk");
      }

      $ul.append($li);
    }
    this.rootEl.append($ul);
  }

}


module.exports = HanoiView;
