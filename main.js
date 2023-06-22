//declaration of items in array
let items = [
  {id:1 ,src: "1.jpg", name: "Oppo AA",    price: "100", quantity:0 ,isLiked: "unliked"},
  {id:2 ,src: "2.jpg", name: "Dell Vostr", price: "200", quantity:0 ,isLiked: "unliked"},
  {id:3 ,src: "3.jpg", name: "MinI-Tablt", price: "100", quantity:0 ,isLiked: "unliked"},
  {id:4 ,src: "4.jpg", name: "Sumsung-",   price: "100", quantity:0 ,isLiked: "unliked"},
  {id:1 ,src: "1.jpg", name: "Oppo AA",    price: "100", quantity:0 ,isLiked: "unliked"},
  {id:2 ,src: "2.jpg", name: "Dell Vostr", price: "200", quantity:0 ,isLiked: "unliked"},
  {id:3 ,src: "3.jpg", name: "MinI-Tablt", price: "100", quantity:0 ,isLiked: "unliked"},
  {id:4 ,src: "4.jpg", name: "Sumsung-",   price: "100", quantity:0 ,isLiked: "unliked"},
];

let container = document.getElementById("root");
let total, adore ;  // total price and total number of likes
//---------------------------------------------------------------------- show items
function showData() {
  // global function that will appear all of items (in #root element)
let cartItems = "";
adore = 0;
total = 0;
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    cartItems += `
        <div class="cart cart${item.isLiked}">
            <img src="./img/${item.src}" alt="${item.name}" title="${item.name}" class="img">
            <h5 class="num">${item.name}</h5>
            <h5 class="num">$ ${item.price}</h5>
            <h5 class="quant" onclick="decrBtn(${i})">-</h5>
            <h5 class="num">${item.quantity}</h5>
            <h5 class="quant" onclick="incrBtn(${i})">+</h5>
            <h5 class="subTotal">SubTotal: $ ${item.quantity * item.price}</h5>
            <button class="del" onclick="deleteItem(${i})">
              <i class="fa-sharp fa-solid fa-trash" title="delete this product from cart"></i>
            </button>
            <i class="fa-regular fa-heart" id="${item.isLiked}" onclick="loveReact(${i})"></i>
            
        </div>
        `;
    // concatenation of all the container (title, items, total price and numbers of likes)
    container.innerHTML = `<h1 class ="title">YOUR SHOPPING CART (${items.length})</h1> 
                            ${cartItems}
                            <div class="total">
                                <h4>Total : $ ${getTotal(i)}</h4>
                                ${numOfLikes(i)}

                                ${buynow()} 
                                
                            </div>
                            
                            `;
                            
    }
}

showData(); // calling showData just when this file execute

// buy now function

function buynow(){
  if (items.length > 0){
    return `<button class="buy" onclick="confirm('are you sure to buy this item')">BUY NOW</button>`
  }
}



//---------------------------------------------------- delete items (from the array of items)
function deleteItem(i) {
  items.splice(i,1);
  // if there is no items (items =[]) a new paragraph will display
  if (items.length < 1) {
    container.innerHTML = `<h1 class="empty">Your cart is Empty !!</h1>`;
  }
  showData(); //    after deleting an item always we need to recal showData to re-show the new update
}
//---------------------------------------------------- total price
function getTotal(i) {
  total += +items[i].price * +items[i].quantity;
  return total;
}
//--------------------------------------------------- increment quantity btn
function incrBtn(i) {
  items[i].quantity++;
  showData(); // after any event we recall showData to reshow the new content
}
//-------------------------------------------------- decrement quantity btn
function decrBtn(i) {
  if (items[i].quantity >= 1) {
    items[i].quantity--;
    showData();
  }
}
//--------------------------------------------------- love REACT -------------------------
function loveReact(i) {
  items[i].isLiked === "unliked" ? items[i].isLiked = "liked":  //if isLiked = "liked" so it will be added to the id of this icon id="liked"
  items[i].isLiked = "unliked";                                // id="${item.isLiked}" (show line number 30)
  showData();
}
//------------------------------------------------------------------ number of likes
function numOfLikes(i) {
  if (items[i].isLiked === "liked") {
    adore++; // if true so this item is Liked so we need to add 1 to the number of likes
  }
  if (adore === 0) return ""; // if there is no like, this element will not be displayed 
  return `<h3 class="adore">Like : ${adore}</h3>`;
  
}




/*      As far as I know, we must first modify elements in the object, then modify them in document,
and in order to be able to modify the document we need to recal the function showData after each event to reshow the new uptade...
so what do you think !!
-----------------------------------
Becem Alibi
DOM checkpoint   */
