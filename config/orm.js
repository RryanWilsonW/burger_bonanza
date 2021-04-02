const connection = require('./connection.js');

const orm = {
    selectAll(whatToSelect, tableInput) {
        const queryString = 'SELECT * ?? FROM ??';
        connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne()

}

module.exports = orm;