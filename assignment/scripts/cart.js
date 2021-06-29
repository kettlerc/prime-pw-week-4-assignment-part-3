console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//initial global variable
const basket = [];
console.log(`Items currently in basket: ${basket}`);

//function to add items to the cart
function addItem (item) {
  console.log(`${item} added to the basket!`);
  if (basket.push(item)) {
    return true;
  } else {
    return false;
  }
} //end addItem

//testing addItem function
console.log(addItem('milk'));
console.log(addItem('eggs'));
console.log(basket);

//function to list out all items in the basket
function listItems () {
  for (let i=0; i < basket.length; i++){
    console.log(basket[i]);
  }
} //end listItems

//calling function for testing
listItems();
