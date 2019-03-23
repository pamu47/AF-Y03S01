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
    res.write('<h1>Hello World</h1>')
    res.end();
}).listen(3000);