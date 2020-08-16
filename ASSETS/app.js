const removeButton = document.getElementsByClassName('remove-item-btn');
for (let i = 0; i < removeButton.length; i++) {
    let button = removeButton[i];
    button.addEventListener('click', event => {
        let buttonActive = event.target
        buttonActive.parentElement.parentElement.remove()
        console.log('clicked');
        cartTotalPrice();
    })
    
}

function cartTotalPrice() {
    const itemRow = document.getElementsByClassName('cart-item-row');
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