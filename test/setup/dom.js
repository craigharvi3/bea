const { JSDOM } = require('jsdom');

const jsdom = new JSDOM(`
  <!doctype html>
  <html>
    <head>
      <title>Playspace Tests</title>
    </head>
    <body>
    </body>
  </html>`
);
const { window } = jsdom;

module.exports = {
  setupDOM(global) {
    global.window = window;
    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
    global.navigator = {
      userAgent: 'node.js'
    };
    global.HTMLElement = window.HTMLElement;
  }
};
