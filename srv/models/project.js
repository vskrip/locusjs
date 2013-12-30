"use strict";

var connection;

exports.setConnection = function (con) {
    connection = con;
};

exports.findAll = function (req, res) {
    connection.query("SELECT * FROM tbl_project", function (err, rows) {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
};

exports.findById = function (req, res) {
    connection.query("SELECT * FROM tbl_project WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};

exports.addField = function (req, res) {
    connection.query(
        "INSERT INTO tbl_project (tenant_id, field_full_title, field_short_title,\
            cluster_number, altitude, declination, table_height, rig_shift_azimuth,\
            hole_number, holehead_shift, project_deviation, project_azimuth,\
            project_vert_depth, admission_circle_radius, with_declination,\
            with_table_height, upper_limit_corridor, lower_limit_corridor,\
            roof_seam, bottom_seam, is_current) VALUES (\
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?\
        )",
        [
            req.body.tenant_id,
            req.body.field_full_title,
            req.body.field_short_title,
            req.body.cluster_number,
            req.body.altitude,
            req.body.declination,
            req.body.table_height,
            req.body.rig_shift_azimuth,
            req.body.hole_number,
            req.body.holehead_shift,
            req.body.project_deviation,
            req.body.project_azimuth,
            req.body.project_vert_depth,
            req.body.admission_circle_radius,
            req.body.with_declination,
            req.body.with_table_height,
            req.body.upper_limit_corridor,
            req.body.lower_limit_corridor,
            req.body.roof_seam,
            req.body.bottom_seam,
            req.body.is_current
        ],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        }
    );
};

exports.updateField = function (req, res) {
    connection.query(
        "UPDATE tbl_project SET tenant_id = ?, field_full_title = ?,\
            field_short_title = ?, cluster_number = ?, altitude = ?,\
            declination = ?, table_height = ?, rig_shift_azimuth = ?,\
            hole_number = ?, holehead_shift = ?, project_deviation = ?,\
            project_azimuth = ?, project_vert_depth = ?, admission_circle_radius = ?,\
            with_declination = ?, with_table_height = ?, upper_limit_corridor = ?,\
            lower_limit_corridor = ?, roof_seam = ?, bottom_seam = ?, is_current = ?\
        WHERE id = ?",
        [
            req.body.tenant_id,
            req.body.field_full_title,
            req.body.field_short_title,
            req.body.cluster_number,
            req.body.altitude,
            req.body.declination,
            req.body.table_height,
            req.body.rig_shift_azimuth,
            req.body.hole_number,
            req.body.holehead_shift,
            req.body.project_deviation,
            req.body.project_azimuth,
            req.body.project_vert_depth,
            req.body.admission_circle_radius,
            req.body.with_declination,
            req.body.with_table_height,
            req.body.upper_limit_corridor,
            req.body.lower_limit_corridor,
            req.body.roof_seam,
            req.body.bottom_seam,
            req.body.is_current,
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

exports.deleteField = function (req, res) {
    connection.query("DELETE FROM tbl_project WHERE id = ?", [req.params.id],
        function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        });
};