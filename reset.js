const fs = require('fs');
const { races, classes } = require('./common.js')

fs.writeFile(
  'availableRaces.txt',
  races.join( '\r\n' ),
  ( err, data ) => { if ( err ) console.log( err )}
);

fs.writeFile(
  'availableClasses.txt',
  races.join( '\r\n' ),
  ( err, data ) => { if ( err ) console.log( err )}
);

races.forEach( thisRace => {
  fs.writeFileSync( `${thisRace}Used.txt`, '' );
});