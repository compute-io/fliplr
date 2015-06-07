'use strict';

var matrix = require( 'dstructs-matrix' ),
	fliplr = require( './../lib' );

var data,
	mat,
	lr, i;

data = new Int8Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i;
}

mat = matrix( data, [5,2], 'int8' );
console.log( mat.toString() );
// returns '0,1;2,3;4,5;6,7;8,9'

lr = fliplr( mat );
console.log( lr.toString() );
// returns '1,0;3,2;5,4;7,6;9,8'


