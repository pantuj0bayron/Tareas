const db = require('../models');
const alumno = db.alumnos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.nombre_del_estudiante){
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }
    const nuevoalumno = {
        nombre_del_estudiante: req.body.nombre_del_estudiante,
        apellidos_del_estudiante: req.body.apellidos_del_estudiante,
        promedio_del_estudiante: req.body.promedio_del_estudiante,
        dirreccion_del_estudiante: req.body.dirreccion_del_estudiante,
        Correo_del_estudiante: req.body.Correo_del_estudiante,
        telefono_del_estudiante: req.body.telefono_del_estudiante,
        edad_del_estudiante: req.body.edad_del_estudiante,
        sexo_del_estudiante: req.body.sexo_del_estudiante,
        curso_del_estudiante: req.body.curso_del_estudiante,
        nombre_del_encargado: req.body.nombre_del_encargado,
        ingreso: req.body.ingreso
};
alumno .create(nuevoalumno)
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