const { Router } = require("express");
const router = Router();

const {
  getUserById,
  getOpportunityById,
} = require("../controllers/index_controller");

router.get("/user/:id", getUserById);
router.get("/opportunities/:id", getOpportunityById);

module.exports = router;
