// Fetch all the product name and store in an array

const appleProducts = document.querySelectorAll(".as-imagegrid-item");
const array = [];

appleProducts.forEach((e) => {
  array.push(e.innerText);
});

console.log(array);
