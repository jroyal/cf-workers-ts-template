const path = require("path");

module.exports = {
  entry: {
    bundle: path.join(__dirname, "./src/index.tsx")
  },

  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist")
  },

  mode: process.env.NODE_ENV || "development",

  watchOptions: {
    ignored: /node_modules|dist|\.js/g
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: []
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      name: false
    }
  },
  devtool: false,
  target: "webworker",
  stats: "verbose"
};
