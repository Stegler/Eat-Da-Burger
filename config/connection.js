var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '1steger1',
		database: 'burger_db'
	});
};


connection.connect();

module.exports = connection;