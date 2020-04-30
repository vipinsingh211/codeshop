const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test123",
    database: "codeshop"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("MySQL Connected!");
});

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.get('/', (req, res) => res.send('Hello World!'));

// account: register, login, logout, unregister

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    query = `INSERT INTO users (email, password, role, active) values ('${email}', '${password}', 'user', true)`;
    con.query(query, (err, result) => {
        if (err) throw 'Failed to register!';
        res.send('Successfully registered!');
    });
});

// store: createItem, editItem, deleteItem, getItems


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
