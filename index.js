const fs = require( 'fs' );
const {
	classes,
	races,
	usedCombosByRace: usedCombos
} = require( './common.js' );

// Save the race/class combinations in a local object
races.forEach( thisRace => {
	let fileName = `${ thisRace }Used.txt`;
	let data = fs.readFileSync( fileName, 'utf8' );
	data.split( '\r\n' ).forEach( thisClass => {
		usedCombos[ thisRace ].push( thisClass );
	});
});

// assign the currently available races and classes to global variables
let availRaces = fs.readFileSync(
	'availableRaces.txt',
	'utf8'
).split( '\r\n' );
let availClasses = fs.readFileSync(
	'availableClasses.txt',
	'utf8'
	).split( '\r\n' );

// randomly choose from the available races
const chooseRace = () => {
	return availRaces[ Math.floor( Math.random() * availRaces.length )];
}

// randomly choose from the available classes
const chooseClass = () => {
	return availClasses[ Math.floor( Math.random() * availClasses.length )];
};

/**
 * Randomly selects a race and a class combination that does not appear in
 * usedCombos and logs the choice in the console.
 * @returns { string, string }
 */
const pickNewCombo = () => {
	const newRace = chooseRace();
	const newClass = chooseClass();
	if ( usedCombos[ newRace ].indexOf( newClass ) === -1 ) {
		console.log( `########## create a ${ newRace } ${ newClass } ##########` );
		return { newRace, newClass };
	} else {
		console.log(
			`${newRace } ${ newClass } has already been made, trying again.`
		);
		return pickNewCombo();
	}
}

/**
 * Adds the newly selected class to the file of used classes by race.
 * Removes the newly selected class and race from the availableClass and
 * availableRaces files, respectively.
 * If availRaces or availClass are empty strings after the new ones are
 * selected, the corresponding availability file will be reset, no updated.
 * @param { string } newRace the recently chosen race
 * @param { string } newClass the recently chosen class
 * 
 * TODO: breakout functionality to one function, one concern.
 */
const cleanUp = ( newRace, newClass ) => {
	// add the class to the race's file
	fs.appendFile(
		`${ newRace }Used.txt`,
		`\r\n${ newClass }`,
		( err, data ) => { if ( err ) console.log( err ); }
	);

	// remove the race from the available races, or reset list if needed.
	availRaces.splice( availRaces.indexOf( newRace ), 1 );
	if ( availRaces.length === 0 ) {
		fs.writeFile(
			'availableRaces.txt',
			races.join( '\r\n' ),
			( err, data ) => { if ( err ) console.log( err ); }
		);
	} else {
		fs.writeFile(
			'availableRaces.txt',
			availRaces.join( '\r\n' ),
			( err, data ) => { if ( err ) console.log( err ); }
		);
	}
	
	// remove the class from the available classes, or reset list if needed.
	availClasses.splice( availClasses.indexOf( newClass ), 1 );
	if ( availClasses.length === 0 ) {
		fs.writeFile(
			'availableClasses.txt',
			classes.join( '\r\n' ),
			( err, data ) => {
				if ( err ) console.log( err ); }
			);
	} else {
		fs.writeFile(
			'availableClasses.txt',
			availClasses.join( '\r\n' ),
			( err, data ) => { if ( err ) console.log( err ); }
		);
	}
}

const newCharacter = pickNewCombo();
console.log(
	`cleanup using ${ newCharacter.newRace } ${ newCharacter.newClass }`
);
// cleanUp( newCharacter.newRace, newCharacter.newClass );