module.exports = {
  entry: "./public/js/main.js",

  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader',
        query: { presets: ["react", "es2015"] }
     }
    ]
  }
};
