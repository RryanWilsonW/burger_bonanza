const orm = require('../config/orm');

let data = orm.selectAll('burger_name', 'burgers', (result) =>
    console.log(result)
);

