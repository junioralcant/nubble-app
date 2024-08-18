module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@domain': './src/domain',
          '@assets': './src/assets',
          '@api': './src/api',
          '@types': './src/types',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@services': './src/services',
          '@test': './src/test',
        },
      },
    ],
  ],
};
