const path = require('path');
const LibraryName = require('./package.json').name;
const LibraryVersion = require('./package.json').version;

module.exports = {
  title: 'Bea UI',
  sections: [
    {
      name: 'Bea UI - Components',
      sections: [
        {
          name: 'Atoms',
          components: './components/atoms/**/index.jsx'
        },
        {
          name: 'Molecules',
          components: './components/molecules/**/index.jsx'
        },
        {
          name: 'Organisms',
          components: './components/organisms/**/index.jsx'
        }
      ]
    }
  ],
  showSidebar: false,
  styleguideDir: 'styleguide',
  theme: {
    maxWidth: 1280,
    fontFamily: {
      base: '\'Open Sans\', sans-serif;'
    }
  },
  template: 'src/index.html',
  assetsDir: 'src/assets/',
  showCode: true,
  skipComponentsWithoutExample: false,
  webpackConfig: require('./webpack.development.js'),
  getComponentPathLine(componentPath) {
     return path.dirname(componentPath);
  },
  getExampleFilename(componentPath) {
    const component = path.dirname(componentPath);
    return path.join(component, 'example.md');
  }
};
