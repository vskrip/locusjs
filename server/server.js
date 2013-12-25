var express = require('express'),
    mysql = require('mysql'),
    project = require('./models/project')

var connection = mysql.createConnection(
    {
        host : 'u12srv.local',
        port : '3306',
        user : 'locusdb_user',
        password : 'password',
        database : 'locus_db_test'
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

project.setConnection(connection);

app.get('/projects', project.findAll);
app.get('/projects/:id', project.findById);
app.post('/projects', project.addField);
app.put('/projects/:id', project.updateField);
app.del('/projects/:id', project.deleteField);

app.listen(3000);
console.log('Listening on port 3000...');