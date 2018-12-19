const express = require('express')
const app = express()
const port = 3001
var _ = require('underscore');

const array = ['Tip1', 'Tip2', 'Tip3', 'Tip4']

app.get('/', (req, res) => res.send('Hello World!'))

//http://localhost:3001/random returns random array element
app.get('/random', (req, res) => res.send(_.sample(array)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))