const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const marked = require("marked");
const renderer = new marked.Renderer();

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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "../site")
        ],
        use: [
        //   'react-hot-loader',
          {
            loader: "babel-loader",
            options: {
              presets: ["env", 'stage-0', 'react']
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

      },
      {
        test: /\.md$/,
        use: [{
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer
            }
          }
        ]

      }

    ],
  },

  resolve: {
    alias: {
      App: path.resolve(__dirname, './app')
    },

  },
  plugins: [
    new CleanWebpackPlugin([
      path.resolve(__dirname, '../docs/')
    ],{
       root:process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: '404.html'
    })
  ],

}
