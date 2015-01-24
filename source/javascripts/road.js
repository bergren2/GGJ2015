function RoadNetwork ($game) {
  var that = this;
  var roads = [];
  var intersections = [];

  this.addRoad = function (road) {
    var r, coords = road.getCoords();
    for (r in roads) {
      // do something
    }

    roads.push(road);
  };

  this.getRoads = function () {
    return roads;
  };

  this.coordsOnRoad = function (coords) {
    return true; // TODO temp
  };

  this.size = function () {
    return that.getRoads().length;
  };
}

function Road ($game, coords) {
  var direction = Math.floor(Math.random() * 2);
  var gridCoords = coords.grid;

  var $dom = $('<div></div>').addClass('road').width(P).height(P)
                              .css('left', coords.grid[0]).css('top', coords.grid[1]);
  $game.append($dom);

  if (direction === 0) {
    window.setTimeout(function () {
      $dom.css('left', '0').width(WINDOW_W);
  }, DELAY);
  } else {
    window.setTimeout(function () {
      $dom.css('top', '0').height(WINDOW_H);
    }, DELAY);
  }

  this.getCoords = function () {
    return gridCoords;
  };

  this.getDom = function () {
    return $dom;
  };
}
