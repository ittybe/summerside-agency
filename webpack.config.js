const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: "index.html",
            // inject: "head",
            // scriptLoading: "defer" // speed up page time loading 
        })
    ],
    mode: "development"
};

module.exports = config;