const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const path = require("path"); 
module.exports = { 
 mode: "development", // версия для разработки
  entry: "./src/index.js", // указываем путь до index.js 
  output: { 
    path: path.resolve(__dirname, "build"), // указываем название создаваемой папки
    filename: "build.js", // указываем название создаваемого файла
   },
    devServer: {
    open: true,
    compress: true,
    port: 4000,
   },
   plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new CleanWebpackPlugin(),
   ],
   module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};