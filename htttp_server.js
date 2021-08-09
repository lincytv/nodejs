const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
     if (req.url === '/') {
	     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
		     if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(data);
		 res.end();
	     });
     } else if(req.url === '/about') {
	fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(data);
		 res.end();
	     });
     }
     if (req.url === '/api/users') {
	     const users = [
		     { name: "Raja", age: 20 },
		     { name: "Munna", age: 25 }

	     ];
	     res.writeHead(200, {'Content-Type': 'application/json'}); 
	     res.end(JSON.stringify(users));  

	
	};
}
);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
