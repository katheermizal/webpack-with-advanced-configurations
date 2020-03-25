const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: [
            'src',
            'node_modules'
        ]
    },
    entry: {
        bundle:  [
            './src/js/main.js',
            './src/js/custom.js'
        ],
        style: [
            './src/scss/style.scss',
            './src/scss/custom.scss'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: node_modules_dir,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['lodash'],
                        presets: [
                            '@wordpress/default',
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.(css|scss)/,
                exclude: node_modules_dir,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader?-url',
                    {
                        loader: MediaQueryPlugin.loader
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                    }
                  },
                ],
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            _: "underscore",
            "window.Isotope": "Isotope"
        }),
        /**************************
         * Copy fonts & images files
           torelevant path
         * We just copy font files 
           to relavant folders
         **************************/
        new CopyWebpackPlugin([
            // SLICK
            {from: 'node_modules/slick-carousel/slick/fonts', to: 'fonts/', toType: 'dir'},
            {from: 'node_modules/slick-carousel/slick/ajax-loader.gif', to: 'images/'},

            // FONT AWESOME
            {from: 'node_modules/font-awesome/fonts', to: 'fonts/', toType: 'dir'},
            {from: './src/fonts/', to: 'fonts/', toType: 'dir'},

            // IMAGES
            {from: './src/images/', to: 'images/', toType: 'dir'},
        ]),
        /**************************
         * Used to Extract css file 
           into relevant path
         **************************/
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        /**************************
         * Extract styles using
           Media Queries
         **************************/
        new MediaQueryPlugin({ 
            include: [
                'style'
            ],
            queries: {
                '(min-width: 768px) and (max-width: 991.98px)': 'tablet',
                '(min-width: 768px)': 'tablet',
                '(min-width: 992px)': 'desktop',
                '(min-width: 992px) and (max-width: 1199.98px)': 'desktop',
                '(min-width: 1200px)': 'desktop'
            }
        }),
        new LiveReloadPlugin({
            protocol: 'http',
            port: 35728,
            hostname: 'localhost',
            appendScriptTag: false,
            delay: 300
        }) 
    ],
    stats: {
        children: false
    }
};