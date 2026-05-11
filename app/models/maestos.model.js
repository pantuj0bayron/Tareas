module.exports = (sequelize, Sequelize)=>
{

const maestros = sequelize.define("maestro", {
    nombre_del_maestro: {
        type: Sequelize.STRING
    },
    apellidos_del_maestro: {
        type: Sequelize.STRING
    }, 
    dirreccion_del_maestro: {
        type: Sequelize.STRING
    },
    Correo_del_maestro: {
        type: Sequelize.STRING
    },
    telefono_del_maestro: {
        type: Sequelize.INTEGER
    },
  
    edad_del_maestro: {
        type: Sequelize.INTEGER
    },

        sexo_del_maestro: {
        type: Sequelize.STRING
    },
     
    curso_del_maestro: {
        type: Sequelize.STRING
    },
    




    ingreso: {
        type: Sequelize.DATE    
    },
});
return maestros;

}