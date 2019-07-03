'use strict';

const fs = require ('fs');
// const faker = require ('faker');
const kingleer = process.argv.slice(2);

console.log(kingleer);

//fs.writeFile(file, data[, options], callback)
let write = function(){fs.writeFile('files/test.txt', 'Hello Node.js', (err, data) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}


//fs.readFile(file[, options], callback)
let read = function(){fs.readFile('files/test.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
}



read();

write();
