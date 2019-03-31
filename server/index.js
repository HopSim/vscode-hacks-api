const express = require("express");
const app = express();
const port = 3001;
const ctlr = require("./controller");

app.get("/api", (req, res) => res.send("Hello World!"));

//http://localhost:3001/random returns random array element
app.get("/random", ctlr.getRandom);

//http://localhost:3001/search?value=3 example OR http://localhost:3001/search?value=Tip
app.get("/search", ctlr.searchAPI);

//get all
app.get("/api/all", ctlr.getAll);

app.listen(port, () => console.log(`listening on port ${port}!`));
