const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        publicPath: 'auto',
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                type: 'javascript/auto'
            },
            // --- СЕКЦИЯ СТИЛЕЙ (ОБНОВЛЕНА) ---
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true } // sourceMap нужен для resolve-url-loader
                    },
                    'postcss-loader',
                    'resolve-url-loader', // <--- Добавляем ПЕРЕД sass-loader
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // ОБЯЗАТЕЛЬНО true
                        },
                    },
                ],
            },
            // --------------------------------
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: 'asset/resource', // Используйте resource для надежности
                generator: {
                    // Эта магическая строка сохранит путь относительно папки img
                    filename: 'img/[name][ext]'
                }
            },
        ],
    },
};