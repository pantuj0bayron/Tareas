module.exports = app => { 
    const encargados = require("../controller/encargados.controller.js");

    var router = require("express").Router();

    router.post ("/create/encargados", encargados.create);

    router.get("/", encargados.findAll);

    router.get("/:id", encargados.findOne);

    router.delete("/:id", encargados.delete);

    router.delete("/", encargados.deleteAll);

    router.put("/update/:id", encargados.update);

    app.use("/api/encargados", router);

};