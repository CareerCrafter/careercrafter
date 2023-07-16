const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: "./client/index.js",
    test: "./client/test.js",
  },
  devtool: 'inline-source-map',
  output: {
    filename: "[name].bundle.js",
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },  
  module: {
    rules: [
      {
        test: /\.jsx?/, //either .js or .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              [
                "@babel/preset-react",
                { targets: "defaults", runtime: "automatic" },
              ],
            ],
          },
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./client/index.html",
      filename: "index.html",
      }),
  ],
  devServer: {
    open: true,
    proxy: {
      "/api/**": "http://localhost:3000"
    },
    static: {
      directory: path.join(__dirname, "./dist"),
      publicPath: '/',
      serveIndex: true,
      watch: true,
    },
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/dist/', // Specify the public path for serving the bundle.js file
    },
  },
};
