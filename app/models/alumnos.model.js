module.exports = (sequelize, Sequelize)=>
{

const alumnos = sequelize.define("alumnos", {
    nombre_del_estudiante: {
        type: Sequelize.STRING
    },
    apellidos_del_estudiante: {
        type: Sequelize.STRING
    }, 
    dirreccion_del_estudiante: {
        type: Sequelize.STRING
    },
    Correo_del_estudiante: {
        type: Sequelize.STRING
    },
    telefono_del_estudiante: {
        type: Sequelize.INTEGER
    },
  
    edad_del_estudiante: {
        type: Sequelize.INTEGER
    },

    sexo_del_estudiante: {
        type: Sequelize.STRING
    },
    
    curso_del_estudiante: { 
        type: Sequelize.STRING
    },

    nombre_del_encargado: {
        type: Sequelize.STRING
    },



    ingreso: {
        type: Sequelize.DATE    
    },
});
return alumnos;

}