const express = require("express");
const router = express.Router();
const flairController = require("../controllers/flairController")

router.get("/topics/:topicId/posts/:postId/flairs/new", flairController.new);
router.post("/topics/:topicId/posts/:postId/flairs/create", flairController.create);
router.get("/topics/:topicId/posts/:postId/flairs/:id", flairController.show);
router.post("/topics/:topicId/posts/:postId/flairs/:id/destroy", flairController.destroy);
router.get("/topics/:topicId/posts/:postId/flairs/:id/edit", flairController.edit);
router.post("/topics/:topicId/posts/:postId/flairs/:id/update", flairController.update);

module.exports = router;
