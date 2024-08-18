const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "fs": false,
    "child_process": false,
    "stream": require.resolve("stream-browserify"),
    "util": require.resolve("util/")
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );
  return config;
}
