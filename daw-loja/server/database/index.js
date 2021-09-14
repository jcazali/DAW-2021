const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'dawdb'
    }
});

module.exports = knex;