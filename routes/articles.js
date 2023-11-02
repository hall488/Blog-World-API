const express = require("express");
const router = express.Router();

const controller = require("../controllers/articleController");

router.get("/", controller.index);

router.get("/create", controller.create_get);

router.post("/create", controller.create_post);

router.get("/:id/delete", controller.delete_get);

router.post("/:id/delete", controller.delete_post);

router.get("/:id/update", controller.update_get);

router.post("/:id/update", controller.update_post);

router.get("/:id", controller.read);

router.get("/list", controller.list);

module.exports = router;