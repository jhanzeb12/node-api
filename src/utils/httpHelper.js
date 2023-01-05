const url = require('url');

module.exports = {
    urlPathOf(req) {
        const parsedUrl = url.parse(req.url);

        return parsedUrl.pathname;
    },

    recordIdFromUrl(req) {
        const parsedUrl = url.parse(req.url);
        const recordIds = parsedUrl.pathname.match(/[0-9]+/ig);

        return recordIds?.[0];
    },

    respondWith200OKText(res, textData) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(textData);
    },

    respondWith200OKJSON(res, jsonBody) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonBody));
    },

    respondWith404NotFound(res, message = 'Not Found.') {
        res.writeHead(404);
        res.end(message);
    },

    respondWith405MethodNotAllowed(res) {
        res.writeHead(405);
        res.end();
    }

    HTTP_GET: 'GET',
    HTTP_POST: 'POST',
    HTTP_DELETE: 'DELETE',
    HTTP_PUT: 'PUT',
    HTTP_PATCH: 'PATCH',
    HTTP_OPTIONS: 'OPTIONS',
    HTTP_HEAD: 'HEAD',
};