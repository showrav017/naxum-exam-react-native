module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "babel-plugin-styled-components",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~components": "./src/components",
            "~animations": "./src/assets/animations",
            "~assets": "./src/assets",
            "~store": "./src/store",
            "~src": "./src",
          },
        },
      ],
    ],
  };
};
