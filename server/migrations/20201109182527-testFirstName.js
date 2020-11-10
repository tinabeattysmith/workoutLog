'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // This tells sequelize what table the new column needs to be entered in to, as well as what the new column is. 
  return queryInterface.addColumn('tests', 'firstName', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    // The down function should always undo the action of the up function so that changes can be undone properly. 
  return queryInterface.removeColumn('tests','firstName')
  }
};
