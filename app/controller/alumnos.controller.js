const db = require('../models');
const alumno = db.alumno;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.nombre){
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }
    const alumno = {
        nombre_del_estudiante: req.body.nombre,
        apellidos_del_estudiante: req.body.apellido,
        dirreccion_del_estudiante: req.body.dirreccion,
        Correo_del_estudiante: req.body.Correo,
        telefono_del_estudiante: req.body.telefono,
        edad_del_estudiante: req.body.edad,
        sexo_del_estudiante: req.body.sexo,
        curso_del_estudiante: req.body.curso,
        nombre_del_encargado: req.body.nombre_del_encargado,
        ingreso: req.body.ingreso
};
alumno .create(alumno)
.then(data => {
    res.send(data);
})

.catch(err => {
    res.status(500).send({
        message: err.message || "Ocurrio algun  un error al crear el alumno"
    });
 
});
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    alumno.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al buscar  alumno con ese ID"
        });
    });
    

}

exports.findOne = (req, res) => {
    const id = req.params.id;
    alumno.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al buscar  el alumno con ese ID"+ id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    alumno.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "alumno actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el alumno con id=${id}. Tal vez el alumno no se encontró o el cuerpo  está vacío!`
            });
        }           
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocurrio algun  al actualizar el alumno con ese ID"+ id
        });
    });
};

exports.delete = (req, res)=> { 
    const id = req.params.id;
    alumno.destroy({
        where: { id : id }
   
    })
    .then(num => {

        if (num == 1) {
            res.send({
                message: "alumno eliminado correctamente!"
            });
        }   
        else {
            res.send({
                message: `No se puede eliminar el alumno con id=${id}.el alumno no se encontró!`
            });
        }
    }
)
    .catch(err => {
    res.status(500).send({
        message: "Ocurrio algun  al eliminar el alumno con ese ID"+ id
});
});
};  

exports.deleteAll = (req, res)=> {
    alumno.destroy({
        where: {},
        truncate: false 
    })
    .then(nums => {
        res.send({ message: `${nums} alumno eliminados!`
         });
    })

    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio algun  al eliminar todos los alumno."
        });
        });


}