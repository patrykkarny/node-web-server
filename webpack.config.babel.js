import path from 'path';
import nodeExternals from 'webpack-node-externals';

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: ['babel-polyfill', path.resolve(__dirname, 'src', 'server.js')],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: [
            'env',
            'stage-2',
          ],
        },
      },
    ],
  },

  devtool: 'cheap-module-source-map',

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

export default serverConfig;
