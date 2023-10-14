/**
 * I screwed up a number of times, and needed a fast way to reset the data.
 * You probably won't ever need to use this, but it's here if you do.
 */

const fs = require('fs');
const { races } = require('./common.js')

fs.writeFile(
  'availableRaces.txt',
  races.join( '\r\n' ),
  ( err, data ) => { if ( err ) console.log( err )}
);