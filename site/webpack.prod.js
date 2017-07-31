const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    externals:{
        'react':'React',
        'react-dom':'ReactDOM'
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
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname,'../docs/')
        ]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ],

}