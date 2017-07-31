const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, './index.js'),
        ]
    },
    output: {
        path: path.resolve(__dirname, "../docs"),

        filename: "[name].[hash:6].js",
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "../site")
                ],
                use: [
                    'react-hot-loader',
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", 'stage-0', 'react']
                    }
                }
            ]
            },
            {
                test: /\.(html)$/,

                use: [{
                    loader: "html-loader",
                }]
            },

        ],
    },

    resolve: {
        alias: {
            App: path.resolve(__dirname, './app')
        },

    },
    devServer: {
        // contentBase:__dirname, 
        compress: true,
        port: 8080,
        historyApiFallback: true,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ],

}