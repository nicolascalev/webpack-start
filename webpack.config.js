const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].page.js',
    },
};