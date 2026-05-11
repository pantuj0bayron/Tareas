module.exports = (sequelize, Sequelize)=>
{

const encargados = sequelize.define("encargado", {
    nombre_del_encargado: {
        type: Sequelize.STRING
    },
    apellidos_del_encargado: {
        type: Sequelize.STRING
    }, 
    dirreccion_del_encargado: {
        type: Sequelize.STRING
    },
    Correo_del_encargado: {
        type: Sequelize.STRING
    },
    telefono_del_encargado: {
        type: Sequelize.INTEGER
    },
  
    edad_del_encargado: {
        type: Sequelize.INTEGER
    },

        sexo_del_encargado: {
        type: Sequelize.STRING
    },
     
    estudiante_del_encargado: {
        type: Sequelize.STRING
    },
    




    ingreso: {
        type: Sequelize.DATE    
    },
});
return encargados;

}