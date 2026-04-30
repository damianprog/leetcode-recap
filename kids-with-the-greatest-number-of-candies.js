var kidsWithCandies = function (candies, extraCandies) {
  let greatest = candies[0];

  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > greatest) greatest = candies[i];
  }

  const results = [];

  for (let i = 0; i < candies.length; i++) {
    results.push(candies[i] + extraCandies >= greatest);
  }

  return results;
};
