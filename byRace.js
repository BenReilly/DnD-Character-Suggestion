/**
 * logs the list of used combinations sorted by class.
 */

const fs = require( 'fs' );
const {
	races,
	padNames,
	usedCombosByRace: usedCombos
} = require( './common.js' );

let total = 0;

// assign the list of classes for each race to usedCombos
races.forEach( thisRace => {
	let fileName = `${ thisRace }Used.txt`;
	let theseClasses = [];
	let data = fs.readFileSync( fileName, 'utf8' )
	if ( data && data.length > 0 ) {
		data.split( '\r\n' ).forEach( thisClass => {
			usedCombos[ thisRace ].push( thisClass );
			total++;
		});
	}
});

// log to the console the list of combinations.
races.forEach( thisRace => {
	console.log(
		`(${ usedCombos[ thisRace ].length }) ${ padNames( thisRace ) }`,
		usedCombos[ thisRace ]
	);
});
console.log( `total: ${total}` );