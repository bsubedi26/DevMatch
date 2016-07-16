<<<<<<< HEAD
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'profiles_db'
// });
=======

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'profiles_db'
});
>>>>>>> sudoMaster


// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

<<<<<<< HEAD
// module.exports = connection;

module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'root',
        'password': 'root'
    },
	'database': 'profiles_db',
    'users_table': 'users'
};
=======
module.exports = connection;
>>>>>>> sudoMaster
