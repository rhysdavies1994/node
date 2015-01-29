var fs = require('fs');
var path = require('path');
var directoryName=process.argv[2];
var extensionFilter=process.argv[3];
var bufferString;



fs.readdir(directoryName, function (err, fileList) 
{
	for (var currentFile in fileList) 
	{
		var currentExtension=path.extname(fileList[currentFile]);
		
		if(currentExtension == "."+extensionFilter)
		{
			console.log(fileList[currentFile]);
		}
	
	}
});
	

 

