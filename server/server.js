var express = require('express'),
    mysql = require('mysql'),
    field = require('./models/field')

var connection = mysql.createConnection(
    {
        host : 'u12srv.local',
        port : '3306',
        user : 'locusdb_user',
        password : 'password',
        database : 'locusdb'
    }
);

connection.connect();

var app = express();

app.configure(function () {
    "use strict";
    // 'default', 'short', 'tiny', 'dev'
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

field.setConnection(connection);

app.get('/fields', field.findAll);
app.get('/fields/:id', field.findById);
app.post('/fields', field.addField);
app.put('/fields/:id', field.updateField);
app.del('/fields/:id', field.deleteField);

app.listen(3000);
console.log('Listening on port 3000...');