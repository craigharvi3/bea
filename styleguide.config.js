const path = require('path');
const LibraryName = require('./package.json').name;
const LibraryVersion = require('./package.json').version;

module.exports = {
  title: 'Bea UI',
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
  ],
  showSidebar: true,
  styleguideDir: 'styleguide',
  theme: {
    color: {
      link: '#333',
      linkHover: '#222'
    },
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
  },
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'components/styleguide/StyleGuide')
  }
};
