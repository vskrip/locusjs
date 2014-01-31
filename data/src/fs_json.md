Looking back at this, I really should have simply went this route in the first place.
Here's a little lib that I wrote for Node that is really, realy, realy helpful!

var fs = require('fs');
exports.saveJsonToFile = function(filePath, json) {
    fs.writeFileSync(filePath+'.json', JSON.stringify(json, null, " ")
}
exports.readJsonFromFile = function(filePath) {
    return JSON.parse(fs.readFileSync(filePath+'.json'))
}

Just save this to a file, then load the file to your project using:

var JsonFs = require('./Path/To/File');

players = JsonFs.readJsonFromFile('players');
JsonFs.saveJsonToFile('players', players);

PLEASE NOTE: JSON files don't support functions!!!