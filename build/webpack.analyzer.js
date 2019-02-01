const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const productionConfig = require('./webpack.production.js');

module.exports = merge(productionConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});