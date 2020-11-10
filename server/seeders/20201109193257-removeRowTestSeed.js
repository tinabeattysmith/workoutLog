'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tests', [{
      testdata: 'lost to computer',
      firstName: 'Gary',
      createdAt: new Date(),
      updatedAt:  new Date()
    }], {});
   },
 
   down: async (queryInterface, Sequelize) => {
 return  queryInterface.bulkDelete('tests', {firstName: 'Gary'});
   }
 };
