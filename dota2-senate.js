var dota2Senate = function (senate) {
  //   const radiantIndexes = [];
  //   const direIndexes = [];

  //   for (let i = 0; i < senate.length; i++) {
  //     if (senate[i] === "R") {
  //       radiantIndexes.push(i);
  //     } else {
  //       direIndexes.push(i);
  //     }
  //   }

  //   while (radiantIndexes.length > 0 && direIndexes.length > 0) {
  //     if (radiantIndexes[0] < direIndexes[0]) {
  //       radiantIndexes[0] += senate.length;
  //       radiantIndexes.push(radiantIndexes[0]);
  //     } else {
  //       direIndexes[0] += senate.length;
  //       direIndexes.push(direIndexes[0]);
  //     }

  //     direIndexes.shift();
  //     radiantIndexes.shift();
  //   }

  //   return radiantIndexes.length === 0 ? "Dire" : "Radiant";

  const radiantIndexes = [];
  const direIndexes = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiantIndexes.push(i);
    } else {
      direIndexes.push(i);
    }
  }

  while (radiantIndexes.length > 0 && direIndexes.length > 0) {
    const r = radiantIndexes.shift();
    const d = radiantIndexes.shift();

    if (r < d) {
      radiantIndexes.push(r + senate.length);
    } else {
      direIndexes.push(d + senate.length);
    }
  }

  return radiantIndexes.length === 0 ? "Dire" : "Radiant";
};
