console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
console.log(`Items currently in basket: ${basket}`);

function addItem (item) {
  console.log(`${item} added to the basket!`);
  if (basket.push(item)) {
    return true;
  } else {
    return false;
  }
} //end addItem

addItem('milk');
addItem('eggs');
console.log(basket);
