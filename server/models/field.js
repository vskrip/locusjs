"use strict";

var connection;

exports.setConnection = function (con) {
    connection = con;
};

// TODO: В JSLint ругается на неиспользуемый параметр req
exports.findAll = function (req, res) {
    connection.query("SELECT * FROM tbl_field", function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.findById = function (req, res) {
    connection.query("SELECT * FROM tbl_field WHERE id = ?", [req.params.id], function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.addField = function (req, res) {
    connection.query("INSERT INTO tbl_field (short_title, title) VALUES (?, ?)", [req.body.short_title, req.body.title], function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.updateField = function (req, res) {
    connection.query("UPDATE tbl_field SET short_title = ?, title = ? WHERE id = ?", [req.body.short_title, req.body.title, req.params.id], function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.deleteField = function (req, res) {
    connection.query("DELETE FROM tbl_field WHERE id = ?", [req.params.id], function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};