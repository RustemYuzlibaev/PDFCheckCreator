'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('printer', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: Sequelize.STRING,
            api_key: Sequelize.UUID,
            check_type: Sequelize.ENUM('kitchen', 'client'),
            point_id: Sequelize.INTEGER,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('printer');
    },
};
