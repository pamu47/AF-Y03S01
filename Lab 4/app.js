const os = require('os')
const fs = require('fs')
const fileName = './test.txt'

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



