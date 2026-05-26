/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let lowest = prices[0];

  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - lowest);
    lowest = Math.min(lowest, prices[i]);
  }

  return max;
};
