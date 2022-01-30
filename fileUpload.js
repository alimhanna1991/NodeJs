var http = require('http');
var formidable = require('formidable');
var fs = require ('fs');

http.createServer(function(req,res){
    if(req.url == '/fileuplaod'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldPath = files.filetoupload.filepath;
            var newpath = 'E:/projects/nodejs/w3school/NodeJs'+ files.filetoupload.originalFilename;
            fs.rename(oldPath,newpath,function(er){
                if ( er) throw er;
                res.write('File Uploaded and moved');
                res.end();
            })
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080);