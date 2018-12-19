const express = require('express')
const app = express()
const port = 3001
var _ = require('underscore');

const array = ['Tip1', 'Tip2', 'Tip3', 'Tip4']

app.get('/', (req, res) => res.send('Hello World!'))

//http://localhost:3001/random returns random array element
app.get('/random', (req, res) => res.send(_.sample(array)))

//http://localhost:3001/search could possibily pass in a variable from the user to filter results
app.get('/search', (req, res) => res.send(_.filter(array, function (element) { return element.includes("3") })))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))