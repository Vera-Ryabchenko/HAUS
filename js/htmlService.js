class HTMLService {
    paintProduct(product) {
        return `
        <div class="product_item" data-id="${product.id}">
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
            <button class="product_item_btn" data-id="${product.id}">SHOP NOW</button>
        </div>
        `
    }

    paintProductMobile(product) {
        return `
        <div class="product_item-mobile" data-id="${product.id}">
            <div class="product_item-mobile_img">
                <img src="${product.image}">
            </div>
            <div class="product_item-mobile_content">
                <h4>${product.title}</h4>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <button type="button" class="product_item_btn_mobile" data-id="${product.id}">SHOP NOW</button>
            </div>
        </div>
        `
    }

    paintProducts(products = []) {
        return products.map(this.paintProduct).join('')
    }

    paintProductsMobile(products = []) {
        return products.map(this.paintProductMobile).join('')
    }

    paintCartItem(item) {
        return `
            <li data-id="${item.id}" data-type="remove">
                (${item.amount})
                ${item.title}
                <strong>$${item.price}</strong>
            </li>
        `
    }

    paintCart({ items, totalPrice }) {
        if (items.length === 0) {
            return `<p>The basket is empty</p>`
        }

        return `
            <ul class="cart-list">
                ${items.map(this.paintCartItem).join('')}
            </ul>
            <hr />
            <div class="info">
                <span>Общая цена: <strong>$${totalPrice.toFixed(2)}</strong></span>
                <button class="clear" data-type="clear">Очистить корзину</button>
            </div>
        `
    }
}

