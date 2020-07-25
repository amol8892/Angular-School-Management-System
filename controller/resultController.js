'use strict';
var AcademicResultTask = require('../model/AcademicResultModel/academicResultModel');

// ------------------ Academic Result --------------------------------------
exports.getStudentForAcademicResult = function (req, res) {
    var AcademicResultModel = new AcademicResultTask(req.body);

    AcademicResultTask.getStudentForAcademicResultDetails(AcademicResultModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student details fetched", data: { StudentList: task } });
    });
};