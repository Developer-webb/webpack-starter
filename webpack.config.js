const HtmlWebpack          = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyplugin           = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    output:{
        clean: true
    },
    module: {
        rules: [
            {   
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                sources: false
                }
            },{
            test: /\.css$/,
            exclude: /style.css$/,
            use: ['style-loader', 'css-loader']  
        },
        {
            test: /style.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader'
        }

        ]
    },
    optimization:{},
    plugins: [
        new HtmlWebpack({
            title: 'Mi WebPack App',
            template: './src/index.html',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new copyplugin({
            patterns: [
            {from: 'src/assets/', to: 'assets/'}
        ]})
    ]
}