const router = require("express").Router();
const itemsController = require("../../controllers/traxx_controllers");

router.route("/")
.get(itemsController.findAll)
.post(itemsController.create);

router
.route("/:id")
.get(itemsController.findById)
.get(itemsController.findLast)
.put(itemsController.update)
.delete(itemsController.remove);

module.exports=router;