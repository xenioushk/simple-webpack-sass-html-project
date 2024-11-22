const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    scripts: "./src/index.js", // Handles both scripts and styles
  },
  output: {
    filename: "[name].js", // Dynamic naming: 'scripts.js' and 'styles.js'
    path: path.resolve(__dirname, "assets"),
    assetModuleFilename: "images/[name][ext]", // Output images to 'images/' folder
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Matches Sass/SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate file
          "css-loader", // Translates CSS into CommonJS
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src/styles")],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css", // Output CSS file as 'styles.css'
    }),
  ],
  devtool: false, // For easier debugging
}
