const { injectBabelPlugin } = require('react-app-rewired') ;

// eslint-disable-next-line no-unused-vars
module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  return config;
};
