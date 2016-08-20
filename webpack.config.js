module.exports = {
  entry: './app/App.js',
  output: {
    filename: 'public/bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader:'style!css'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.css']
  },
};
