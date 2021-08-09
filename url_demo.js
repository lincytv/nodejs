const url = require('url');

const myURL = new URL('https://learn.hashicorp.com:80/tutorials/terraform/resource?in=terraform/configuration-language');

console.log(myURL.href)


console.log(myURL.host)

console.log(myURL.hostname)

console.log(myURL.search)

console.log(myURL.origin)

console.log(myURL.port)

console.log(myURL.pathname)

console.log(myURL.protocol)

console.log(myURL.searchParams)

//adind parmans
myURL.searchParams.append('id', '12345')
console.log(myURL.searchParams)

//loops 
myURL.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));
