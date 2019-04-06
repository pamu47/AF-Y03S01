'use strict'

const express = require('express')

const app = express()

app.use(express.static(__dirname))

app.get('/',(req,res,next) => {
    res.sendFile('index.html')
})

const users = [];

app.post('/',(req,res,next)=>{
    const user = req.body
    user.birthday = new Date(user.birthday)
    user.id = Date.now()
    users.push(user)
    res.json(user)
})

app.get('/users',(req,res)=>{
    res.json(users)
})

app.get('/users/:id',(req,res)=>{
    const user = users.find(user => user.id === parseInt(req.params.id))
    res.json(user)
})

app.listen(3000,err => {
    if(err){
        console.error(err)
        return
    }
    console.log('app litening to port 3000')
})

