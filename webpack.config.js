var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  context: PATHS.app,
  devtool: 'eval',  //Only for dev environment
  entry: [
  	'babel-polyfill',
    './scripts/app.js'
  ],

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: '/'
  },

  

  module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      include: [
	        path.resolve(PATHS.app, "scripts"),
	      ],
	      loader: "babel-loader",
	      query: {
	      	plugins: ['transform-runtime', 'transform-object-rest-spread'],
	        presets: ['react', 'es2015']
	    	}
	    }
		]
	}
}	
