var product = function (nums) {
  const products = [];

  let currentProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    products.push(currentProduct);

    currentProduct *= nums[i];
  }

  currentProduct = 1;

  for (let i = products.length - 1; i >= 0; i--) {
    products[i] *= currentProduct;

    currentProduct *= nums[i];
  }

  return products;
};
