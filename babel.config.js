module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};

module.exports = function (api) {
  api.cache(false)
  return {
    plugins: ['macros'],
  }
}