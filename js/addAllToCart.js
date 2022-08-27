let count = 0;

document.addEventListener('click', event => {
    if (window.screen.width > 768 && event.target.classList.contains('products_btn')) {
        let count1 = count + 3;
        document.querySelector('.cartInput').innerHTML = '(' + count1 + ')';
    } else if (window.screen.width <= 768 && event.target.classList.contains('products_btn_mobile')) {
        let count2 = count + 3;
        document.querySelector('.cartInputMobile').innerHTML = '(' + count2 + ')';
    }
})
