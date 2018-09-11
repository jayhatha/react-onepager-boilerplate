const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const client = {
  entry: {
    client: "./src/client/index.js"
  },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html"
    })
  ]
};
const server = {
  entry: {
    server: "./src/server/index.js"
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  externals: [nodeExternals()]
};
module.exports = [client, server];
