function navigateTrail(map) {

  const directions = [
    { x: 0, y: 1, move: "R" },
    { x: 1, y: 0, move: "D" },
    { x: 0, y: -1, move: "L" },
    { x: -1, y: 0, move: "U" }
  ];

  let start = null;
  let visited = new Set();
  let result = "";
  

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "C") {
        start = [i, j];
      }
    }
  }

  let [x, y] = start;

  while (true) {

    visited.add(x + "," + y);

    for (let dir of directions) {

      let nx = x + dir.x;
      let ny = y + dir.y;

      if (
        map[nx] &&
        map[nx][ny] &&
        !visited.has(nx + "," + ny)
      ) {

        if (map[nx][ny] === "T" || map[nx][ny] === "G") {

          result += dir.move;

          if (map[nx][ny] === "G") {
            return result;
          }

          x = nx;
          y = ny;
          break;
        }
      }
    }
  }
}