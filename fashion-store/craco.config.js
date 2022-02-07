const path = require("path");
const {
  getLoader,
  loaderByName,
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../common"));

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
      module: {
        rules: [
          {
            test: /\.(s*).theme.scss$/,
            use: ["file-loader", "sass-loader"],
          },
        ];
      }
    },
  },
};
