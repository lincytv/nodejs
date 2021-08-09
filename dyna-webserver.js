const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
	console.log(filePath);
        let extname = path.extname(filePath);

	let contextType ='text/html';

	switch(extname){
		case '.js':
			contextType = 'text/javascript';
			break;
		case '.css':
			contextType = 'text/css';
			break;
		case '.json':
			contextType = 'application/json';
			break;
		case '.png':
			contextType = 'image/png';
			break;
		case '.jpg':
			contextType = 'image/jpg';
			break;
}
fs.readFile(filePath, (err, content) => {
	if (err) {
		if(err.code == 'ENOENT'){
			fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
				res.writeHead(200, {'Content-Type': 'text/html' });
				res.end(content, 'utf8');
			})
		} else {
			res.writeHead(500);
			res.end(`Server Error: ${err.code}`);
		} 
	} else {
			res.writeHead(200, {'Content-Type': contextType});
			res.end(content, 'utf8');
		}
});

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
