'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('printer', [
            {
                name: 'HP1020',
                check_type: 'kitchen',
                api_key: uuidv4(),
                point_id: 1,
            },
            {
                name: 'HP1020',
                check_type: 'kitchen',
                api_key: uuidv4(),
                point_id: 1,
            },
            {
                name: 'HP1020',
                check_type: 'kitchen',
                api_key: uuidv4(),
                point_id: 1,
            },
            {
                name: 'HP1020',
                check_type: 'client',
                api_key: uuidv4(),
                point_id: 1,
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('printer', null, {});
    },
};
