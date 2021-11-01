// const player = require('./player');

// player.barbarian('Mario');
// player.witchDoctor('Paul');

const fs = require('fs');

fs.writeFile('player.md', 'Test write Markdown file.', (e) => {
  if (e) throw e;

  console.log('File has been written.');
});

fs.readFile('./player.md', 'utf-8', (e, data) => {
  if (e) throw e;
  console.log(data);
});
