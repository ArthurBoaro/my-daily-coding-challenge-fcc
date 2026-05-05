function isInCrossword(char) {

    const grid = [
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0]
    ];

    const binary = char.charCodeAt(0).toString(2).padStart(8, "0");

    for (let row of grid) {
        const rowCheck = row.join("")
        if (rowCheck == binary) {
        return true
        }
    }

    for (let col = 0; col < grid[0].length; col++) {
        let column = [];

        for (let row = 0; row < grid.length; row++) {
            column.push(grid[row][col]);
        }

        let columnCheck = column.join("");

        if (columnCheck == binary) {
            return true;
        }
    }

  return false;
}