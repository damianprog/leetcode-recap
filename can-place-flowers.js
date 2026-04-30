var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;

  let planted = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      planted++;

      if (planted >= n) return true;
    }
  }

  return false;
};
