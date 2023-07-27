const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://eacqmnvk:aYNkP0jjrpoB84qdDX7urmN5Om3iqCIz@silly.db.elephantsql.com/eacqmnvk",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Ateção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};