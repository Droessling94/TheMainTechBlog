const { route } = require("../../../.Main/controllers/api");
const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes')
const commentRoutes = require('./commentRoutes');

const router = require("express").Router();


router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);


module.exports = router;