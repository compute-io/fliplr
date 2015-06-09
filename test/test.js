/* global require, describe, it, beforeEach */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ).raw,

	// Module to be tested:
	fliplr = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-fliplr', function tests() {

	var mat;

	beforeEach( function before() {
		var data, i;

		data = new Int8Array( 10 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i;
		}
		mat = matrix( data, [5,2], 'int8' );
	});

	it( 'should export a function', function test() {
		expect( fliplr ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not matrix-like', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				fliplr( value );
			};
		}
	});

	it( 'should throw an error if provided an options argument which is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				fliplr( mat, value );
			};
		}
	});

	it( 'should flip a matrix horizontally', function test() {
		var nRows,
			nCols,
			lr,
			i, j;

		lr = fliplr( mat );

		nRows = lr.shape[ 0 ];
		nCols = lr.shape[ 1 ];

		assert.notEqual( mat, lr );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( lr.get( i, j ), mat.get( i, nCols-j-1 ) );
			}
		}

		// Flip the matrix vertically and then flip...
		mat = lr;
		mat.strides[ 0 ] *= -1;
		mat.offset = mat.length - 1;

		lr = fliplr( mat );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( lr.get( i, j ), mat.get( i, nCols-j-1 ) );
			}
		}
	});

	it( 'should flip and mutate the input matrix', function test() {
		var nRows,
			nCols,
			copy,
			lr,
			i, j;

		copy = matrix( mat.data, mat.shape, mat.dtype );

		lr = fliplr( mat, {
			'copy': false
		});

		nRows = lr.shape[ 0 ];
		nCols = lr.shape[ 1 ];

		assert.strictEqual( mat, lr );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( lr.get( i, j ), copy.get( i, nCols-j-1 ) );
			}
		}

		// Flip the matrix vertically and then flip...
		lr.strides[ 0 ] *= -1;
		lr.offset = lr.length - 1;

		lr = fliplr( lr );

		for ( i = 0; i < nRows; i++ ) {
			for ( j = 0; j < nCols; j++ ) {
				assert.strictEqual( lr.get( i, j ), copy.get( nRows-i-1, j ) );
			}
		}
	});

});
