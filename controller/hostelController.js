'use strict';

var HostelRoomTask = require('../model/HostelRoomModel/hostelRoomModel');
var HostelBedTask = require('../model/HostelBedModel/hostelBedModel');
var RoomAllocTask = require('../model/RoomAllocationModel/roomAllocationModel');
var RoomTransferTask = require('../model/HostelRoomTransferModel/hostelRoomTransferModel');
var HostelAttandanceTask = require('../model/HostelAttendanceModel/hostelAttendanceModel');
var HostelVisitorTask = require('../model/HostelVisitor/hostelVisitor');
var HostelExpensesTask = require('../model/HostelExpensesModel/hostelExpensesModel');
var HostelLossesTask = require('../model/HostelLossesModel/hostelLossesModel');
var HostelLeaveTask = require('../model/HostelLeaveModel/hostelLeaveModel');
var HostelOutPassTask = require('../model/HostelOutPassModel/hostelOutPassModel');
var HostelAcceptOutPassTask = require('../model/HostelAcceptOutpass/hostelAcceptOutpass');

// -------------------------------------- Hostel Room  ----------------------------
exports.getHostelRoom = function (req, res) {
    HostelRoomTask.getHostelRoomDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "HostelRoom details fetched", data: { HostelRoom: task } });
    });
};

exports.saveHostelRoom = function (req, res) {
  
    var HostelRoomModel = new HostelRoomTask(req.body);

    HostelRoomTask.saveHostelRoomModel(HostelRoomModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateHostelRoom = function (req, res) {
  
    var HostelRoomModel = new HostelRoomTask(req.body);

    HostelRoomTask.updateHostelRoomModel(HostelRoomModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHostelRoom = function (req, res) {
   
    var HostelRoomModel = new HostelRoomTask(req.body);

    HostelRoomTask.deleteHostelRoomModel(HostelRoomModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------------- Hostel Bed ----------------
exports.getFloorNo = function (req, res) {
    var HostelBedModel = new HostelBedTask(req.body);

    HostelBedTask.getFloorNoDetails(HostelBedModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Floor  details fetched", data: { Floors: task } });
    });
};

exports.getRoomNo = function (req, res) {
    var HostelBedModel = new HostelBedTask(req.body);

    HostelBedTask.getRoomNoDetails(HostelBedModel, req.query.id, req.query.FloorNo, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Room details fetched", data: { Rooms: task } });
    });
};

exports.getHostelBed = function (req, res) {
    HostelBedTask.getHostelBedDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Bed details fetched", data: { HostelBed: task } });
    });
};

exports.saveHostelBed = function (req, res) {
  
    var HostelBedModel = new HostelBedTask(req.body);

    HostelBedTask.saveHostelBedModel(HostelBedModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateHostelBed = function (req, res) {
  
    var HostelBedModel = new HostelBedTask(req.body);

    HostelBedTask.updateHostelBedModel(HostelBedModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHostelBed = function (req, res) {
   
    var HostelBedModel = new HostelBedTask(req.body);

    HostelBedTask.deleteHostelBedModel(HostelBedModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};


// ---------------------------- Room Allocation --------------------------------
exports.getStudentForRoomAlloc = function (req, res) {
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.getStudentForRoomAllocDetails(RoomAllocModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.Year, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.getRoomNoByHostel = function (req, res) {
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.getRoomNoByHostelDetails(RoomAllocModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Room details fetched", data: { Rooms: task } });
    });
};

exports.getBedNoByHostel = function (req, res) {
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.getBedNoByHostelDetails(RoomAllocModel, req.query.id,req.query.RoomNo, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Bed details fetched", data: { Beds: task } });
    });
};

exports.getStudentForRoomAllocUpdate = function (req, res) {
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.getStudentForRoomAllocUpdateDetails(RoomAllocModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.Year, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.getBedNoByHostelUpdate = function (req, res) {
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.getBedNoByHostelUpdateDetails(RoomAllocModel, req.query.id,req.query.RoomNo, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Bed details fetched", data: { Beds: task } });
    });
};

exports.SaveRoomAllocation = function (req, res) {
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.SaveRoomAllocationModel(RoomAllocModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getRoomAllocation = function (req, res) {
    RoomAllocTask.getRoomAllocationDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Bed details fetched", data: { RoomAllocation: task } });
    });
};

exports.updateRoomAllocation = function (req, res) {
  
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.updateRoomAllocationModel(RoomAllocModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteRoomAllocation = function (req, res) {
   
    var RoomAllocModel = new RoomAllocTask(req.body);

    RoomAllocTask.deleteRoomAllocationModel(RoomAllocModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ----------------------------------------------- Room Transfer ----------------------


exports.getStudentForRoomTransfer = function (req, res) {
    var RoomTransferModel = new RoomTransferTask(req.body);

    RoomTransferTask.getStudentForRoomTransferDetails(RoomTransferModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.Year, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.saveRoomTransfer = function (req, res) {
    var RoomTransferModel = new RoomTransferTask(req.body);

    RoomTransferTask.saveRoomTransferModel(RoomTransferModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

// ----------------------------------------------- Hostel Attendance ----------------------


exports.getStudentsOfHostel = function (req, res) {
    var HostelAttandanceModel = new HostelAttandanceTask(req.body);

    HostelAttandanceTask.getStudentsOfHostelDetails(HostelAttandanceModel, req.query.id, req.query.HostelId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.getStudentsOfHostelAtt = function (req, res) {
    var HostelAttandanceModel = new HostelAttandanceTask(req.body);

    HostelAttandanceTask.getStudentsOfHostelAttDetails(HostelAttandanceModel, req.query.id, req.query.HostelId,req.query.AttendanceDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.saveHostelAttendance = function (req, res) {
    var HostelAttandanceModel = new HostelAttandanceTask(req.body);

    HostelAttandanceTask.saveHostelAttendanceModel(HostelAttandanceModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getSavedHostelAttend = function (req, res) {
    var HostelAttandanceModel = new HostelAttandanceTask(req.body);

    HostelAttandanceTask.getSavedHostelAttendDetails(HostelAttandanceModel,req.query.id, req.query.HostelId,req.query.AttendanceDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Attendance fetched", data: { StudentList: task } });
    });
};

exports.updateHostelAttendance = function (req, res) {
   
    var HostelAttandanceModel = new HostelAttandanceTask(req.body);

    HostelAttandanceTask.updateHostelAttendanceModel(HostelAttandanceModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.getHostelAttendance = function (req, res) {
    var HostelAttandanceModel = new HostelAttandanceTask(req.body);

    HostelAttandanceTask.getHostelAttendanceDetails(HostelAttandanceModel, req.query.id,req.query.AttendanceBy,req.query.Year,req.query.Month,req.query.AttendanceDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Attendance details fetched", data: { StudentList: task } });
    });
};

// ----------------------------------------------- Hostel Visitors ----------------------


exports.getHostelStudents = function (req, res) {
    var HostelVisitorModel = new HostelVisitorTask(req.body);

    HostelVisitorTask.getHostelStudentsDetails(HostelVisitorModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Whome To Meet details fetched", data: { StudentList: task } });
    });
};

exports.saveHostelVisitors = function (req, res) {
    var HostelVisitorModel = new HostelVisitorTask(req.body);

    HostelVisitorTask.saveHostelVisitorsModel(HostelVisitorModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getVisitorData = function (req, res) {
    HostelVisitorTask.getVisitorDataDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Visitor details fetched", data: { VisitorList: task } });
    });
};

exports.updateHostelVisitors = function (req, res) {
  
    var HostelVisitorModel = new HostelVisitorTask(req.body);

    HostelVisitorTask.updateHostelVisitorsModel(HostelVisitorModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHostelVisitors = function (req, res) {
   
    var HostelVisitorModel = new HostelVisitorTask(req.body);

    HostelVisitorTask.deleteHostelVisitorsModel(HostelVisitorModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------- Hostel Expenses ------------------------------------
exports.saveHostelExpenses = function (req, res) {
    var HostelExpensesModel = new HostelExpensesTask(req.body);

    HostelExpensesTask.saveHostelExpensesModel(HostelExpensesModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getHostelExpense = function (req, res) {
    HostelExpensesTask.getHostelExpenseDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Expense details fetched", data: { ExpensesList: task } });
    });
};

exports.updateHostelExpenses = function (req, res) {
  
    var HostelExpensesModel = new HostelExpensesTask(req.body);

    HostelExpensesTask.updateHostelExpensesModel(HostelExpensesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHostelExpenses = function (req, res) {
   
    var HostelExpensesModel = new HostelExpensesTask(req.body);

    HostelExpensesTask.deleteHostelExpensesModel(HostelExpensesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------- Hostel Losses ------------------------------------
exports.saveHostelLosses = function (req, res) {
    var HostelLossesModel = new HostelLossesTask(req.body);

    HostelLossesTask.saveHostelLossesModel(HostelLossesModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getHostelLosses = function (req, res) {
    HostelLossesTask.getHostelLossesDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "HostelLosses details fetched", data: { HostelLosses: task } });
    });
};

exports.getHostelStudentsLosses = function (req, res) {
    var HostelLossesModel = new HostelLossesTask(req.body);

    HostelLossesTask.getHostelStudentsLossesDetails(HostelLossesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Stud Loss details fetched", data: { StudentList: task } });
    });
};


exports.updateHostelLosses = function (req, res) {
  
    var HostelLossesModel = new HostelLossesTask(req.body);

    HostelLossesTask.updateHostelLossesModel(HostelLossesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHostelLosses = function (req, res) {
   
    var HostelLossesModel = new HostelLossesTask(req.body);

    HostelLossesTask.deleteHostelLossesModel(HostelLossesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ----------------------------------------------- Hostel Leaving ----------------------


exports.getStudentForLeave = function (req, res) {
    var HostelLeaveModel = new HostelLeaveTask(req.body);

    HostelLeaveTask.getStudentForLeaveDetails(HostelLeaveModel, req.query.id, req.query.HostelId,req.query.HostelRoomId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Alloc details fetched", data: { StudentList: task } });
    });
};

exports.saveHostelLeaving = function (req, res) {
    var HostelLeaveModel = new HostelLeaveTask(req.body);

    HostelLeaveTask.saveHostelLeavingModel(HostelLeaveModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

// ----------------------------------------------- Hostel OutPass ----------------------


exports.getStudentForOutPass = function (req, res) {
    var HostelOutPassModel = new HostelOutPassTask(req.body);

    HostelOutPassTask.getStudentForOutPassDetails(HostelOutPassModel, req.query.id,req.query.HostelRoom_Id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Alloc details fetched", data: { StudentList: task } });
    });
};

exports.sendOutPassRequest = function (req, res) {
    var HostelOutPassModel = new HostelOutPassTask(req.body);

    HostelOutPassTask.sendOutPassRequestModel(HostelOutPassModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getHostelOutPass = function (req, res) {
    HostelOutPassTask.getHostelOutPassDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel OutPass details fetched", data: { HostelOutPassList: task } });
    });
};


// ------------------------- Hostel Accept Outpass -------------------

exports.getHostelAcceptOutPass = function (req, res) {
    HostelAcceptOutPassTask.getHostelAcceptOutPassDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel OutPass details fetched", data: { HostelOutPassList: task } });
    });
};


exports.updateOutPassRequest = function (req, res) {
  
    var HostelAcceptOutPassModel = new HostelAcceptOutPassTask(req.body);

    HostelAcceptOutPassTask.updateOutPassRequestModel(HostelAcceptOutPassModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};