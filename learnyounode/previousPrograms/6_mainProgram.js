var fs = require('fs');
var path = require('path');
var directoryName = process.argv[2];
var extensionFilter = process.argv[3];


var mymodule = require('./module.js');

mymodule(directoryName,extensionFilter, function(err,data){
	//No error, process data
				for (var currentFile in data) {
					
						console.log(data[currentFile]);
				}
});
