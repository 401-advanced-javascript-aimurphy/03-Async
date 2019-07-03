'use strict';

const fs = require ('fs');
const faker = require ('faker');
const kingleer = process.argv.slice(2);
const filepath = 'files/'+kingleer;

console.log('kingleer is', kingleer);
console.log('file is', filepath);


let fakerData = faker.name.findName();

//fs.writeFile(file, data[, options], callback)
let write = function(){fs.writeFile(filepath, fakerData, (err, data) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}


//fs.readFile(file[, options], callback)
let read = function(){fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
}

read();
write();
read();