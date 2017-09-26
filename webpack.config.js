const path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);


module.exports = {
  context: __dirname,
  entry: "./frontend/awaaz.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
     WaveSurfer: 'wavesurfer.js'
   })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      'wavesurfer': path.resolve(__dirname, './node_modules/wavesurfer.js/dist/wavesurfer.js')
    },
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      {
        test: require.resolve("wavesurfer.js"),
        loader: "expose-loader?WaveSurfer"
      },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.node$/,
      loader: "node-loader"
    }
    ]
  }
};
