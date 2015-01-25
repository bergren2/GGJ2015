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

  this.coordsOnRoad = function (realCoords) {
    var c, d, i;
    for (i = 0; i < roads.length; i++) {
      c = roads[i].getCoords();
      d = roads[i].getDirection();
      if (d === 0 && c[1] === realCoords.grid[1] ||
          d === 1 && c[0] === realCoords.grid[0]) {
        return true; // above not quite right
      }
    }
    return false;
  };

  this.size = function () {
    return that.getRoads().length;
  };

  this.nearestRoad = function(coords) {
    var i, roadCoords = [[], []];
    // grab x coords of roads
    for (i = 0; i < roads.length; i++) {
      if (roads[i].getDirection()) {
        roadCoords[1].push(roads[i].getCoords()[1]);
      } else {
        roadCoords[0].push(roads[i].getCoords()[0]);
      }
    }
    roadCoords[0].sort();
    roadCoords[1].sort();

    // pick nearest road and return coords
  };
}

function Road ($game, coords) {
  // 0 is horizontal, 1 is vertical
  var direction = Math.floor(Math.random() * 2);
  var gridCoords = coords.grid;

  var $dom = $('<div></div>').addClass('road')
               .width(P).height(P)
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

  // methods
  this.getCoords = function () {
    return gridCoords;
  };

  this.getDirection = function () {
    return direction;
  };

  this.getDom = function () {
    return $dom;
  };
}
