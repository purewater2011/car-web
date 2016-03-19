'use strict';
var path = require('path');
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        "./src/entry.js",
        './static/css/example.less'
        //{
        //    appentry: "./src/entry.js",
        //    react: ['react']
        //}

    ],
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: '/out/',
        filename: "bundle.js"
        //filename: "[chunkhash:8].[name].js",
        //chunkFilename: "[name].[chunkhash:8].js"
    },
    externals: {
        'react': 'React'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: ['react'],
        //    minChunks: Infinity
        //}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.less$/, loader: "style!css!less"}
            //{ test: /\.svg$/, loader: "url?limit=8192"}
        ]
    }
};