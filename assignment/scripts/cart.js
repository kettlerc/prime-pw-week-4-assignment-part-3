console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//initial global variable
let basket = [];
console.log('Your basket is currently empty');
console.log(basket);

//maximum items allowed in the basket
const maxItems = 5;

//function to add items to the cart
function addItem (item) {
  console.log(`${item} added to the basket!`);
  if (basket.push(item) && isFull(false)) {
    return true;
  } else {
    return false;
  }
} //end addItem

//testing addItem function
console.log(addItem('milk'));
console.log(basket);
console.log(addItem('eggs'));
console.log(basket);
console.log(addItem('bread'));
console.log(basket);
console.log(addItem('cheese'));
console.log(basket);
console.log(addItem('steak'));
console.log(basket);
console.log(addItem('wine'));
console.log(basket);

//function to list out all items in the basket
function listItems () {
  console.log('Items currently in your basket:');
  for (let i=0; i < basket.length; i++){
    console.log(basket[i]);
  }
} //end listItems

//calling function for testing
listItems();

//function to check and see if the cart is full
function isFull(){
  console.log('Is your basket full?');
  if (basket.length < maxItems){
    return false;
  } else {
    return true;
  }
} // end isFull

//testing to see if basket is full
console.log(isFull());

//function to remove an item from the Basket
function removeItem(item){
  console.log(`You are removing ${item} from your basket`);
  let index = basket.indexOf(item);
  if (index !== -1) {
    basket.splice(index, 1)
  } else {
    return null;
  }
} //end removeItem

//test to see if item was removed from basket
removeItem('milk');
console.log(basket);
console.log(removeItem('ice cream'));
console.log(basket);

//function to reset the basket to an empty array
function empty(){
  console.log('Emptying your basket');
  basket = [];
  console.log('Your basket is now empty');
} //end empty

//calling the function for testing
empty();
console.log(basket);
