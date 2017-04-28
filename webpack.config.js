var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		'js/index': './src/js/index.js',
        'js/channel': './src/js/channel.js',
        'js/live': './src/js/live.js',
        'js/ranking': './src/js/ranking.js',
        'js/user': './src/js/user.js',
        'js/videoPlay': './src/js/videoPlay.js',
        'js/search': './src/js/search.js',
        'main': './src/style/main.scss',
        'channel': './src/style/channel.scss',
        'live': './src/style/live.scss',
        'ranking': './src/style/ranking.scss',
        'user': './src/style/user.scss',
        'videoPlay': './src/style/videoPlay.scss',
        'search': './src/style/search.scss',
		'vendor': [
          'react',
          'react-dom'
        ]
	},
	output: {
		path: './dist/',
		filename: '[name].js',
        publicPath: "/dist/"
	},
	module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        },
        {
            test: /.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass',{ publicPath: '../' })
        },
        {
    　　　　　　test: /\.(png|jpg|webp|gif)$/,
    　　　　　　loader: 'url-loader?limit=8192&name=image/[name].[ext]'
    　　　　}]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"js/vendor/vendor.bundle.js"),
        new ExtractTextPlugin('style/[name].css')
    ],
    devServer: {
      
        hot: true,
        inline: true
        
    }
};