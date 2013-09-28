var HTMLParser = require('../src/atropa-HTMLParser.js');

try {
    Object.keys(HTMLParser).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = HTMLParser[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-HTMLParser.js');
}

Object.keys(HTMLParser.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = HTMLParser.data[prop];
    }
);
