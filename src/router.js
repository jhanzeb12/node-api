const { urlPathOf, respondWith404NotFound } = require('./utils/httpHelper');
const productRouter = require('./routes/products');

module.exports = async (req, res) => {
    const path = urlPathOf(req);

    if (path.match(/\/products[\\0-9]*/ig)) {
        return productRouter.handleRequest(req, res);
    }

    return respondWith404NotFound('No matching route found.');
}