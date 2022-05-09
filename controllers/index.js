const router = require("express").Router();
const apiRoutes = require('./api');

// finish the required routes=
router.use('/api', apiRoutes);
// const homeRoutes =
// const dashboardRoutes =

router.use("/", homeRoutes);
// finish the other needed routes with router.use()

module.exports = router;