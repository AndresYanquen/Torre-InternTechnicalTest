const axios = require("axios");

const getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await axios
    .get(`https://bio.torre.co/api/bios/${id}`)
    .then((responseData) => {
      res.send(responseData.data);
    })
    .catch((err) => console.log(err));
};

const getOpportunityById = async (req, res) => {
  const id = req.params.id;
  const response = await axios
    .get(`https://torre.co/api/suite/opportunities/${id}`)
    .then((responseData) => {
      res.send(responseData.data);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getUserById,
  getOpportunityById,
};
