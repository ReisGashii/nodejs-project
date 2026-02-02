// src/controllers/statsController.js
const { getSummary } = require("../services/libraryStatsService");
async function summary(req, res) {
 const data = await getSummary();
 res.json(data);
}
module.exports = { summary };
// src/routes/statsRoutes.js
const router = require("express").Router();
const c = require("../controllers/statsController");
router.get("/summary", c.summary);
module.exports = router;