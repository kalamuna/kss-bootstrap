# KSS Bootstrap [![NPM version](https://img.shields.io/npm/v/kss-bootstrap.svg)](https://www.npmjs.org/package/kss-bootstrap)

[![Greenkeeper badge](https://badges.greenkeeper.io/kalamuna/kss-bootstrap.svg)](https://greenkeeper.io/)

> [KSS Bootstrap](https://github.com/kalamuna/kss-bootstrap) is a [Knyle Style Sheet](http://warpspire.com/kss/) style guide for [Bootstrap](http://getbootstrap.com).

[![Build Status](https://travis-ci.org/kalamuna/kss-bootstrap.svg?branch=master)](https://travis-ci.org/kalamuna/kss-bootstrap) [![Dependency Status](https://david-dm.org/kalamuna/kss-bootstrap.svg)](https://david-dm.org/kalamuna/kss-bootstrap) [![devDependency Status](https://david-dm.org/kalamuna/kss-bootstrap/dev-status.svg)](https://david-dm.org/kalamuna/kss-bootstrap#info=devDependencies)

## Dependencies

* [kss-node](https://github.com/kss-node/kss-node) `>=2.1.0 <3`

## Usage

1. Install [KSS-Node](http://kss-node.github.io/kss-node/) by using the following command:

  ``` bash
  npm install kss@3 -g
  ```

2. Render the site using the following command:

  ``` bash
  kss-node node_modules/kss-bootstrap/styleguide out -t node_modules/kss-bootstrap/bootstrap
  ```

  * `node_modules/kss-bootstrap/styleguide` is the directory to which KSS Styleguide to use
  * `out` represents where the rendered styleguide should be output

## Development

Use the following command to serve and watch the development environment:

    npm start

### Testing

    npm test

### Deployment

    npm run deploy
