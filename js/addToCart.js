const cartInput = document.querySelector('.cartInput')
const cartInputMobile = document.querySelector('.cartInputMobile')
let number = 1;

document.addEventListener('click', event => {
    if (window.screen.width > 768 && event.target.classList.contains('product_item_btn')) {
        let number1 = number++;
        cartInput.innerHTML = '(' + number1 + ')';
        //alert('Товар успешно добавлен')
    } else if (window.screen.width <= 768 && event.target.classList.contains('product_item_btn_mobile')) {
        let number2 = number++;
        cartInputMobile.innerHTML = '(' + number2 + ')';
        //alert('Товар успешно добавлен')
    } else if (window.screen.width > 768 && event.target.classList.contains('clear')) {
        number = 1
        cartInput.innerHTML = '';
    } else if (window.screen.width <= 768 && event.target.classList.contains('clear')) {
        number = 1
        cartInputMobile.innerHTML = '';
}
})