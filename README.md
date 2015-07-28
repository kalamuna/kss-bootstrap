# KSS Bootstrap [![NPM version](https://img.shields.io/npm/v/kss-bootstrap.svg)](https://www.npmjs.org/package/kss-bootstrap)

[![Build Status](https://travis-ci.org/kalamuna/kss-bootstrap.svg?branch=master)](https://travis-ci.org/kalamuna/kss-bootstrap) [![Dependency Status](https://david-dm.org/kalamuna/kss-bootstrap.svg)](https://david-dm.org/kalamuna/kss-bootstrap) [![devDependency Status](https://david-dm.org/kalamuna/kss-bootstrap/dev-status.svg)](https://david-dm.org/kalamuna/kss-bootstrap#info=devDependencies)

> [KSS Bootstrap](https://github.com/kalamuna/kss-bootstrap) is a [Knyle Style Sheet](http://warpspire.com/kss/) template and style guide for [Bootstrap](http://getbootstrap.com).

## Usage

This project includes two components:

1. The *styleguide* directory provides a [KSS](http://warpspire.com/kss/) styleguide for [Bootstrap](http://getbootstrap.com)
2. The *bootstrap* directory provides the [KSS Node](http://kss-node.github.io/kss-node/) template in order to build the styleguide

## Dependencies

* [kss-node](https://github.com/kss-node/kss-node) `>=2.1.0`

## Build

1. Install [KSS-Node](http://kss-node.github.io/kss-node/) by using the following command:

  ``` bash
  npm install kss -g
  ```

2. Render the site using the following command:

  ``` bash
  kss-node styleguide out -t bootstrap
  ```

  * `styleguide` is the directory to which KSS Styleguide to use
  * `out` represents where the rendered styleguide should be output
  * `bootstrap` is the directory of which KSS template to use

## Development

Use the following command to serve and watch the development environment:

    npm start

### Testing

    npm test

### Deployment

    npm run deploy
