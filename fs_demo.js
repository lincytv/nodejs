const fs = require('fs');
const path = require('path');


//Create dir async 
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if(err) throw err;
	console.log('Folder Created');
	
});

//Create and write file

fs.writeFile(path.join(__dirname, '/test', 'index.html'),'Welecome to OOty', err => {
	if(err) throw err;
	console.log('File Created');
	//file append
	fs.appendFile(path.join(__dirname, '/test', 'index.html'),'Welecome to OOty2', err => {
		if(err) throw err;
		console.log('File Append 1');
		
	});
	
});

//File append
fs.appendFile(path.join(__dirname, '/test', 'index.html'),'seecond line appended', err => {
	if(err) throw err;
	console.log('File append 2');
	
});

//Read file
fs.rename=(path.join(__dirname, '/test', 'index.html'),'utf8', (err, data) => {
	if(err) throw err;
	console.log(data);
	
});

//File rname
fs.readFile(path.join(__dirname, '/test', 'index.html'),path.join(__dirname, '/test', 'hello.html'), (err) => {
	if(err) throw err;
	console.log('File renamed');
	
});
