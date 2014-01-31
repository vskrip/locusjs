var express = require('express'),
    mysql = require('mysql'),
    itemGroup = require('./models/itemGroup');
    item = require('./models/item');
    compoItem = require('./models/compoItem');

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

app.configure(function () {
    "use strict";
    // 'default', 'short', 'tiny', 'dev'
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

itemGroup.setConnection(connection);
item.setConnection(connection);
compoItem.setConnection(connection);

app.get('/itemGroups', itemGroup.findAll);
app.get('/itemGroups/:id', itemGroup.findById);
app.post('/itemGroups', itemGroup.addItemGroup);
app.put('/itemGroups/:id', itemGroup.updateItemGroup);
app.del('/itemGroups/:id', itemGroup.deleteItemGroup);

app.get('/items', item.findAll);
app.get('/items/:id', item.findById);
app.post('/items', item.addItem);
app.put('/items/:id', item.updateItem);
app.del('/items/:id', item.deleteItem);

app.get('/compoItems', compoItem.findAll);
app.get('/compoItems/:id', compoItem.findById);
app.post('/compoItems', compoItem.addCompoItem);
app.put('/compoItems/:id', compoItem.updateCompoItem);
app.del('/compoItems/:id', compoItem.deleteCompoItem);

app.listen(3000);
console.log('Listening on port 3000...');