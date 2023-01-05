const { getAll, getById } = require('../../repositories/products');
const { recordIdFromUrl, respondWith200OKJSON } = require('../../utils/httpHelper');

module.exports = {
    async getProductsList(req, res) {
        const products = await getAll();

        return respondWith200OKJSON(res, products ?? []);
    },
    async getProductById(req, res) {
        const productId = recordIdFromUrl(req);
        const product = await getById(+productId);

        return respondWith200OKJSON(res, product ?? {});
    }
};