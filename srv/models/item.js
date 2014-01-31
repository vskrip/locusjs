'use strict';

var connection;

exports.setConnection = function (con) {
    connection = con;
};

exports.findAll = function (req, res) {
    connection.query("SELECT * FROM item", function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.findById = function (req, res) {
    connection.query("SELECT * FROM item WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};

exports.addItem = function (req, res) {
    connection.query(
        "INSERT INTO item (group_id, item_title, diameter, model,\
            number, length_item, weight) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
            req.body.group_id,
            req.body.item_title,
            req.body.diameter,
            req.body.model,
            req.body.number,
            req.body.length_item,
            req.body.weight
        ],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        }
    );
};

exports.updateItem = function (req, res) {
    connection.query(
        "UPDATE item SET group_id = ?, item_title = ?, diameter = ?,\
             model = ?, number = ?, length_item = ?, weight = ? \
             WHERE id = ?",
        [
            req.body.group_id,
            req.body.item_title,
            req.body.diameter,
            req.body.model,
            req.body.number,
            req.body.length_item,
            req.body.weight,
            req.params.id
        ],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        }
    );
};

exports.deleteItem = function (req, res) {
    connection.query("DELETE FROM item WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};