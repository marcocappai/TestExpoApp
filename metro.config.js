const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.resolver.extraNodeModules = {
    stream: require.resolve('./polyfills/stream.js'),
  };
  return config;
})();
