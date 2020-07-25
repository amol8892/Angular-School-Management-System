'use strict';
var fs = require("fs");
var EmployeeDetailsModuleTask = require('../model/EmployeeDetails/EmployeeDetails');
var EmployeesAttandanceTask = require('../model/EmployeesAttandance/EmployeesAttandance');
var EmployeeSalaryTask = require('../model/EmployeeSalary/EmployeeSalary');
var EmployeePromotionTask = require('../model/EmployeePromotion/EmployeePromotion');
var EmployeeLeaveApplicationTask = require('../model/EmployeeLeaveApplication/EmployeeLeaveApplication');
var EmployeeLeaveSanctionTask = require('../model/EmployeeLeaveSanction/EmployeeLeaveSanction');
var EmployeeEmployeeResignationTask = require('../model/EmployeeResignation/EmployeeResignation');
var EmployeeEmployeeResignationSanctionTask = require('../model/EmployeeResignationSanction/EmployeeResignationSanction');

// EmployeeDetails CRUD


exports.getMultipleDataOfEmployee = function (req, res) {
    
    EmployeeDetailsModuleTask.getMultipleDataOfEmployee(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee details fetched", data: { EmpDetails: task } });
    });
};
exports.GetCityByDistrict = function (req, res) {
    
    var EmployeeDetailsModel = new EmployeeDetailsModuleTask(req.body);
    EmployeeDetailsModuleTask.GetCityByDistrict(EmployeeDetailsModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "City details fetched", data: { City: task } });
    });
};

exports.GetAllowanceDeduction = function (req, res) {
    
    var EmployeeDetailsModel = new EmployeeDetailsModuleTask(req.body);
    EmployeeDetailsModuleTask.GetAllowanceDeduction(EmployeeDetailsModel, function (err, task) {
    
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee details fetched", data: { deductionAllowanceData: task } });
    });
};
exports.getAllEmployeeDetails = function (req, res) {
    
    var EmployeeDetailsModel = new EmployeeDetailsModuleTask(req.body);
    EmployeeDetailsModuleTask.getAllEmployeeDetails(EmployeeDetailsModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee details fetched", data: { Employee: task } });
    });
};
exports.GetAllUsers = function (req, res) {
    
    var EmployeeDetailsModel = new EmployeeDetailsModuleTask(req.body);
    EmployeeDetailsModuleTask.GetAllUsers(EmployeeDetailsModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "User details fetched", data: { User: task } });
    });
};
exports.CheckEmployeeUserName = function (req, res) {
    
    EmployeeDetailsModuleTask.CheckEmployeeUserName(req.query.Username, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Username Check fetched", data: { Username: task } });
    });
};

exports.SaveEmployeeDetails=function(req,res){
    
    if(!req.body.FirstName)
    {       
        res.send({Status:false,error : {message: 'fields are empty', code: "401"},data:{} });
        return;
    }
    var EmployeeDetailsModel = new EmployeeDetailsModuleTask(req.body);
    EmployeeDetailsModuleTask.saveEmployeeDetailsModel(EmployeeDetailsModel, function (err, task) {
            if (err) {
                
                res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
            }
            else {
                res.json({ status: true, message: "Employee Details Saved successfully", error: {} });
            }
        });
}
exports.getEmployeeDetails=function(req,res){
    
    EmployeeDetailsModuleTask.getEmployeeDetails(req, function (err, task) {
       
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Details Fetched", data: { EmployeeDetails: task } });
    });
}

exports.getCertificates=function(req,res){
    
    EmployeeDetailsModuleTask.getCertificates(req, function (err, task) {
       
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Document Types Fetched", data: { documentTypeList: task } });
    });
}
exports.GetHolidayType=function(req,res){
    
    EmployeeDetailsModuleTask.GetHolidayType(req, function (err, task) {
       
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Holidays Fetched", data: { HolidayList: task } });
    });
}

exports.updateEmployeeDetails = function (req, res) {
    if (!req.body.FirstName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EmployeeDetailsModel = new EmployeeDetailsModuleTask(req.body);
EmployeeDetailsModuleTask.updateEmployeeDetailsModel(EmployeeDetailsModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Details Updated successfully", error: {} });
    });
};
exports.deleteEmployeeDetails = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    
    var EmployeeDetailsModel = new EmployeesAttandanceTask(req.body);
    EmployeesAttandanceTask.deleteEmployeeDetails(EmployeeDetailsModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Details Deleted successfully", error: {} });
    });
};



// EmployeeAttandance CRUD

exports.GetAllEmployees=function(req,res){
    
    EmployeesAttandanceTask.GetAllEmployees(req, function (err, task) {
       
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Fetched", data: { Employees: task } });
    });
}
exports.GetEmployeesForAttandanceDetails = function (req, res) {
    
    var EmployeesAttandanceModel = new EmployeesAttandanceTask(req.query);

    EmployeesAttandanceTask.GetEmployeesForAttandanceDetails(EmployeesAttandanceModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Attandance details fetched", data: { EmployeesAttandance: task } });
    });
};
exports.GetEmployeesSavedAttandance = function (req, res) {
    
    var EmployeesAttandanceModel = new EmployeesAttandanceTask(req.query);

    EmployeesAttandanceTask.GetEmployeesSavedAttandance(EmployeesAttandanceModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Attandance details fetched", data: { SavedEmployeesAttandance: task } });
    });
};
exports.SearchAttendance = function (req, res) {
    EmployeesAttandanceTask.SearchAttendance(req.query, function (err, task) {
        
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Attandance details fetched", data: { Attendance: task } });
    });
};
exports.GetYearList = function (req, res) {
    
    EmployeesAttandanceTask.GetYearList(function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Attandance details fetched", data: { YearList: task } });
    });
};

exports.SaveEmployeesAttandance = function (req, res) {

    if (!req.body.DepartmentId) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EmployeesAttandanceModel = new EmployeesAttandanceTask(req.body);

    EmployeesAttandanceTask.SaveEmployeesAttandance(EmployeesAttandanceModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employees Attandance has been Saved successfully", error: {} });
        }
    });
};

exports.UpdateEmployeesAttandance = function (req, res) {
    
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EmployeesAttandanceModel = new EmployeesAttandanceTask(req.body);
    EmployeesAttandanceTask.UpdateEmployeesAttandance(EmployeesAttandanceModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Details Updated successfully", error: {} });
    });
};

// EmployeeSalary CRUD


exports.generateSalary = function (req, res) {
    EmployeeSalaryTask.generateSalary(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Attandance details fetched", data: { Salary: task } });
    });
};
exports.saveSalaryDetails=function(req,res){
    
    if(!req.body.SalaryYear)
    {       
        res.send({Status:false,error : {message: 'fields are empty', code: "401"},data:{} });
        return;
    }
    
    EmployeeSalaryTask.saveSalaryDetails(req.body, function (err, task) {
       
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Salary Details Saved successfully", error: {} });
        }
    });
}

// EmployeePromotion CRUD


exports.GetAllEmployeesByEmployeeType = function (req, res) {
    EmployeePromotionTask.GetAllEmployeesByEmployeeType(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees details fetched", data: { Employees: task } });
    });
};

exports.GetEmployeePromotionDetails = function (req, res) {
    EmployeePromotionTask.GetEmployeePromotionDetails(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Promotion details fetched", data: { EmployeePromotionDetails: task } });
    });
};
exports.savePromotionDetails=function(req,res){
    if(!req.body.Type)
    {       
        res.send({Status:false,error : {message: 'fields are empty', code: "401"},data:{} });
        return;
    }
    
    EmployeePromotionTask.savePromotionDetails(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Promotion Details Saved successfully", error: {} });
        }
    });
}
exports.getAllowanceDeductionDetails = function (req, res) {
    EmployeePromotionTask.getAllowanceDeductionDetails(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees details fetched", data: { Employees: task } });
    });
};
exports.updateEmployeePromotionDetails = function (req, res) {
    EmployeePromotionTask.updateEmployeePromotionDetails(req.body, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Promotion details Updated Successfully", data: { Employees: task } });
    });
};


// EmployeeLeaveApplication CRUD


exports.getHolidaysOfEmployees = function (req, res) {
    EmployeeLeaveApplicationTask.getHolidaysOfEmployees(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Holidays fetched", data: { EmployeeHolidayList: task } });
    });
};
exports.getHolidaysOfEmployeesCount = function (req, res) {
    EmployeeLeaveApplicationTask.getHolidaysOfEmployeesCount(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Holidays fetched", data: { EmployeeHolidayCount: task } });
    });
};

exports.getTotalLeave = function (req, res) {
    EmployeeLeaveApplicationTask.getTotalLeave(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees details fetched", data: { TotalLeave: task } });
    });
};
exports.getUpdateTotalBalanceLeaves = function (req, res) {
    EmployeeLeaveApplicationTask.getUpdateTotalBalanceLeaves(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees details fetched", data: { TotalLeave: task } });
    });
};

exports.getEmployeeLeaveApplication = function (req, res) {
    EmployeeLeaveApplicationTask.getEmployeeLeaveApplication(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees Promotion details fetched", data: { EmployeeLeaveApplication: task } });
    });
};
exports.saveEmployeeLeaveApplication=function(req,res){
    if(!req.body.DateOfApplication)
    {       
        res.send({Status:false,error : {message: 'fields are empty', code: "401"},data:{} });
        return;
    }
    EmployeeLeaveApplicationTask.saveEmployeeLeaveApplication(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Details Leave Application Saved successfully", error: {} });
        }
    });
}
exports.updateEmployeeLeaveApplication=function(req,res){
    EmployeeLeaveApplicationTask.updateEmployeeLeaveApplication(req.body, req.id, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Details Updated successfully", error: {} });
        }
    });
}


// EmployeeLeaveSanction CRUD


exports.getEmployeeLeaveApplicationForSanction = function (req, res) {
    EmployeeLeaveSanctionTask.getEmployeeLeaveApplicationForSanction(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees details fetched", data: { EmployeeLeaveApplication: task } });
    });
};
exports.getAllEmployeeLeaveApplicationForSanction = function (req, res) {
    EmployeeLeaveSanctionTask.getAllEmployeeLeaveApplicationForSanction(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employees details fetched", data: { EmployeeLeaveApplication: task } });
    });
};

exports.AcceptEmployeeLeaveSanction=function(req,res){
    EmployeeLeaveSanctionTask.AcceptEmployeeLeaveSanction(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Leave Granted", error: {} });
        }
    });
}
exports.RejectEmployeeLeaveSanction=function(req,res){
    EmployeeLeaveSanctionTask.RejectEmployeeLeaveSanction(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Leave Rejected", error: {} });
        }
    });
}
exports.updateLeaveApplicationAtSanction=function(req,res){
    EmployeeLeaveSanctionTask.updateLeaveApplicationAtSanction(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Leave Updated Successfully", error: {} });
        }
    });
}


// Epmloyee Resination Curd

exports.getDepartmentDesignationWiseUsers=function(req,res){
    EmployeeEmployeeResignationTask.getDepartmentDesignationWiseUsers(req.query, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Department Designation Wise Employee Fetched", data: { Users: task }  });
        }
    });
}
exports.checkAlreadyPendingResignation=function(req,res){
    EmployeeEmployeeResignationTask.checkAlreadyPendingResignation(req.query, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Pending Resignation Fetched", data: { PendingResignation: task }  });
        }
    });
}

exports.saveResignationDetails=function(req,res){
    EmployeeEmployeeResignationTask.saveResignationDetails(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Resignation Details Saved Successfully", error: {}  });
        }
    });
}
exports.getResignationDetails=function(req,res){
    EmployeeEmployeeResignationTask.getResignationDetails(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Resignation Details Fetched", data: { ResignationDetails : task}  });
        }
    });
}

exports.updateResignationDetails=function(req,res){
    EmployeeEmployeeResignationTask.updateResignationDetails(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Resignation Details Updated Successfully", error: { }  });
        }
    });
}


// Epmloyee Resignation Sanction Curd

exports.getEmployeeResignationApplicationForSanction=function(req,res){
    EmployeeEmployeeResignationSanctionTask.getEmployeeResignationApplicationForSanction(req.query, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Resignation Application For Sanction Fetched", data: { EmployeeResignationApplication: task }  });
        }
    });
}
exports.getAllEmployeeResignationApplicationForSanction=function(req,res){
    EmployeeEmployeeResignationSanctionTask.getAllEmployeeResignationApplicationForSanction(req.query, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Resignation Application For Sanction Fetched", data: { EmployeeResignationApplication: task }  });
        }
    });
}

exports.RejectEmployeeResignationSanction=function(req,res){
    EmployeeEmployeeResignationSanctionTask.RejectEmployeeResignationSanction(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Resignation Rejected", error: {}  });
        }
    });
}
exports.AcceptEmployeeResignationSanction=function(req,res){
    EmployeeEmployeeResignationSanctionTask.AcceptEmployeeResignationSanction(req.body, function (err, task) {
        if (err) {
            
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Resignation Accepted", error: {}  });
        }
    });
}