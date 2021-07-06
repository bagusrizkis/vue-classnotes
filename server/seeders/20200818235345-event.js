'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Events', [{
      "id": 1,
      "title": "Drive-In Senja Alam Sutera: Back to The Future",
      "tag": "Theater & Drama Musical",
      "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200816154342_5f38f1be09ac3.jpg",
      "date": "18 Aug 2020",
      "userId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2,
      "title": "Konser Virtual Romsh Project",
      "tag": "Concert",
      "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200713020334_5f0b5e861aa4e.jpg",
      "date": "22 Aug 2020",
      "userId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 3,
      "title": "Show Your Rare Festival Online Charity Concert",
      "tag": "Concert",
      "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200802052250.png",
      "date": "22 Aug 2020",
      "userId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 4,
      "title": "Konser Virtual Semesta Cinta The Baldys",
      "tag": "Concert",
      "imgUrl": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200805115213.jpg",
      "date": "22 Aug 2020",
      "userId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Events', null, {});
  }
};
