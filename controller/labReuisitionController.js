'use strict';
var LabRequiTask = require('../model/LabReuisitionModel/labReuisitionModel');
var LabLossTask = require('../model/LabLossModel/labLossModel');

exports.savelabReuisition = function (req, res) {
  
    var LabReuisitionModel = new LabRequiTask(req.body);

    LabRequiTask.savelabReuisitionModel(LabReuisitionModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};


exports.getlabReuisition = function (req, res) {
    LabRequiTask.getlabReuisitionDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "labReuisition details fetched", data: { LabRequiList: task } });
    });
};

exports.getlabReuisitionTrans = function (req, res) {
    var LabReuisitionModel = new LabRequiTask(req.body);

    LabRequiTask.getlabReuisitionTransDetails(LabReuisitionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "LabReuisition Trans details fetched", data: { LabRequiTransList : task } });
    });
};

exports.updateLabReuisition = function (req, res) {
   
    var LabReuisitionModel = new LabRequiTask(req.body);

    LabRequiTask.updateLabReuisitionModel(LabReuisitionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteLabReuisition = function (req, res) {
   
    var LabReuisitionModel = new LabRequiTask(req.body);

    LabRequiTask.deleteLabReuisitionModel(LabReuisitionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Lab Loss CRUD ----------------------------------------------------
exports.getLabLoss = function (req, res) {
    LabLossTask.getLabLossDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Lab Loss details fetched", data: { LabLossList: task } });
    });
};

exports.saveLabLoss = function (req, res) {
    
    var LabLossModel = new LabLossTask(req.body);

    LabLossTask.saveLabLossModel(LabLossModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateLabLoss = function (req, res) {
    var LabLossModel = new LabLossTask(req.body);

    LabLossTask.updateLabLossModel(LabLossModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteLabLoss = function (req, res) {
   
    var LabLossModel = new LabLossTask(req.body);

    LabLossTask.deleteLabLossModel(LabLossModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};
