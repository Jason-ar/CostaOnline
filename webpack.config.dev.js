const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      //Archivos .js y .jsx
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      //Archivos .css
      {
        test: /\.css$/i,
        ///\.(css|s[ac]ss)$/i,
        use: [ 'ExtractTextPlugin.extract',
        //'style-loader', 
        //'css-loader', 
        //'sass-loader', 
        //'postcss-loader'
      ],
        include: __dirname + '/src/styles',
      },
      //Imagenes
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        /*use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outoutPath: 'images',
            },
          },
        ],*/
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[bundle].[contenthash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/Components/'),
      '@Containers': path.resolve(__dirname, 'src/Containers/'),
      "@Data": path.resolve(__dirname, "src/Data/"),
      "@Pages": path.resolve(__dirname, "src/Pages/"),
      "@Templates": path.resolve(__dirname, "src/Templates/"),
      "@Icons": path.resolve(__dirname, "src/assets-v1/icon/"),
      "@Images": path.resolve(__dirname, "src/assets-v1/img/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    }
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }],
      //from: path.resolve(__dirname, 'src', /index.html' }],
    }),
    //Index.html
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    }),
    //Bundble Analyzer
    //npx webpack --profile --json > status.json
    //npx webpack-bundle-analyzer status.json
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new CleanWebpackPlugin(),
    //Bootstrap
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    //MiniCSS
    new MiniCssExtractPlugin({
      filename:"styles/[name].[contenthash].css",
    }),
    //CSSMinimizer
    
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  },
  devServer: {
    "contentBase": './dist',
      "port": 8080,
      "hot": true,
      "open": true,
  },
};