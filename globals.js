/*
    File: globals.js
    Description: nodejs global objects
*/

//global: the global namespace object
console.log(global)

//process
console.log(process)

//console
//see console.js
console.log(console)

//Buffer: handles binary data
console.log(Buffer)

//require: requires modules
console.log(require)

//require.resolve(): returns the resolved filename instead of loading
console.log(require.resolve)

//require.cache: loaded modules with require() are saved here
console.log(require.cache)

//__filename: current filename being executed
//local to each module
console.log(__filename)

//__dirname: current dirname
//local to each module
console.log(__dirname)

//module: reference to current module
console.log(module)

//exports: object shared between all instances of the current module
//local to each module
console.log(exports)

//setTimeout: schedules a function
t = setTimeout(function() {console.log('timed out!')}, 2000)

//clearTimeout: stops setTimeout
clearTimeout(t)

//setInterval: schedules a function periodically
f = setInterval(function() {console.log('timed out!')}, 1000)

//clearInterval: stops setInterval
clearInterval(f)

