const connection = require('./connection.js');

//Helper function.
function printQuestionMarks(number) {
    const arr = [];
    for (let i = 0; i < number; i++) {
        arr.push('?');
    };
    return arr.toString();
};
//Converts object key value pairs into SQL syntax.
function objToSql(object) {
    const arr = [];

    for(const key in object) {
        let value = object[key];
        if(Object.hasOwnProperty.call(object, key)) {
            if(typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            };
            arr.push(`${key}=${value}`);
        };
    };
        return arr.toString();
};

const orm = {
    selectAll(tableInput, cb) {
       const queryString = `SELECT * FROM ${tableInput};`;
       connection.query(queryString, (err, result) => {
           if(err) {
               throw err;
           };
           cb(result);
       });
    },

    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString)
        connection.query(queryString, vals, (err, result) => {
            if(err) {
                throw err;
            };
            cb(result);
        });
    },

    update(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            cb(result);
        });

    }
};

module.exports = orm;