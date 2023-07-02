const { getDefaultConfig } = require('@expo/metro-config');



module.exports = (async () => {
    const {resolver: {sourceExts, assetExts}} = await getDefaultConfig(__dirname);
    const metroAsset =  assetExts.filter(ext => ext !== 'svg')
    metroAsset.push('cjs')
    return {
      transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        assetExts: metroAsset,
        sourceExts: [...sourceExts, 'svg'],
      },
    };
  })();