const express = require('express')

const app = express()
const port = 3000

app.get('/home', (req,res) => {
    res.send('home')
})

app.get('/login', (req,res) => {
    res.send('login')
})

app.get('/profile', (req,res) => {
    res.send('profile')
})

app.listen(port, () => {
    console.log(port, '서버 실행')
} )