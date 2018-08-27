//this file isn't transpiled, so must use commonJS or ES5

//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesn't understand as we import the css in js file we want to replace that line by a empty function
require.extensions['.css'] = function () {};
