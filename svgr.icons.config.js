module.exports = {
  replaceAttrValues: { '#FFFFFF': 'currentColor' },
  jsxRuntime: 'classic',
  typescript: true,
  svgoConfig: {
    plugins: [
      {
        name: 'removeXMLNS'
      },
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      }
    ]
  }
};
