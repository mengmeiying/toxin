//basic vars
const path = require('path');
const webpack = require('webpack');

//additional plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = (process.env.NODE_ENV ==='production');

//module settings
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: [
            './js/app.js',
            './scss/style.scss'
        ],
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },

    //devserver config
    devServer: {
        contentBase: './app'
    },

    devtool:(isProduction) ? '' : 'inline-source-map',

    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true}
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true}
                        },
                    ],
                    fallback: 'style-loader',
                })
            },

            //image 
            {
                test: /\.(png|gif|jpe?g)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    'img-loader',
                ]
            },

            //fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', 
                        }
                    }
                ]
            },

            //svg
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },
        ],
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        }),
        new ExtractTextPlugin(
            './css/[name].css'
        ),
        new CleanWebpackPlugin(), 

        new CopyWebpackPlugin(
            [
                { from: './img', to: 'img'}
            ],
            {
                ignore: [
                    {glob:'svg/*'},
                ]
            }
        )
    ]
};

//prod only

if(isProduction) {
    module.exports.plugins.push(
        new UglifyJSPlugin({
            sourceMap: true
        }),
    );
    module.exports.plugins.push(
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/
        }),
    );
    module.exports.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    );
}