/*remove items from cart*/
function removeCartRow() {
    const removeButton = document.getElementsByClassName('remove-item-btn')
    for (let i = 0; i < removeButton.length; i++) {
        let button = removeButton[i];
        button.addEventListener('click', removeCartItem)
        
    }
}

function removeCartItem(event) {
    let buttonActive = event.target
    buttonActive.parentElement.parentElement.remove()
    console.log('clicked')
    cartTotalPrice()
}

/*update cart price*/
function cartTotalPrice() {
    const itemRow = document.getElementsByClassName('cart-item-row')
    let total = 0;
    for (let i = 0; i < itemRow.length; i++) {
        let itemRows = itemRow[i];
        const itemPrice = itemRows.getElementsByClassName('cart-item-price')[0]
        const itemQuantity = itemRows.getElementsByClassName('item-quantity-input')[0]
        let price = parseFloat(itemPrice.innerText.replace('$', ''))
        let quantity = itemQuantity.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

const itemQuantityInput = document.getElementsByClassName('item-quantity-input')
for (let i = 0; i < itemQuantityInput.length; i++) {
    const inputQuantity = itemQuantityInput[i]
    inputQuantity.addEventListener('change', inputQuantityChanged)
}

function inputQuantityChanged(event) {
    let inputQuantity = event.target
    if (isNaN(inputQuantity.value) || input.value <= 0) {
        inputQuantity.value = 1
    }
    cartTotalPrice()
}

const addToCartBtn = document.getElementsByClassName('add-to-cart-btn')
for (let i = 0; i < addToCartBtn.length; i++) {
    const cartButton = addToCartBtn [i];
    cartButton.addEventListener('click', addToCart)
}

function addToCart(event) {
    let cartButton = event.target
    const productItem = cartButton.parentElement.parentElement
    let itemTitle = productItem.getElementsByClassName('title')[0].innerText
    let productPrice = productItem.getElementsByClassName('price')[0].innerText
    let imgSrc = productItem.getElementsByClassName('img')[0].src
    addProductToCart(itemTitle, productPrice, imgSrc)
}

function addProductToCart(itemTitle, productPrice, imgSrc){
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-item-row')
    let cartContent = document.getElementsByClassName('cart-content')[0]
    let cartRowContents = `
        <div class="cart-item">
            <img src="${imgSrc}" alt="Ladies' handbag" class="cart-item-img">
            <p class="cart-item-title">${itemTitle}</p>
        </div>
        <div class="cart-item-price">
            <p>${productPrice}</p>
        </div>
        <div class="cart-item-quantity">
            <input type="number" value="1" class="item-quantity-input">
                            
            <button class="remove-item-btn">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
    cartContent.append(cartRow)
    removeCartRow()
    cartTotalPrice()
}