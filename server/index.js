const express = require('express')
const app = express()
const port = 3001
var _ = require('underscore');

const array = ['Tip1', 'Tip2', 'Tip3', 'Tip4']

app.get('/', (req, res) => res.send('Hello World!'))

//http://localhost:3001/random returns random array element
app.get('/random', (req, res) => res.send(_.sample(array)))

//http://localhost:3001/search?value=3 example OR http://localhost:3001/search?value=Tip
app.get('/search', (req, res) => res.send(_.filter(array, function (element) {
    // console.log(req.query.value)
    return element.includes(req.query.value)
})))

app.listen(port, () => console.log(`listening on port ${port}!`))