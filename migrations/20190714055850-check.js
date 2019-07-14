'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('check', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            printer_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'printer',
                    key: 'id',
                },
            },
            type: {
                type: Sequelize.ENUM,
                values: ['kitchen', 'client'],
            },
            order: Sequelize.JSON,
            status: {
                type: Sequelize.ENUM,
                values: ['new', 'printed'],
            },
            pdf_file: Sequelize.STRING,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('check');
    },
};
