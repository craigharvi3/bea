# Bea
### React Web Components

## Getting started

Clone the repo and install Node dependencies
```
git clone https://github.com/craigharvi3/bea-ui.git
yarn install
```

## Development

### Components

#### Getting started

* Run `yarn styleguide`, this command will start a server at http://0.0.0.0:6060 and watch for changes in the code.
* React components live in the `components` folder. Each component should be built in its own folder using [Atomic design](http://atomicdesign.bradfrost.com/chapter-2/).


### Testing components

We are using [Mocha](https://mochajs.org), [Enzyme](http://airbnb.io/enzyme/) and [Sinon](http://sinonjs.org/) to test components.

* Create `component-name.test.js` in the component folder.
* Components generally have a **should render** and **should not render** describe block as a minimum.
* Run `yarn test`

## Production

* Run `yarn add bea-ui` to include the library from NPM.
* Import the component in your page: `import { Component } from 'bea-ui';`

## Publish styleguide

To see changes in Bea UI on `<insert styleguide link here>`, styleguide needs to be published.

* Run `yarn styleguide:publish` from `master`

*How is it published:*

`gh-pages` is a branch used by GitHub to create public version of the styleguide.

`yarn styleguide:publish` is running `git subtree push --prefix styleguide origin gh-pages`,
to copy the contents of `/styleguide` directory into `gh-pages` branch.

## Release to NPM

1. Bump version in `package.json` as part of the pull request.

2. Update `/dist` folder with the latest version:

```
yarn build
```
3. Publish the styleguide (`yarn styleguide:publish`) from `master`.

4. Log in to NPM:

```
npm login
```
5. Once the pull request is merged, check out the `master` branch, and publish from master:

```
npm publish
```

6. Create tag corresponding to the package version.

```
git tag -a v1.4.2 -m "Release 1.4.2"
git push --tags
```

7. Create the release on GitHub. Describe release on GitHub using release template from any.
