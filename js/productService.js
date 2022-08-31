class ProductService {
    constructor(products = []) {
        this.products = products
    }

    get(index) {
        return this.products[index]
    }

    getById(id)  {
        return this.products.find(product => {
            return product.id === id
        })
    }
}
