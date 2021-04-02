const orm = require('../config/orm.js');

const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    }
};

module.exports = burger;