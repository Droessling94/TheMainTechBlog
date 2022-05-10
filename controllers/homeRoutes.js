const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    const postData = await Post.findAll().catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('posts', { posts });
});

router.get("/post/:id", async (req, res) => {
    // get a single post
});

router.get("/login", (req, res) => {
    // login
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;