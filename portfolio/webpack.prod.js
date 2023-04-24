const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// styles
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
            new CssMinimizerPlugin({
                parallel: true,
            }),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 500000,
            minSizeReduction: 1000,
            name: 'shared'
            // cacheGroups: {
            //     type: 'css/mini-extract',
            //     name: 'styles_reused',
            //     chunks: (chunk) => {
            //         return chunk.name === 'styles';
            //     },
            //     enforce: true,
            // },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash].css',
        }),
    ],
});
