const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto-js');

const validator = require('../common-lib/validator');


const con = mysql.createConnection({
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

// account: register, login, logout, unregister

app.post('/register', (req, res) => {
    let email, password, role;
    
    if (validator.is_valid_email(req.body.email)) {
        email = req.body.email;
    } else {
        throw 'Invalid input';
    }

    if (validator.is_valid_pass(req.body.password)) {
        password = crypto.SHA3(req.body.password);
    } else {
        throw 'Invalid input';
    }
    
    const password = req.body.password;
    if ('role' in req.body) {
        role = validator.is_valid_role(req.body.role);
        if (!role) { throw 'Invalid input'; }
    } else {
        role = 'user';
    }

    query = `INSERT INTO users (email, password, role, active) values ('${email}', '${password}', 'user', true)`;
    con.query(query, (err, result) => {
        if (err) throw 'Failed to register!';
        res.send('Successfully registered!');
    });
});

// store: createItem, editItem, deleteItem, getItems


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
