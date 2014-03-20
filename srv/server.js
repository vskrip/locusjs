var express = require('express'),
    mysql = require('mysql'),
    itemGroup = require('./models/itemGroup');
    item = require('./models/item');

var conn_config = {
        host : 'u12srv.local',
        port : '3306',
        user : 'locusdb_user',
        password : 'password',
        database : 'locus_db'
    };
    
var connection = mysql.createConnection(conn_config);

connection.connect(function(err) {
    if(err) {
        console.log("Could not connect to DB");
    }else{
        console.log("Connected to " + conn_config.database + ' on ' + conn_config.host );
    }
});

var app = express();

// Allowing Cross-Domain Request for the Angular REST client
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8888");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.configure(function () {
    "use strict";
    // 'default', 'short', 'tiny', 'dev'
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
});

itemGroup.setConnection(connection);
item.setConnection(connection);

app.get('/itemGroups', itemGroup.findAll);
//TODO: Delete from production version how redundant
app.get('/parentGroups', itemGroup.findParentGroups);
//TODO: Delete from production version how redundant
app.get('/itemsParentGroup/:parent_title', itemGroup.findByParent);
app.get('/itemGroups/:id', itemGroup.findById);
app.post('/itemGroups', itemGroup.addItemGroup);
app.put('/itemGroups/:id', itemGroup.updateItemGroup);
app.del('/itemGroups/:id', itemGroup.deleteItemGroup);

app.get('/items', item.findAll);
app.get('/items/:id', item.findById);
app.get('/compoItems', item.findCompoItems);
app.put('/compoItems/:id', item.removeFromCompo);
app.post('/items', item.addItem);
app.put('/items/:id', item.updateItem);
app.del('/items/:id', item.deleteItem);

app.listen(3000);
console.log('Listening on port 3000...');