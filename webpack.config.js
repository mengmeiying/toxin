//basic vars
const path = require('path');
const webpack = require('webpack');

//additional plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var isProduction = (process.env.NODE_ENV ==='production');

const PATHS = {
    source: path.join(__dirname, 'src')
};

//module settings
module.exports = {
    mode: 'development',

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: [
            './js/app.js',
            './scss/style.scss'
        ],
    },

    output: {
        filename: 'js/[name]1.js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: './'
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
                    publicPath: '../',
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
                            loader: 'resolve-url-loader',
                            options: { sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true,
                                    sourceMapContents: false}
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
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
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
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-url-loader',
            //     options: { sourceMap: true},
            // },

            //pug
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                }
            }
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
            // {
            //     ignore: [
            //         {glob:'svg/*'},
            //     ]
            // }
        ),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/headersfooters.pug',
            filename: path.resolve(__dirname, 'docs/headersfooters.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/colorsntype.pug',
            filename: path.resolve(__dirname, 'docs/colorsntype.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/formelements.pug',
            filename: path.resolve(__dirname, 'docs/formelements.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/index.pug',
            filename: path.resolve(__dirname, 'docs/index.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/landingpage.pug',
            filename: path.resolve(__dirname, 'docs/landingpage.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/searchroom.pug',
            filename: path.resolve(__dirname, 'docs/searchroom.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/roomdetails.pug',
            filename: path.resolve(__dirname, 'docs/roomdetails.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/registration.pug',
            filename: path.resolve(__dirname, 'docs/registration.html'),
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pug/cards.pug',
            filename: path.resolve(__dirname, 'docs/cards.html'),
        }),
    ]
    
    
};

//prod only

if(isProduction) {
    // module.exports.plugins.push(
    //     new UglifyJSPlugin({
    //         sourceMap: true
    //     }),
    // );
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