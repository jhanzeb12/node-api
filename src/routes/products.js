const { getProductById, getProductsList } = require('../controllers/products');
const {
    urlPathOf,
    respondWith405MethodNotAllowed,
    HTTP_GET,
    respondWith404NotFound
} = require('../utils/httpHelper');

const handleRequest = async (req, res) => {
    const path = urlPathOf(req);
    let methodNotAllowed = false;

    if (path.match(/\/products\/[0-9]+$/ig)) {
        if (req.method === HTTP_GET) {
            return getProductById(req, res);
        }

        methodNotAllowed = true;
    }

    if (path.match(/\/products[\/]*$/ig)) {
        if (req.method === HTTP_GET) {
            return getProductsList(req, res);
        }

        methodNotAllowed = true;
    }

    if (!methodNotAllowed) {
        return respondWith405MethodNotAllowed(res);
    }

    return respondWith404NotFound('No Matching route found');
};

module.exports = {
    handleRequest
};