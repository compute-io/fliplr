'use strict';

// MODULES //

var isMatrixLike = require( 'validate.io-matrix-like' ),
	ctors = require( 'compute-array-constructors' ),
	validate = require( './validate.js' );


// FLIPLR //

/**
* FUNCTION: fliplr( matrix[, options] )
*	Flips a matrix horizontally.
*
* @param {Matrix} matrix - input matrix
* @param {Object} [options] - function options
* @param {Boolean} [options.copy=true] - boolean indicating whether to return a new Matrix instance
* @returns {Matrix} flipped matrix
*/
function fliplr( mat, options ) {
	var opts,
		err,
		d, o, s, sh,
		m;

	if ( !isMatrixLike( mat ) ) {
		throw new TypeError( 'fliplr()::invalid input argument. First argument must be a matrix. Value: `' + mat + '`.' );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		opts.copy = true;
	}
	if ( opts.copy ) {
		// Copy the matrix data to a new typed array:
		d = ctors( mat.dtype )( mat.data );

		// Update the offset:
		o = mat.strides[ 0 ] - 1;

		// Update the strides:
		s = [ mat.strides[0], -mat.strides[1] ];

		// Copy the shape:
		sh = [ mat.shape[0], mat.shape[1] ];

		// Create a new matrix:
		m = new mat.constructor( d, mat.dtype, sh, o, s );

		// Return the new matrix:
		return m;
	} else {
		mat.strides[ 1 ] *= -1;
		mat.offset = mat.strides[ 0 ] - 1;
		return mat;
	}
} // end FUNCTION fliplr()


// EXPORTS //

module.exports = fliplr;
