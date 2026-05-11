module.exports = app => { 
    const alumnos = require("../controller/alumnos.controller.js");

    var router = require("express").Router();

    router.post ("/create", alumnos.create);

    router.get("/", alumnos.findAll);

    router.get("/:id", alumnos.findOne);

    router.delete("/:id", alumnos.delete);

    router.delete("/", alumnos.deleteAll);

    router.put("/update/:id", alumnos.update);

    app.use("/api/alumnos", router);

};