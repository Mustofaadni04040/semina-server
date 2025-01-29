const express = require("express");
const router = express();
const { createCMSOrganizer } = require("./controllers");

router.post("/organizers", createCMSOrganizer);

module.exports = router;
