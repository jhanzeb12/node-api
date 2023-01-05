const products = require('../../db/data')

module.exports = {
    async getAll() { return products; },
    async getById(productId) {
        const product = products.find(prod => prod.id === +productId);

        return product;
    }
}