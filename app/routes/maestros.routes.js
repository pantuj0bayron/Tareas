module.exports = app => { 
    const maestros = require("../controller/maestros.controller.js");

    var router = require("express").Router();

    router.post ("/create/maestros", maestros.create);

    router.get("/", maestros.findAll);

    router.get("/:id", maestros.findOne);

    router.delete("/:id", maestros.delete);

    router.delete("/", maestros.deleteAll);

    router.put("/update/:id", maestros.update);

    app.use("/api/maestros", router);

};