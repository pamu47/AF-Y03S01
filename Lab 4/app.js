const os = require('os')
const fs = require('fs')
const http = require('http')
const fileName = './test.txt'
const outFileName = './test-copy.txt'

//...Obtain system overview...
//console.log('Architecture :' +os.arch())
//console.log('CPUs :' +os.cpus().length)
//console.log('OS  :' +os.platform())

//read a file
fs.readFile(fileName, (err,data) => {
    if(err){
        console.error(err)
    }
    console.log(data.toString())
})

//Copy the context of a file to another using Streams
const readStream = fs.createReadStream(fileName)
const writeStream = fs.createWriteStream(outFileName)

readStream.pipe(writeStream)

//listening to data of readStream and printing
readStream.on('data',data => {
    console.log(data.toString())
})

//creating the http server
http.createServer((req,res) => {
    res.setHeader('Content-type','text/html')
    switch(req.method){
        case 'GET':
            res.write('<h1>Hello world</h1>')
            res.end()
            break
        case 'POST':
            req.on('data',data => {
                res.write('<h1>hello ' +data+ '</h1>')
                res.end()
            })
            break
    }
}).listen(3000, err => {
    console.log('Server is running on port 3000')
});

