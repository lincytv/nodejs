const path = require('path');

//file name with full path 
console.log(__filename);

//Basefile name 
console.log(path.basename(__filename));

console.log(path.dirname(__filename))

console.log(path.extname(__filename))

console.log(path.parse(__filename))


console.log(path.parse(__filename).base)
console.log(path.parse(__filename).ext)
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).name)


//join 

console.log(path.join(__dirname, 'public', 'index.hrml'));