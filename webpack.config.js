'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'

            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                      fallback: 'style-loader',
                      use: 'css-loader'
                    })
            }
        ]
    },
    plugins: [ 
        new ExtractTextPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
          }),
      ]
}