const races = [
	'dragonborn',
	'dwarf',
	'elf',
	'gnome',
	'halfElf',
	'halfOrc',
	'halfling',
	'human',
	'tiefling',
];
const classes = [
	'barbarian',
	'bard',
	'cleric',
	'druid',
	'fighter',
	'monk',
	'paladin',
	'ranger',
	'rogue',
	'sorcerer',
	'warlock',
	'wizard',
];

const usedCombosByClass = { 
	barbarian: [],
	bard: [],
	cleric: [],
	druid: [],
	fighter: [],
	monk: [],
	paladin: [],
	ranger: [],
	rogue: [],
	sorcerer: [],
	warlock: [],
	wizard: []
};

const usedCombosByRace = { 
	dragonborn: [],
	dwarf: [],
	elf: [],
	gnome: [],
	halfElf: [],
	halfOrc: [],
	halfling: [],
	human: [],
	tiefling: []
};

/**
 * pads a string to make it a consistent length
 * @param { string } name - a name to pad
 * @returns { string } name - the padded version of the name
 * 
 * TODO: dynamically find longest length from the list of names to allow
 * alternate lists of races or classes beyond core PHB.
 */
const padNames = ( name => {
	while( name.length < 12 ) { name = name + ' ' }
	return name;
});

module.exports = {
  races,
  classes,
  usedCombosByRace,
  usedCombosByClass,
  padNames,
};