# LAB - 03

## Async

### Author: Ai

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-aimurphy/03-Async/pull/5)
* [![Build Status](https://travis-ci.com/401-advanced-javascript-aimurphy/Lab-03-Async.svg?branch=master)](https://travis-ci.com/401-advanced-javascript-aimurphy/Lab-03-Async)


#### Documentation
* [node fs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html) (Node.js v6.17.1 Documentation)


### Modules
#### `edit-file.js`, `reader.js`
##### Exported Values and Methods

###### `fs.writeFile(file, data, efcb)`
efcb = error first callback
`(err, data) => {
  if (err) throw err;
  console.log('The file has been saved!');
});`

###### `fs.readFile(file, error first efcb)`
Usage Notes or examples


### Setup


#### Running the app
* `node [program name] [file you want to work on]`
  * Returns an array of files.

  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?
