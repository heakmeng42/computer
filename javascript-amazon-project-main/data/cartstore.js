export let cartStore = JSON.parse(localStorage.getItem('cartstore'));

if(!cartStore){
  cartStore = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1
  },{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
};

export function addToCart(productId){
  let matchingProduct;
    cartStore.forEach((cartItem) =>{
      if(productId === cartItem.productId){
        matchingProduct = cartItem;
      }
    }); 
    if(matchingProduct){
      matchingProduct.quantity += 1;
    }else{
      cartStore.push({
        productId: productId,
          quantity: 1,
      });
    }
    saveToLocalStorage();
}

function saveToLocalStorage(){
  localStorage.setItem('cartstore',JSON.stringify(cartStore));
}

export function removeFromCart(productId){
  const newCartStore = [];
  cartStore.forEach((cartItem) =>{
    if(cartItem.productId !== productId){
      newCartStore.push(cartItem);
    }
  }); 
  cartStore = newCartStore;
  saveToLocalStorage();
}