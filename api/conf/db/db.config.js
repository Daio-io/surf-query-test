'use strict';

module.exports = {

    dev: {
        connectionString: 'mongodb://localhost/surf-query',

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    },

    prod: {
        connectionString: process.env.DB_CONNECTION,

        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    }

};

