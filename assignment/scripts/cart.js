console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
console.log(basket);

function addItem (item) {
  console.log('in addItem:');
  if (basket.push(item)) {
    return true;
  } else {
    return false;
  }
} //end addItem

addItem('milk');
console.log(addItem());
console.log(basket);
