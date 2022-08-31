class CartService {
    constructor() {
        this.cart = {}//ключ
    }

    //добавление товара в корзину
    add(product) {
        const key = product.id
        
        if (this.cart[key]) { //проверяем есть ли уже такой товар в корзине
            this.cart[key].amount++//усли да, то увеличиваем его количество на 1
            return//останавливаем 
        }
        this.cart[key] = { //если товара нет, добавляем его карточку в корзину
            image: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
            amount: 1
        }
    }

    //удаление товара из корзины
    remove(productId) {
        const amount = this.cart[productId].amount
        if (amount === 1) {
            delete this.cart[productId]
        } else {
            this.cart[productId].amount--
        }        
    }

    //очистка корзины
    clear() {
        this.cart = {}
    }

    //информация из карточкм
    getInfo() {
        const items = Object.keys(this.cart).map(id => {
            return { //приводим карточку к массиву
                id: id,
                title: this.cart[id].title,
                image: this.cart[id].image,
                amount: this.cart[id].amount,
                price: this.cart[id].price
            }
        })

        const totalPrice = items.reduce((sum, item) => {//считаем общую сумму в корзине
            return sum += item.amount * item.price
        }, 0)

        return {
            items: items,//возвращаем наполнение корзины
            totalPrice: totalPrice//и общую стоимость
        }
    }
}
