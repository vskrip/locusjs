'use strict';

var connection;

exports.setConnection = function (con) {
    connection = con;
};

exports.findAll = function (req, res) {
    connection.query("SELECT * FROM compo_item", function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.findById = function (req, res) {
    connection.query("SELECT * FROM compo_item WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};

exports.addCompoItem = function (req, res) {
    connection.query(
        "INSERT INTO compo_item (item_id, position) VALUES (?, ?)",
        [
            req.body.item_id,
            req.body.position
        ],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        }
    );
};

exports.updateCompoItem = function (req, res) {
    connection.query(
        "UPDATE compo_item SET item_id = ?, position = ? WHERE id = ?",
        [
            req.body.item_id,
            req.body.position,
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

exports.deleteCompoItem = function (req, res) {
    connection.query("DELETE FROM compoItem WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};