console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//initial global variable
let basket = [];
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
  console.log('The items currently in your basket:');
  for (let i=0; i < basket.length; i++){
    console.log(basket[i]);
  }
} //end listItems

//calling function for testing
listItems();

//function to reset the basket to an empty array
function empty(){
  basket = [];
  console.log('Your basket is now empty');
} //end empty function

//calling the function for testing
empty();
console.log(basket);
