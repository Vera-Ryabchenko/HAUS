const productsChoice = document.getElementsByClassName('products_choice')

productsChoice.addEventListener('click', event => {
    const id = event.target.dataset.id
    ? event.target.dataset.id
    : event.target.closest('li')?.dataset.id
    console.log(id);
    /*if (id) {
        cartService.add(
            productService.getById(+id)
        )
        renderCart()
    }*/
})
