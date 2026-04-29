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
        port: 3000,
        open: true,
        hot: true,
    },
    // Точка входа — твой главный JS файл
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'js/[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
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
            // HTML
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            // SCSS / CSS
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
            // Стили
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            // Шрифты
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            // Картинки
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    // [path] сохранит структуру относительно папки src
                    filename: 'img/[path][name][ext]',
                    // Чтобы в пути не дублировалось 'src/img/', добавим:
                    dataUrlCondition: {
                        maxSize: 8 * 1024 // необязательно, но полезно для мелких иконок
                    }
                }
            },
        ],
    },
};