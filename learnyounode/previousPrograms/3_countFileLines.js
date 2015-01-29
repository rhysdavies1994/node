var fs = require('fs');
var fileName=process.argv[2];
var buffer=fs.readFileSync(fileName);
var bufferString = buffer.toString();
var lines = bufferString.split("\n");
var count=lines.length-1;

console.log(count);