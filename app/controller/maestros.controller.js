const db = require('../models');
const maestros = db.maestros;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.nombre_del_maestro){
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }
    const nuevomaestros = {
        nombre_del_maestro: req.body.nombre_del_maestro,
        apellido_del_maestro: req.body.apellido_del_maestro,
        dirreccion_del_maestro: req.body.dirreccion_del_maestro,
        Correo_del_maestro: req.body.Correo_del_maestro,
        telefono_del_maestro: req.body.telefono_del_maestro,
        ingreso_del_maestro: req.body.ingreso_del_maestro
};
maestros .create(nuevomaestros)
.then(data => {
    res.send(data);
})

.catch(err => {
    res.status(500).send({
        message: err.message || "Ocurrio algun  un error al crear el maestros"
    });
 
});
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    maestros.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al buscar  maestros con ese ID"
        });
    });
    

}

exports.findOne = (req, res) => {
    const id = req.params.id;
    maestros.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al buscar  el maestros con ese ID"+ id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    maestros.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "maestros actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el maestros con id=${id}. Tal vez el maestros no se encontró o el cuerpo  está vacío!`
            });
        }           
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocurrio algun  al actualizar el maestros con ese ID"+ id
        });
    });
};

exports.delete = (req, res)=> { 
    const id = req.params.id;
    maestros.destroy({
        where: { id : id }
   
    })
    .then(num => {

        if (num == 1) {
            res.send({
                message: "maestros eliminado correctamente!"
            });
        }   
        else {
            res.send({
                message: `No se puede eliminar el maestros con id=${id}.el maestros no se encontró!`
            });
        }
    }
)
    .catch(err => {
    res.status(500).send({
        message: "Ocurrio algun  al eliminar el maestros con ese ID"+ id
});
});
};  

exports.deleteAll = (req, res)=> {
    maestros.destroy({
        where: {},
        truncate: false 
    })
    .then(nums => {
        res.send({ message: `${nums} maestros eliminados!`
         });
    })

    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al eliminar todos los maestros."
        });
        });


}