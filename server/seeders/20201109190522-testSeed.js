'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('tests', [{
     testdata: 'a little song I wrote Dont worry',
     firstName: 'BeHappy',
     createdAt: new Date(),
     updatedAt:  new Date()
   }], {});
  },

  down: async (queryInterface, Sequelize) => {
return  queryInterface.bulkDelete('tests', {firsName: 'BeHappy'});
  }
};
