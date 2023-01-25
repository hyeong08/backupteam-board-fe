const express = require('express')
// const cors = require('cors')

const app = express()
const port = 7000

app.use(express.json())

// let corsOptions = {
//     origin: 'http://localhost:7100',
//     credentials: true
// }

// app.use(cors(corsOptions))
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/html/home.html")
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + "/html/login.html")
})

app.get('/write', (req,res) => {
    res.sendFile(__dirname + "/html/write.html")
})

app.get('/profile', (req,res) => {
    res.sendFile(__dirname + "/html/profile.html")
})

app.listen(port, () => {
    console.log(port, '서버 실행')
} )