const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(glsl|vert|frag)$/i,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};
