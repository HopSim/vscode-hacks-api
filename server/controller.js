var _ = require("underscore");
const tips = require("./../tips.json");

const getRandom = (req, res) => {
  res.send(_.sample(tips));
};

const searchAPI = (req, res) =>
  res.send(
    _.filter(tips, function(element) {
      console.log(req.query.value);
      return element.includes(req.query.value);
    })
  );

const getAll = (req, res) => {
  res.status(200).send(tips);
};

module.exports = {
  getRandom,
  searchAPI,
  getAll
};
