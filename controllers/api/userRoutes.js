const router = require("express").Router();
const session = require("express-session");
const { User } = require("../../models");

//========CREATE A NEW USER========//
router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
      } catch (err) {
        res.status(400).json(err);
      }
});

//========LOGIN ROUTE========//
router.post("/login", async (req, res) => {
    //========CHECK USER CREDNETIALS AND SET NEW SESSION========//
    try{
        if(req.body.username == username && req.body.password == userpassword){
            session = req.session;
            session.userid = req.body.username;
            console.log(req.session);
            res.send('logged in')
        }else{
            res.send('Invalid credentials.')
        }
    }catch(err){res.status(500).json(err);}

});

//========LOGOUT DELETES SESSION========//
router.get("/logout", async (req, res) => {
    req.session.destroy();
    res.redirect('login')
    // User logout
});

module.exports = router;