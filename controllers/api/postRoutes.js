const router = require("express").Router();
const { Post } = require("../../models");

//========GETS ALL POSTS========//
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll();
      res.status(200).json(postData)
    } catch (err) {
      res.status(500).json(err);
    }
  });

//========GETS ALL POSTS BY ID========//
router.post("/",  async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
      } catch (err) {
        res.status(400).json(err);
      }
});
//========UPDATES A POST BY ID========//
router.put("/:id",  async (req, res) => {
    try{
        const postData = await Post.update({
          category_name: req.body.category_name
        },
          {
            where:
            {
              id: req.params.id,
            },
          }
        );
        res.status(200).json(postData);
        }catch(err){
          res.status(400).json(err);
        }
});
//========DELETES A POST BY ID========//
router.delete("/:id",  async (req, res) => {
    // Delete the post
    try {
        //--CATEGROYDATA SHOULD COME OUT TO THE DELETED ITEM--//
        const postData = await Post.destroy({
          where: {
            id: req.params.id
          }
        });
        //--CATCHING INCASE NO ID IS FOUND, ALSO WORK FOR IF NOT DESTROYED--//
        if (!postData) {
          res.status(404).json({ message: 'No Matching Posts' });
          return;
        }
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;