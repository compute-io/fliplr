fliplr
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Flips a [matrix](https://github.com/dstructs/matrix) left-to-right.


## Installation

``` bash
$ npm install compute-fliplr
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var fliplr = require( 'compute-fliplr' );
```

#### fliplr( x[, opts] )

Flips a [matrix](https://github.com/dstructs/matrix) left-to-right.

``` javascript
var matrix = require( 'dstructs-matrix' );

var mat = matrix( [2,3] );
mat.set( 0, 2, 5 ).set( 1, 2, 6 );
/*
	[ 0 0 5
	  0 0 6 ]
*/

var lr = fliplr( mat );
/*
	[ 5 0 0
	  6 0 0 ]
*/
```

By default, the function returns a new [matrix](https://github.com/dstructs/matrix) instance. To mutate the input [matrix](https://github.com/dstructs/matrix), set the `copy` option to `false`.

``` javascript
var lr = fliplr( mat, {
	'copy': false
});
/*
	[ 5 0 0
	  6 0 0 ]
*/

var bool = ( mat === lr );
// returns true
```



## Examples

``` javascript
var matrix = require( 'dstructs-matrix' ),
	fliplr = require( 'compute-fliplr' );

var data,
	mat,
	t, i;

data = new Int8Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

mat = matrix( data, [5,2], 'int8' );
/*
	[ 0 1
	  2 3
	  4 5
	  6 7
	  8 9 ]
*/

lr = fliplr( mat );
/*
	[ 1 0
	  3 2
	  5 4
	  7 6
	  9 8 ]
*/
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-fliplr.svg
[npm-url]: https://npmjs.org/package/compute-fliplr

[travis-image]: http://img.shields.io/travis/compute-io/fliplr/master.svg
[travis-url]: https://travis-ci.org/compute-io/fliplr

[coveralls-image]: https://img.shields.io/coveralls/compute-io/fliplr/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/fliplr?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/fliplr.svg
[dependencies-url]: https://david-dm.org/compute-io/fliplr

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/fliplr.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/fliplr

[github-issues-image]: http://img.shields.io/github/issues/compute-io/fliplr.svg
[github-issues-url]: https://github.com/compute-io/fliplr/issues
