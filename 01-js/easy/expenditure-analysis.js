/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let myMap = new Map();

  for (let i of transactions) {
    const { category, price } = i;
    if (!myMap.has(category)) {
      myMap.set(category, price);
    } else {
      myMap.set(category, myMap.get(category) + price);
    }
  }

  let resultArr = [];

  myMap.forEach((value, key) => {
    resultArr.push({ category: key, totalSpent: value });
  });

  return resultArr;
}


module.exports = calculateTotalSpentByCategory;
