const express = require("express");
const {
  signUp,
  activate,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
} = require("./controller");
const router = express();

const { authenticateParticipant } = require("../../../middlewares/auth");

router.post("/auth/signup", signUp);
router.post("/auth/signin", signin);
router.put("/active", activate);
router.get("/events", getAllLandingPage);
router.get("/events/:id", getDetailLandingPage);
router.get("/orders", authenticateParticipant, getDashboard);
router.post("/checkout", authenticateParticipant, checkout);

module.exports = router;
