# DnD-Character-Suggestion
Simple Node script for choosing a random character race and class combination for D&D 5E.

## Wh.... why?
I wrote it because I started a project to create a level 1 character of every race and class combination in the Player's Handbook. I wanted to track it, and I didn't want to systematically do 9 barbarians in a row or 12 dwarves in a row. 

But if you need an NPC, or just inspiration, this will work for that too.

## Installation
Just download the files to a folder on your local computer (cloning the repo works for this).

## Usage
Navigate to the folder and invoke the file you need using Node 

### `node index`
The default use. Selects a combination of character race and class it has not suggested before. It records the used combinations.

### `node byClass`
logs to the terminal the list of combinations it has suggested in the past, sorted by class.

### `node byRace`
logs to the terminal the list of combinations it has suggested in the past, sorted by race.

### `node reset`
Resets the data. Afterward the script will recommend combinations as if it has not recommended any before. Does not provide any warnings about how destructive this is.

## Reasoning
I'm using text files because I didn't want to set up a whole database for this. There are exactly 2 pieces of data, and both are strings of a limited set of options. This makes the entire project 7 KB. It also makes it super easy to add options if you want to have genasi or artificers or homebrew content. 

## Future
The most immediate feature is producing a random combination from the full data set without having to reset everything. I also have some code tweaks I want to make

## Contributing
I welcome code improvements or new features in the form of pull requests.

### I'ma fork this/make my own version and make it better because you suck
Ok. Have fun!
