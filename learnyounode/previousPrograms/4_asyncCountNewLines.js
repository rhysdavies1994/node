var fs = require('fs');
var fileName=process.argv[2];
var bufferString;

function countNewLines(callback) {

  fs.readFile(fileName, function doneReading(err, fileContents) 
  	{
	bufferString = fileContents.toString();

	var amountNewLines=bufferString.split("\n").length -1;
	console.log(amountNewLines);

  	callback()
  	})

}

countNewLines(fileName);

