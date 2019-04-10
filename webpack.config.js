const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
   
module.exports = {
    entry: {
        common: './src/index.js'    // [name]: '경로'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options : {
                        presets : [ '@babel/preset-env', '@babel/preset-react' ],
                        plugins : [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize : true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'   // 불러올 html 경로
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: './css/[id].css'
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}