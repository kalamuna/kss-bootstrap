# KSS Bootstrap

[KSS Bootstrap](https://github.com/robloach/kss-bootstrap) is a [Knyle Style Sheet](http://warpspire.com/kss/) template and style guide for [Bootstrap](http://getbootstrap.com).


## Usage

This project includes two components:

1. The *styleguide* directory provides a [KSS](http://warpspire.com/kss/) styleguide for [Bootstrap](http://getbootstrap.com)
2. The *bootstrap* directory provides the [KSS Node](http://kss-node.github.io/kss-node/) template in order to build the styleguide

## Build

    npm install kss -g
    kss-node styleguide out -t bootstrap


## Deploy

    npm test
    npm run-script deploy
