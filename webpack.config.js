const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                // Rule for CSS files
                test: /\.css$/,
                use: [
                  "style-loader", // Injects CSS into the DOM
                  "css-loader", // Turns CSS into commonjs
                ],
              },
        ],
    },
    
    mode: 'development',
  };