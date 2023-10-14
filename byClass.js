/**
 * logs the list of used combinations sorted by class.
 */

const fs = require( 'fs' );
const {
	races,
	classes,
	usedCombosByClass: usedCombos,
	padNames
} = require( './common.js' );

let total = 0;

// assign the list of classes for each race to usedCombos
races.forEach( thisRace => {
	let fileName = `${ thisRace }Used.txt`;
	let data = fs.readFileSync( fileName, 'utf8' );
	if ( data && data.length > 0 ) {
		data.split( '\r\n' ).forEach(
			thisClass => {
				usedCombos[ thisClass ].push( thisRace );
				total++;
			}
		);
	}
});

// log to the console the list of combinations.
classes.forEach( thisClass => {
	console.log(
		`(${ usedCombos[ thisClass ].length }) ${ padNames( thisClass ) }`,
		usedCombos[ thisClass ]
	);
});
console.log( `total: ${ total }` );
