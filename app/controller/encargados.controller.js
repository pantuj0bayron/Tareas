const db = require('../models');
const encargados = db.encargados;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.nombre){
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }
    const encargados = {
        nombre_del_encargado: req.body.nombre,
        apellidos_del_encargado: req.body.apellido,
        dirreccion_del_encargado: req.body.dirreccion,
        Correo_del_encargado: req.body.Correo,
        telefono_del_encargado: req.body.telefono,
        edad_del_encargado: req.body.edad,
        sexo_del_encargado: req.body.sexo,
        estudiante_del_encargado: req.body.estudiante_del_encargado,
        ingreso: req.body.ingreso
};
encargados .create(encargados)
.then(data => {
    res.send(data);
})

.catch(err => {
    res.status(500).send({
        message: err.message || "Ocurrio algun  un error al crear el encargados"
    });
 
});
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    encargados.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al buscar  encargados con ese ID"
        });
    });
    

}

exports.findOne = (req, res) => {
    const id = req.params.id;
    encargados.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al buscar  el encargados con ese ID"+ id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    encargados.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "encargados actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el encargados con id=${id}. Tal vez el encargados no se encontró o el cuerpo  está vacío!`
            });
        }           
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocurrio algun  al actualizar el encargados con ese ID"+ id
        });
    });
};

exports.delete = (req, res)=> { 
    const id = req.params.id;
    encargados.destroy({
        where: { id : id }
   
    })
    .then(num => {

        if (num == 1) {
            res.send({
                message: "encargados eliminado correctamente!"
            });
        }   
        else {
            res.send({
                message: `No se puede eliminar el encargados con id=${id}.el encargados no se encontró!`
            });
        }
    }
)
    .catch(err => {
    res.status(500).send({
        message: "Ocurrio algun  al eliminar el encargados con ese ID"+ id
});
});
};  

exports.deleteAll = (req, res)=> {
    encargados.destroy({
        where: {},
        truncate: false 
    })
    .then(nums => {
        res.send({ message: `${nums} encargados eliminados!`
         });
    })

    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al eliminar todos los encargados."
        });
        });


}