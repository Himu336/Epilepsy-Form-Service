'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patients', [{
      name: 'Ravi Verma',
      gender: 'Male',
      dob: '1990-04-12',
      phone: '9876543210',
      id_proof: 'Aadhar-1234-5678-9101',
      address: 'Village Kheda, District Betul, MP',
      gps_coordinates: '22.15,78.11',
      asha_id: 'ASHA_001',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patients', null, {});
  }
};
