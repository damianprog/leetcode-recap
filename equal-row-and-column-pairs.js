var equal = function (grid) {
  // const rows = [];
  // const cols = [];
  // const n = grid.length;

  // for (let i = 0; i < n; i++) {
  //   let currentRow = "";
  //   let currentCol = "";
  //   for (let j = 0; j < n; j++) {
  //     currentRow += `${grid[i][j]},`;
  //     currentCol += `${grid[j][i]},`;
  //   }
  //   rows.push(currentRow);
  //   cols.push(currentCol);
  // }

  // let equalCount = 0;

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (rows[i] === cols[j]) equalCount++;
  //   }
  // }

  // return equalCount;

  // ===========================================================================================
  // HashMap O(n2)

  const n = grid.length;
  const rowCount = new Map();

  for (let i = 0; i < n; i++) {
    const key = grid[i].join(",");
    rowCount.set(key, (rowCount.get(key) ?? 0) + 1);
  }

  let count = 0;
  for (let j = 0; j < n; j++) {
    let colKey = "";
    for (let i = 0; i < n; i++) {
      colKey += grid[i][j] + ",";
    }
    count += rowCount.get(colKey) ?? 0;
  }

  return count;

  // ===========================================================================================
};

// const grid = [
//   [3, 2, 1],
//   [1, 7, 6],
//   [2, 7, 7],
// ];

grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

console.log(equal(grid));
