const connection = require('../config/db_connect');

class AppData {
    constructor(){}

    navbarData(req, res) {
        let navbarQuery = 'SELECT * FROM navbar';
        connection.query(navbarQuery, (err, result) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(result);
        });
    }
}


module.exports = new AppData()