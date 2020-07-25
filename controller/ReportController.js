'use strict';
var StudentReportTask = require('../model/StudentReportModel/studentReportModel');
var HostelReportTask = require('../model/HostelReportModel/hostelReportModel');
var LabReportTask = require('../model/LabReportModel/labReportModel');
var FronDeskReportTask = require('../model/FrontDeskReport/frontDeskReport');
var EmpReportTask = require('../model/EmpReport/EmpReport');
var LibraryReportTask = require('../model/LibraryReport/LibraryReport');
var LibraryInvoicePaymentReportTask = require('../model/LibraryInvoicePaymentReport/LibraryInvoicePaymentReport');
var BookBindingReportTask = require('../model/BookBindingReport/BookBindingReport');
var EventReportsTask = require('../model/EventReports/EventReports');
var StoreReportsTask = require('../model/StoreReports/StoreReports');

// ----------------------- Student Report --------------------
exports.getStudAdmissionReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudAdmissionReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Admission Details fetched", data: { AdmissionDetailsList: task } });
    });
};

exports.getStudCategoryReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudCategoryReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.CategoryId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Stud Category Details fetched", data: { CategoryDetailsList: task } });
    });
};

exports.getStudBirthReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudBirthReport(StudentReportModel, req.query.id, req.query.BirthYear, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Stud Birth Details fetched", data: { BirthDetailsList: task } });
    });
};

exports.getStudBranchReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudBranchReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Branch Details fetched", data: { BranchDetailsList: task } });
    });
};

exports.getStudAttendanceReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudAttendanceReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.AttDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Attendance Details fetched", data: { AttendanceDetailsList: task } });
    });
};

exports.getSemStrengthReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getSemStrengthReport(StudentReportModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SemStrengt Details fetched", data: { SemStrengthList: task } });
    });
};

exports.getStudBatchReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudBatchReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.BatchId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Stud Batch Details fetched", data: { BatchDetailsList: task } });
    });
};

exports.getStudDetailsReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudDetailsReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.StudentId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Details fetched", data: { StudDetailsList: task } });
    });
};

exports.getFeeDetailsReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getFeeDetailsReport(StudentReportModel, req.query.id,  function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Fee Details fetched", data: { FeeDetailsList: task } });
    });
};

exports.getFeeDetailsByBranch = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getFeeDetailsByBranchReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Fee By Branch Details fetched", data: { FeeYearDetailsList: task } });
    });
};

exports.getFeeDetailsByYear = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getFeeDetailsByYearReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Fee Details fetched", data: { StudFeeDetailsList: task } });
    });
};

exports.getFeeDetailsByStudent = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getFeeDetailsByStudentReport(StudentReportModel, req.query.id,  function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Fee Details fetched", data: { StudFeeHeadDetailsList: task } });
    });
};

exports.getStudICartReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudICartReport(StudentReportModel, req.query.id,  function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student I-Card Details fetched", data: { StudICardList: task } });
    });
};

exports.getStudLeavingReport = function (req, res) {
    var StudentReportModel = new StudentReportTask(req.body);

    StudentReportTask.getStudLeavingReport(StudentReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Stud Leaving Details fetched", data: { LeavingDetailsList: task } });
    });
};

// ------------------- Hostel Report --------------------------
exports.getHostelRoomReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getHostelRoomReport(HostelReportModel, req.query.id,  function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Room Details fetched", data: { HostelRoomDetailsList: task } });
    });
};

exports.getRoomAllocationReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getRoomAllocationReport(HostelReportModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.HostelId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Room Alloc Details fetched", data: { RoomAllocDetailsList: task } });
    });
};

exports.getStudRoomAllocationReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getStudRoomAllocationReport(HostelReportModel, req.query.id, req.query.HostelId,req.query.RoomNo,req.query.StudentId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Room Alloc Details fetched", data: { StudRoomAllocDetailsList: task } });
    });
};

exports.getRoomTransferReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getRoomTransferReport(HostelReportModel, req.query.id,req.query.YearId,req.query.HostelId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Room Transfer Details fetched", data: { RoomTransferDetailsList: task } });
    });
};

exports.getHostelVisitorReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getHostelVisitorReport(HostelReportModel, req.query.id, req.query.FromDate,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Visitor Details fetched", data: { HostelVisitorDetailsList: task } });
    });
};

exports.getHostelExpenseReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getHostelExpenseReport(HostelReportModel, req.query.id, req.query.FromDate,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Expense Details fetched", data: { HostelExpenseDetailsList: task } });
    });
};

exports.getHostelOutpassReport = function (req, res) {
    var HostelReportModel = new HostelReportTask(req.body);

    HostelReportTask.getHostelOutpassReport(HostelReportModel, req.query.id, req.query.FromDate,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel Outpass Details fetched", data: { HostelOutpassDetailsList: task } });
    });
};

// ------------------ Lab Report --------------------------------

exports.getLabLossReport = function (req, res) {
    var LabReportModel = new LabReportTask(req.body);

    LabReportTask.getLabLossReport(LabReportModel, req.query.id, req.query.FromDate,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Lab Loss Details fetched", data: { LabLossDetailsList: task } });
    });
};

exports.getLabRequisitionReport = function (req, res) {
    var LabReportModel = new LabReportTask(req.body);

    LabReportTask.getLabRequisitionReport(LabReportModel, req.query.id, req.query.FromDate,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Lab Requisition Details fetched", data: { LabRequisitionDetailsList: task } });
    });
};

// ------------------ Front Desk Report --------------------------------

exports.getInwardLetterReport = function (req, res) {
    var FronDeskReportModel = new FronDeskReportTask(req.body);

    FronDeskReportTask.getInwardLetterReport(FronDeskReportModel, req.query.id,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Inward Letter Details fetched", data: { InwardLetterDetailsList: task } });
    });
};

exports.getOutwardLetterReport = function (req, res) {
    var FronDeskReportModel = new FronDeskReportTask(req.body);

    FronDeskReportTask.getOutwardLetterReport(FronDeskReportModel, req.query.id,req.query.ToDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Outward Letter Details fetched", data: { OutwardLetterDetailsList: task } });
    });
};



// ------------Emp Report --------------------------
exports.getEmpConsolidatedReport = function (req, res) {
    EmpReportTask.getEmpConsolidatedReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Consolidated Report fetched", data: { EmpConsolidatedReport: task } });
    });
};
exports.getEmployeeAttendanceReport = function (req, res) {
    EmpReportTask.getEmployeeAttendanceReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Attendance Report fetched", data: { EmployeeAttendanceReport: task } });
    });
};
exports.getEmployeeBirthdayReport = function (req, res) {
    EmpReportTask.getEmployeeBirthdayReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Birthday Report fetched", data: { EmployeeBirthdayReport: task } });
    });
};
exports.getGradeWiseEmployeeReport = function (req, res) {
    EmpReportTask.getGradeWiseEmployeeReport(req.query.GradeId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Grade Wise Employee Report fetched", data: { GradeWiseEmployeeReport: task } });
    });
};
exports.getEmployeeLeaveReport = function (req, res) {
    EmpReportTask.getEmployeeLeaveReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Leave Report fetched", data: { EmployeeLeaveReport: task } });
    });
};
exports.getEmployeeWiseUserIdAndPasswordReport = function (req, res) {
    EmpReportTask.getEmployeeWiseUserIdAndPasswordReport(req.query.Employee, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Wise UserId And Password Report fetched", data: { EmployeeWiseUserIdAndPasswordReport: task } });
    });
};


// ------------Library Report --------------------------
exports.getLibraryInvoiceReport = function (req, res) {
    LibraryReportTask.getLibraryInvoiceReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Invoice Report fetched", data: { LibraryInvoiceReport: task } });
    });
};


exports.getLibraryInvoiceByVendor = function (req, res) {
    LibraryReportTask.getLibraryInvoiceByVendor(req.query.VendorId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Invoice fetched", data: { LibraryInvoiceByVendor: task } });
    });
};

// ------------Library Invoice Payment Report --------------------------
exports.getLibraryInvoicePaymentReport = function (req, res) {
    LibraryInvoicePaymentReportTask.getLibraryInvoicePaymentReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Invoice Payment Report fetched", data: { LibraryInvoicePaymentReport: task } });
    });
};



// --------------------Library Details Payment Report -----------------------------

exports.getBookBindingReport = function (req, res) {
    BookBindingReportTask.getBookBindingReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Binding Report fetched", data: { BookBindingReport: task } });
    });
};
exports.getCourseWiseBookIssueReport = function (req, res) {
    BookBindingReportTask.getCourseWiseBookIssueReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Course Wise Book Issue Report fetched", data: { CourseWiseBookIssueReport: task } });
    });
};
exports.getIssuedBooksFromLibraryReport = function (req, res) {
    BookBindingReportTask.getIssuedBooksFromLibraryReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Books From Library Report fetched", data: { IssuedBooksFromLibraryReport: task } });
    });
};
exports.getBookCategoryReport = function (req, res) {
    BookBindingReportTask.getBookCategoryReport(req.query.BookCategoryId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Category Report fetched", data: { BookCategoryList: task } });
    });
};
exports.getStudentFineReport = function (req, res) {
    BookBindingReportTask.getStudentFineReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Fine Report fetched", data: { StudentFineReportList: task } });
    });
};
exports.getAvailableBooksFromLibraryReport = function (req, res) {
    BookBindingReportTask.getAvailableBooksFromLibraryReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Available Books From Library Report fetched", data: { AvailableBooksFromLibrary: task } });
    });
};

// ----------------------- Event Report --------------------
exports.getDailyNotesReport = function (req, res) {

    EventReportsTask.getDailyNotesReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Daily Notes Report fetched", data: { DailyNotesReportList: task } });
    });
};
exports.EventDetailsReport = function (req, res) {

    EventReportsTask.EventDetailsReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Details Report fetched", data: { EventDetailsReportList: task } });
    });
};
exports.getEventParticitantReport = function (req, res) {

    EventReportsTask.getEventParticitantReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Particitant Report fetched", data: { EventDetailsReportList: task } });
    });
};
exports.getAcivityPlannerReport = function (req, res) {

    EventReportsTask.getAcivityPlannerReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Acivity Planner Report fetched", data: { EventDetailsReportList: task } });
    });
};
exports.getAllActivityDate = function (req, res) {

    EventReportsTask.getAllActivityDate(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Date List fetched", data: { ActivityDateList: task } });
    });
};
exports.getStudentAcivityAttendanceReport = function (req, res) {

    EventReportsTask.getStudentAcivityAttendanceReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Acivity Attendance Report fetched", data: { EventDetailsReportList: task } });
    });
};
exports.getEventDateList = function (req, res) {

    EventReportsTask.getEventDateList(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Date List fetched", data: { EventDateList: task } });
    });
};

exports.getEventByDateReport = function (req, res) {
    EventReportsTask.getEventByDateReport(req.query.EventDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Events By Event Date Fetched", data: { EventsByEventDate: task } });
    });
}
exports.getWinnerReport = function (req, res) {
    EventReportsTask.getWinnerReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Winner Report Fetched", data: { WinnerReport: task } });
    });
}

// ----------------------- Event Report --------------------
exports.getRequisitionReport = function (req, res) {

    StoreReportsTask.getRequisitionReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Requisition Report fetched", data: { RequisitionReport: task } });
    });
};
exports.getExpiredItemReport = function (req, res) {

    StoreReportsTask.getExpiredItemReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Expired Item Report fetched", data: { ExpiredItemReport: task } });
    });
};
exports.getInvoiceBetweenDateReport = function (req, res) {

    StoreReportsTask.getInvoiceBetweenDateReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Invoice Between Date Report fetched", data: { InvoiceBetweenDateReport: task } });
    });
};
exports.getPaymentforVendorReport = function (req, res) {

    StoreReportsTask.getPaymentforVendorReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Payment for Vendor Report fetched", data: { InvoiceBetweenDateReport: task } });
    });
};
exports.getQuotationComparisonReport = function (req, res) {

    StoreReportsTask.getQuotationComparisonReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Quotation Comparison Report fetched", data: { InvoiceBetweenDateReport: task } });
    });
};
exports.getQuotationNoByGroupName = function (req, res) {

    StoreReportsTask.getQuotationNoByGroupName(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Quotation No By GroupName fetched", data: { QuotationNoByGroupName: task } });
    });
};
exports.getQuotationReport = function (req, res) {

    StoreReportsTask.getQuotationReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Quotation Report fetched", data: { QuotationReport: task } });
    });
};
exports.getReorderLevelReport = function (req, res) {
    StoreReportsTask.getReorderLevelReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Reorder Level Report fetched", data: { ReorderLevelReport: task } });
    });
};
exports.getTotalStockIssueReport = function (req, res) {
    StoreReportsTask.getTotalStockIssueReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Total Stock Issue Report fetched", data: { TotalStockIssueReport: task } });
    });
};
exports.getCurrentStockReport = function (req, res) {
    StoreReportsTask.getCurrentStockReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Current Stock Report fetched", data: { CurrentStockReport: task } });
    });
};
exports.getItemDetailsReport = function (req, res) {
    StoreReportsTask.getItemDetailsReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Item Details Report fetched", data: { ItemDetailsReport: task } });
    });
};
exports.getVendorDetailsReport = function (req, res) {
    StoreReportsTask.getVendorDetailsReport(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Vendor Details Report fetched", data: { VendorDetailsReport: task } });
    });
};
