'use strict';

var connection;

exports.setConnection = function (con) {
    connection = con;
};

exports.findAll = function (req, res) {
    connection.query("SELECT * FROM item_group", function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.findById = function (req, res) {
    connection.query("SELECT * FROM item_group WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};

exports.addItemGroup = function (req, res) {
    connection.query(
        "INSERT INTO item_group (parent_title, group_title, image) VALUES (?, ?, ?)",
        [
            req.body.parent_title,
            req.body.group_title,
            req.body.image
        ],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        }
    );
};

exports.updateItemGroup = function (req, res) {
    connection.query(
        "UPDATE item_group SET parent_title = ?, group_title = ?, image = ? WHERE id = ?",
        [
            req.body.parent_title,
            req.body.group_title,
            req.body.image,
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

exports.deleteItemGroup = function (req, res) {
    connection.query("DELETE FROM item_group WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};