// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - (old) function to use modules (CommonJS) / import-export (new)
// module     - info about current module (file)
// process    - info about env where the program is being executed


console.log(__dirname)
console.log(module)

setInterval(() => {
    console.log('Hello world!')  
},1000)