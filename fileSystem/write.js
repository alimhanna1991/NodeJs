var fs = require('fs');
fs.writeFile('myThirdFile.txt','Hello Content',function(err){
    if (err) throw err;
    console.log('Saved');
})