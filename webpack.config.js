const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, './site/index.js'),
        ]
    },
    output: {
        path: path.resolve(__dirname, "./docs"),

        filename: "[name].[hash:6].js",
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "./site")
                ],
                use: [
                    'react-hot-loader',
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", 'stage-0', 'react'],
                              "plugins": [
                                    ["import", { libraryName: "antd", style: true }]
                                ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(html)$/,

                use: [{
                    loader: "html-loader",
                }]
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: [{
                        loader: 'url-loader',
                        query: {
                            name: 'assets/[name]-[hash:5].[ext]',
                            limit: 60000
                        }
                    }

                ]

            }

        ],
    },

    resolve: {
        alias: {
            App: path.resolve(__dirname, './site/app')
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
            template: path.resolve(__dirname, './site/index.html'),
            filename: 'index.html'
        })
    ],

}