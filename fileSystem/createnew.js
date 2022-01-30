var fs = require('fs');
fs.appendFile('myNewFileSystem.txt',"Hello Content", function(err){
    if(err) throw err;
    console.log('saved');
})