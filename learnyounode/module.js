module.exports = function(directoryName, fileExtension, callback) {
		var path = require('path');
		var fs = require('fs');


		fs.readdir(directoryName, function(err, data) {
				if (err) {
					console.log("An error has occured. Abort everything!");
					return callback(err); // early return
				}

				var filteredFiles = new Array();

				for (var currentFile in data) {
					var currentExtension = path.extname(data[currentFile]);

					if (currentExtension == "." + fileExtension) {
						filteredFiles.push(data[currentFile]);
					}

				}

				//Once finished with data, call callback with null for error argument.
				callback(null, filteredFiles);
			});


		};