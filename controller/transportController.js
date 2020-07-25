'use strict';
var BusPickupPointTask = require('../model/TransportModel/busPickupPointModel');
var BusInformationTask = require('../model/TransportModel/busInformationModel');
var BusFuelTask = require('../model/TransportModel/busFuelMaintenanceModel');
var BusRouteInfoTask = require('../model/TransportModel/busRouteInfo');
var BusDriverInfoTask = require('../model/TransportModel/busDriverInfoModel');
var BusEnrollInfoTask = require('../model/TransportModel/BusEnrollModel');



// ----------Bus Pickup Point Controller--------------

exports.getBusPickupPoint = function (req, res) {
    BusPickupPointTask.getBusPickupPoint(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bus Pickup Points fetched successfully", data: { BusPickupPoints: task } });
    });
};


exports.saveBusPickupPoint = function (req, res) {

    var busPickupPointModel = new BusPickupPointTask(req.body);

    BusPickupPointTask.saveBusPickupPoints(busPickupPointModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateBusPickupPoint = function (req, res) {
    if (!req.body.Route_Station) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var busPickupPointModel = new BusPickupPointTask(req.body);

    BusPickupPointTask.UpdateBusPickupPoint(busPickupPointModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.DeleteBusPickupPoint = function (req, res) {


    var busPickupPointModel = new BusPickupPointTask(req.body);

    BusPickupPointTask.DeleteBusPickupPoint(busPickupPointModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ----------BusInfo Controller--------------

exports.getBusInformation = function (req, res) {
    BusInformationTask.getBusInformation(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bus Info fetched successfully", data: { BusInformation: task } });
    });
};




exports.saveBusInformation = function (req, res) {

    var busInformationModel = new BusInformationTask(req.body);

    BusInformationTask.saveBusInformation(busInformationModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateBusInformation = function (req, res) {

    if (!req.body.Bus_NO) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var busInformationModel = new BusInformationTask(req.body);


    BusInformationTask.UpdateBusInfo(busInformationModel, req.query.id, function (err, task) {

        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.DeleteBusInformation = function (req, res) {


    var busInformationModel = new BusInformationTask(req.body);

    BusInformationTask.DeleteBusInformation(busInformationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};


//----------BusFuelMaintenance Controller--------------

exports.getBusFuel = function (req, res) {
    BusFuelTask.getBusFuel(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "BusFuelMaintenance fetched successfully", data: { BusFuel: task } });
    });
};


exports.saveBusFuel = function (req, res) {

    var busFuelModel = new BusFuelTask(req.body);

    BusFuelTask.saveBusFuel(busFuelModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateBusFuel = function (req, res) {

    if (!req.body.BusNo) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var busFuelModel = new BusFuelTask(req.body);

    BusFuelTask.UpdateBusFuel(busFuelModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.DeleteBusFuel = function (req, res) {


    var busFuelModel = new BusFuelTask(req.body);

    BusFuelTask.DeleteBusFuel(busFuelModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

//----------BusRouteInfo Controller--------------
exports.saveBusRouteInfo = function (req, res) {

    var BusRouteInfoModel = new BusRouteInfoTask(req.body);

    BusRouteInfoTask.saveBusRouteInfo(BusRouteInfoModel, function (err, task) {

        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.GetRoutebyBusNo = function (req, res) {
    var BusRouteInfoModel = new BusRouteInfoTask(req.body);
    
    BusRouteInfoTask.GetRoutebyBusNo(BusRouteInfoModel, req.query.id, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else
            res.json({ status: true, message: "Bus Routeof Vehical fetched successfully", data: { RouteInfo: task } });
    });
};

exports.getBusRouteInfo = function (req, res) {
    BusRouteInfoTask.getBusRouteInfo(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bus Route Information fetched successfully", data: { BusRouteInfo: task } });
    });
};

exports.getBusRouteInfoDetail = function (req, res) {
    var BusRouteInfoModel = new BusRouteInfoTask(req.body);

    BusRouteInfoTask.getBusRouteInfoTransDetails(BusRouteInfoModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
        res.json({ status: true, message: "Bus Route Trans details fetched", data: { BusRouteDetail: task } });
    });
};

exports.getBusRouteDetail = function (req, res) {
    var BusRouteInfoModel = new BusRouteInfoTask(req.body);

    BusRouteInfoTask.getBusRouteDetails(BusRouteInfoModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
        res.json({ status: true, message: "Bus Route details fetched", data: { BusRouteDetail: task } });
    });
};

exports.updateBusRouteInfo = function (req, res) {

    var BusRouteInfoModel = new BusRouteInfoTask(req.body);

    BusRouteInfoTask.updateBusRouteInfo(BusRouteInfoModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteBusRouteInfo = function (req, res) {

    var BusRouteInfoModel = new BusRouteInfoTask(req.body);

    BusRouteInfoTask.deleteBusRouteInfo(BusRouteInfoModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

//------------BusDriverInfo---------------------//

exports.getBusDriverInfo = function (req, res) {
    BusDriverInfoTask.getBusDriverInfo(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bus Driver fetched successfully", data: { BusDriverInfo: task } });
    });
};


exports.saveBusDriverInfo = function (req, res) {

    var busDriverInfoModel = new BusDriverInfoTask(req.body);

    BusDriverInfoTask.saveBusDriverInfo(busDriverInfoModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateBusDriverInfo = function (req, res) {

    if (!req.body.DriverName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var busDriverInfoModel = new BusDriverInfoTask(req.body);


    BusDriverInfoTask.UpdateBusDriverInfo(busDriverInfoModel, req.query.id, function (err, task) {

        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.DeleteBusDriverInfo = function (req, res) {


    var busDriverInfoModel = new BusDriverInfoTask(req.body);

    BusDriverInfoTask.DeleteBusDriverInfo(busDriverInfoModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};


//------------BusEnrollInfo---------------------//

exports.getBusEnrollInfo = function (req, res) {
    BusEnrollInfoTask.getBusEnrollInfo(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bus Enroll Info fetched successfully", data: { BusEnrollInfo: task } });
    });
};

exports.getBusEnrollInfoByEnrollId = function (req, res) {
    
        var busEnrollInfoModel = new BusEnrollInfoTask(req.body);
    
        BusEnrollInfoTask.getBusEnrollInfoByEnrollId(busEnrollInfoModel, req.query.id, function (err, task) {
            if (err) {
                res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
            }
            else {
                res.json({ status: true, message: "Bus Enroll fetched  successfully", data: { BusEnrollInfo: task }  });
            }
        });
    };


exports.saveBusEnrollInfo = function (req, res) {

    var busEnrollInfoModel = new BusEnrollInfoTask(req.body);

    BusEnrollInfoTask.saveBusEnrollInfo(busEnrollInfoModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateBusEnrollInfo = function (req, res) {

    if (!req.body.Bus_Id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var busEnrollInfoModel = new BusEnrollInfoTask(req.body);


    BusEnrollInfoTask.UpdateBusEnrollInfo(busEnrollInfoModel, req.query.id, function (err, task) {

        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.DeleteBusEnrollInfo = function (req, res) {


    var busEnrollInfoModel = new BusEnrollInfoTask(req.body);

    BusEnrollInfoTask.DeleteBusEnrollInfo(busEnrollInfoModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};
