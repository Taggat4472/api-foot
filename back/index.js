const express = require('express'),
    app = express(),
    cors = require('cors');

// Cors permet d'autoriser des client à ce connecter sur l'API
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Test OK')
})

app.get('/equipe', (req, res) => {
    res.json(require('./json/equipe.json'))
})

app.get('/leagues', (req, res) => {
    res.json(require('./json/leagues.json'))
})

app.get('/topscorer', (req, res) => {
    res.json(require('./json/players-topscorers.json'))

app.get('/topassists', (req, res) => {
    res.json(require('./json/players-topassists.json'))
})

})

app.listen(3030)
