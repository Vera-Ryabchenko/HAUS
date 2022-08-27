/*const addProducts = document.querySelectorAll('product_item_btn')
const addProductsMobile = document.querySelectorAll('product_item_btn_mobile')
const addAllProducts = document.getElementById('<button type="button" id="products_btn">SHOP ALL FLAVORS</button>')*/
let number = 1;

document.addEventListener('click', event => {
    if (window.screen.width > 768 && event.target.classList.contains('product_item_btn')) {
        let number1 = number++;
        document.querySelector('.cartInput').innerHTML = '(' + number1 + ')';
    } else if (window.screen.width <= 768 && event.target.classList.contains('product_item_btn_mobile')) {
        let number2 = number++;
        document.querySelector('.cartInputMobile').innerHTML = '(' + number2 + ')';
    }
})
