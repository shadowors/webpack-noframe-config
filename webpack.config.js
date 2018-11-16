const path = require('path');
const fs = require('fs');
const Ex = require('extract-text-webpack-plugin');
const htmlPlug = require('html-webpack-plugin');
const cleanPlug = require('clean-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename:'js/[name].js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:Ex.extract({fallback:'style-loader',use:[
                        {
                            loader:'css-loader',options:{
                                minimize:true,
                            }
                        },
                        'postcss-loader',

                    ],
                    publicPath: '../' //css生成之后的图片路径
                }),
                exclude:'/node_modules/'
            },
            {test: /\.png|\.jpg$/, loader: "file-loader?name="+'images/[name].[ext]'},//
            {test: /\.pug$/, use: ['html-loader', 'pug-html-loader']}//pug模板引擎解析
        ],
    },

    plugins: [
        new CleanWebpackPlugin('dist'),
        new Ex('css/index.css'),
        new htmlPlug({
            template: './src/index.pug',
            filename:'./index.html',
            chunks: ['vendor','index'],
            minimize:false,
        }),
    ]
}
