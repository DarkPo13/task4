var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          "@": path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [{
                test: /\.vue?$/,
                exclude: /(node_modules)/,
                use: 'vue-loader'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ],
        
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js'
    },
    
}