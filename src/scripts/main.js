;(function() {
	"use strict";

	var array = [1, 2, 3, 4];

	function map( fn, array ) { // get any function and any array as argument
		return fn( array );
	}

	function square( array ) { // raise to the square each array element
		var arrayResult = []; // array container for result
		for( var i = 0; i < array.length; i++ ) {
			arrayResult[i] = array[i] * array[i];
		}
		return arrayResult;
	}

	console.log( map(square, array) );
	console.log( array );

})();