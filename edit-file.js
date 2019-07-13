'use strict';

const fs = require ('fs');
const faker = require ('faker');

const file = process.argv.slice(2);
// const filepath = file.map((v)=> 'files/'+v).toString();
// 'files/'+file;
console.log('file is', file);
// console.log('file is', filepath);

let testData = faker.name.findName();
let bufferData = Buffer.from(testData.toString());

//__dirname is the path that is running
fs.readFile(`${__dirname}/files/${file}`, (err,data)=>{
  if(err)throw err;
  let fileContent = data.toString().trim();


  fs.writeFile(`${__dirname}/files/${file}`,bufferData,(err,data)=>{
    if(err)throw err;

    fs.readFile(`${__dirname}/files/${file}`, (err,data)=>{
      if(err)throw err;

      let fileContent = data.toString().trim();

      console.log('file content is',fileContent)
    })
  })
})





// //fs.writeFile(file, data[, options], callback)
// let write = function(){fs.writeFile(filepath, testData, (err, data) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
// }


// //fs.readFile(file[, options], callback)
// let read = function(){fs.readFile(filepath, (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// }

// read();
// write();
// read();