const productService = new ProductService(data)
const cartService = new CartService()
const htmlService = new HTMLService()

const productsContainer = document.getElementById('products_choice')
const productsContainerMobile = document.getElementById('products_choice-mobile')
const cartContainer = document.getElementById('cart')


productsContainer.addEventListener('click', event => {
    if (event.target.className === 'product_item_btn') {
        cartService.add(
            productService.getById(+event.target.dataset.id)
        )
        renderCart()
}})

productsContainerMobile.addEventListener('click', event => {
    if (event.target.className === 'product_item_btn_mobile') {
        cartService.add(
            productService.getById(+event.target.dataset.id)
        )
        renderCart()
}})

cartContainer.addEventListener('click', event => {
    const type = event.target?.dataset.type
    const id = event.target?.dataset.id

    switch (type) {
        case 'clear':
            cartService.clear()
            renderCart()
            break
        case 'remove':
            cartService.remove(id)
            renderCart()
            break
    }
})

function renderProducts() {
    productsContainer.innerHTML = htmlService.paintProducts(
       productService.products 
    )
}

renderProducts()

function renderProductsMobile() {
    productsContainerMobile.innerHTML = htmlService.paintProductsMobile(
    productService.products 
    )
}

renderProductsMobile()

function renderCart() {
    cartContainer.innerHTML = htmlService.paintCart(
        cartService.getInfo()
    )
}

renderCart()