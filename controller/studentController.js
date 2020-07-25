'use strict';
var StudentAdmissionTask = require('../model/StudentAdmissionModel/studentAdmissionModel');
var EditAdmissionTask = require('../model/EditAdmissionModel/editAdmissionModel');
var StudentRegstTask = require('../model/StudentRegistrationModel/studentRegistrationModel');
var CancelStudentTask = require('../model/CancelStudentAdmission/cancelStudentAdmission')
var StudentFeesTask = require('../model/StudentFees/studentFees')
var StudentReceiptTask = require('../model/StudentReceiptModel/studentReceiptModel')
var RollNoAllotmentTask = require('../model/RollNoAllotmentModel/rollNoAllotmentModel')
var ChangeRollNoTask = require('../model/ChangeRollNoModel/changeRollNoModel')
var StudentBatchTask = require('../model/StudentBatchModel/studentBatchModel')
var StudentEditBatchTask = require('../model/EditStudentBatchModel/editStudentBatchModel')
var PostingTTTask = require('../model/PostingTTModel/postingTTModel')
var PostingTTSearchTask = require('../model/PostingTTSearchModel/postingTTSearchModel')
var StudentUpgradeTask = require('../model/StudentUpgradeNew/studentUpgradeNew')
var StudentUpgradeFeeTask = require('../model/StudentUpgradeFeeModel/studentUpgradeFeeModel')
var StudentAssignmentTask = require('../model/StudentAssignmentModel/studentAssignmentModel')
var LectureTTTask = require('../model/LectureTimeTable/lectureTimeTable')
var GenerateLectureTTTask = require('../model/GenerateLectureTT/generateLectureTT')
var StudentAttTask = require('../model/StudentAttendanceModel/studentAttendanceModel')

// -------------------------------  Student New Admission CRUD ----------------------------------------------------
exports.getCityByDistrict = function (req, res) {
    var studentNewModel = new StudentAdmissionTask(req.body);

    StudentAdmissionTask.getCityByDistrictDetails(studentNewModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "City details fetched", data: { City: task } });
    });
};

exports.getAdmissionFeeDetails = function (req, res) {
   

    var studentNewModel = new StudentAdmissionTask(req.body);

    StudentAdmissionTask.getAdmissionFeeDetails(studentNewModel, req.query.id,req.query.SessionId,req.query.CourseId,req.query.BranchId,req.query.YearId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Fee Details fetched", data: { AdmissionFeeDetails: task } });
    });
};

exports.saveStudentNewAdmission = function (req, res) {
  
    var studentNewModel = new StudentAdmissionTask(req.body);

    StudentAdmissionTask.saveStudentNewAdmissionModel(studentNewModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getStudentAdmissionList = function (req, res) {
    StudentAdmissionTask.getStudentAdmissionDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Admission details fetched", data: { StudentAdmissionDetails: task } });
    });
};

exports.getSearchFor = function (req, res) {
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.getSearchForDetails(EditAdmissionModel, req.query.id,req.query.SessionId,req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SearchFor details fetched", data: { SearchFor: task } });
    });
};

exports.searchStudent = function (req, res) {
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.searchStudentDetails(EditAdmissionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SearchFor details fetched", data: { SearchStudent: task } });
    });
};

exports.getStudentAdmissionFeeDetails = function (req, res) {
    
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.getStudentAdmissionFee(EditAdmissionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "AdmissionFeeDetails details fetched", data: { AdmissionFeeDetails: task } });
    });
};


exports.getQualificationDetails = function (req, res) {
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.getQualificationDetails(EditAdmissionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Qualification details fetched", data: { QualificationDetails: task } });
    });
};

exports.getUploadedDocumentDetails = function (req, res) {
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.getUploadedDocumentDetails(EditAdmissionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Uploaded Document details fetched", data: { UploadedDocumentList: task } });
    });
};

exports.getSavedDocumentDetails = function (req, res) {
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.getSavedDocumentDetails(EditAdmissionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: " Document details fetched", data: { DocumentDetailsList: task } });
    });
};

exports.getSavedLanguageDetails = function (req, res) {
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.getSavedLanguageDetails(EditAdmissionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: " StudentLanguage details fetched", data: { StudentLanguage: task } });
    });
};

exports.updateStudentNewAdmission = function (req, res) {
    
    var EditAdmissionModel = new EditAdmissionTask(req.body);

    EditAdmissionTask.updateStudentNewAdmissionModel(EditAdmissionModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been UPDATED successfully", error: {} });
        }
    });
};

// ----------Student Registration -------------------

exports.getStudentRegistrationData = function (req, res) {
    StudentRegstTask.getStudentRegistrationDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student details fetched", data: { StudentRegistration: task } });
    });
};

exports.checkFormnumber = function (req, res) {
    var StudentRegistrationModel = new StudentRegstTask(req.body);

    StudentRegstTask.checkFormnumberDetails(StudentRegistrationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Form number  details fetched", data: { CheckFormNo: task } });
    });
};


exports.saveStudentRegistration = function (req, res) {
  
    if (!req.body.StudentName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var StudentRegistrationModel = new StudentRegstTask(req.body);

    StudentRegstTask.saveStudentRegistrationModel(StudentRegistrationModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateStudentRegistration = function (req, res) {
    if (!req.body.StudentName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var StudentRegistrationModel = new StudentRegstTask(req.body);

    StudentRegstTask.updateStudentRegistrationModel(StudentRegistrationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteStudentRegistration = function (req, res) {

    var StudentRegistrationModel = new StudentRegstTask(req.body);

    StudentRegstTask.deleteStudentRegistrationModel(StudentRegistrationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// --------------- Cancel Student Admission---------------------
exports.getStudentForCancel = function (req, res) {
    var StudentForCancelModel = new CancelStudentTask(req.body);

    CancelStudentTask.getStudentForCancelDetails(StudentForCancelModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.getStudentDetailForCancel = function (req, res) {
    var StudentForCancelModel = new CancelStudentTask(req.body);

    CancelStudentTask.getStudentDetailForCancel(StudentForCancelModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SearchFor details fetched", data: { CancelStudentList: task } });
    });
};

exports.saveCancelStudAdmission = function (req, res) {
  
    if (!req.body.AdmissionDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var StudentForCancelModel = new CancelStudentTask(req.body);

    CancelStudentTask.saveCancelStudAdmissionModel(StudentForCancelModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

// -----------------------Student Fees --------------------

exports.getStudentFeeMaster = function (req, res) {
    var StudentFeeMasterModel = new StudentFeesTask(req.body);

    StudentFeesTask.getStudentFeeMasterDetails(StudentFeeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Fee details fetched", data: { FeeMaterData : task } });
    });
};

exports.saveFeeData = function (req, res) {
  
    var StudentFeeMasterModel = new StudentFeesTask(req.body);

    StudentFeesTask.saveFeeDataModel(StudentFeeMasterModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getFeeReceiptData = function (req, res) {
    StudentReceiptTask.getFeeReceiptDataDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Receipt details fetched", data: { FeeReceiptData: task } });
    });
};

exports.getStudentReceiptTrans = function (req, res) {
    var StudentReceiptTaskModel = new StudentReceiptTask(req.body);

    StudentReceiptTask.getStudentReceiptTransDetails(StudentReceiptTaskModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Fee Trans details fetched", data: { StudentFeeMaster : task } });
    });
};

// ------------------------ RollNo Allotment --------------
exports.getStudentiRollNo = function (req, res) {
    var RollNoAllotmentModel = new RollNoAllotmentTask(req.body);

    RollNoAllotmentTask.getStudentiRollNoDetails(RollNoAllotmentModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.ArrangeStudentBy, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.saveRollNo = function (req, res) {
  
    var RollNoAllotmentModel = new RollNoAllotmentTask(req.body);

    RollNoAllotmentTask.saveRollNoModel(RollNoAllotmentModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

// ----------------------- change Roll Number --------------------
exports.getStudentForRollNo = function (req, res) {
    var ChangeRollNoModel = new ChangeRollNoTask(req.body);

    ChangeRollNoTask.getStudentForRollNoDetails(ChangeRollNoModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.ArrangeStudentBy, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

// ------------------- Student Batch -----------
exports.getBatchDetails = function (req, res) {
    var StudentBatchModel = new StudentBatchTask(req.body);

    StudentBatchTask.getBatchDetails(StudentBatchModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Batch details fetched", data: { BatchList: task } });
    });
};

exports.getStudentForSaveBatch = function (req, res) {
    var StudentBatchModel = new StudentBatchTask(req.body);

    StudentBatchTask.getStudentForSaveBatchDetails(StudentBatchModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
};

exports.saveStudentBatch = function (req, res) {
  
    var StudentBatchModel = new StudentBatchTask(req.body);

    StudentBatchTask.saveStudentBatchModel(StudentBatchModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getStudentForBatch = function (req, res) {
    var StudentEditBatchModel = new StudentEditBatchTask(req.body);

    StudentEditBatchTask.getStudentForBatchDetails(StudentEditBatchModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.BatchId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Batch details fetched", data: { StudentList: task } });
    });
};

exports.updateStudentBatch = function (req, res) {
  
    var StudentEditBatchModel = new StudentEditBatchTask(req.body);

    StudentEditBatchTask.updateStudentBatchModel(StudentEditBatchModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been UPDATED successfully", error: {} });
        }
    });
};


// ------------------------------- Posting Time Table ------------------------
exports.savePostingTT = function (req, res) {
  
    var PostingTTModel = new PostingTTTask(req.body);

    PostingTTTask.savePostingTTModel(PostingTTModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getPostingTT = function (req, res) {
    PostingTTTask.getPostingTTDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "PostingTT details fetched", data: { PostingTT: task } });
    });
};

exports.getPostingTTTrans = function (req, res) {
    var PostingTTModel = new PostingTTTask(req.body);

    PostingTTTask.getPostingTTTransDetails(PostingTTModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Posting TT Trans details fetched", data: { PostingTTTrans : task } });
    });
};

exports.updatePostingTT = function (req, res) {
   
    var PostingTTModel = new PostingTTTask(req.body);

    PostingTTTask.updatePostingTTModel(PostingTTModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deletePostingTT = function (req, res) {
   
    var PostingTTModel = new PostingTTTask(req.body);

    PostingTTTask.deletePostingTTModel(PostingTTModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ----------------- Generate Time Table ---------------------------------
exports.generatePostingTT = function (req, res) {
    var PostingTTSearchModel = new PostingTTSearchTask(req.body);

    PostingTTSearchTask.generatePostingTT(PostingTTSearchModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "PostingTTSearch details fetched", data: { GTimeTable: task } });
    });
};

exports.getBatchForTT = function (req, res) {
    var PostingTTSearchModel = new PostingTTSearchTask(req.body);

    PostingTTSearchTask.getBatchForTTDetails(PostingTTSearchModel, req.query.id, req.query.ToDateTT,req.query.SubjectTT, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Batch TT details fetched", data: { BatchTT: task } });
    });
};

// ------------------ Upgrade Student new --------------------------------------
exports.getStudentForUpgrade = function (req, res) {
    var StudentUpgradeModel = new StudentUpgradeTask(req.body);

    StudentUpgradeTask.getStudentForUpgradeDetails(StudentUpgradeModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student details fetched", data: { StudentList: task } });
    });
};

exports.saveStudentUpgrade = function (req, res) {
  
    var StudentUpgradeModel = new StudentUpgradeTask(req.body);

    StudentUpgradeTask.saveStudentUpgradeModel(StudentUpgradeModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been UPGRADED successfully", error: {} });
        }
    });
};

// ------------ Student Upgrade Fee ----------------
exports.getStudentForUpgradeFee = function (req, res) {
    var StudentUpgradeFeeModel = new StudentUpgradeFeeTask(req.body);

    StudentUpgradeFeeTask.getStudentForUpgradeFeeDetails(StudentUpgradeFeeModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student details fetched", data: { StudentList: task } });
    });
};

exports.saveUpgradeStudentFee = function (req, res) {
  
    var StudentUpgradeFeeModel = new StudentUpgradeFeeTask(req.body);

    StudentUpgradeFeeTask.saveUpgradeStudentFeeModel(StudentUpgradeFeeModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been UPGRADED successfully", error: {} });
        }
    });
};

// ----------------------------------- Student Assignment --------------------------------
exports.saveStudentAssignment = function (req, res) {
  
    var StudentAssignmentModel = new StudentAssignmentTask(req.body);

    StudentAssignmentTask.saveStudentAssignmentModel(StudentAssignmentModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

// --------------------------------------- Lecture Time Table ---------------------------------------
exports.getTimeBySem = function (req, res) {
    var LectureTTModel = new LectureTTTask(req.body);

    LectureTTTask.getTimeBySemDetails(LectureTTModel, req.query.id,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Lecture Time details fetched", data: { TimeList: task } });
    });
};

exports.saveLectureTT = function (req, res) {
  
    var LectureTTModel = new LectureTTTask(req.body);

    LectureTTTask.saveLectureTTModel(LectureTTModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};


exports.getLectureTT = function (req, res) {
    LectureTTTask.getLectureTTDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "PostingTT details fetched", data: { LectureTT: task } });
    });
};

exports.getLectureTTTrans = function (req, res) {
    var LectureTTModel = new LectureTTTask(req.body);

    LectureTTTask.getLectureTTTransDetails(LectureTTModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Lecture TT Trans details fetched", data: { LectureTTTrans : task } });
    });
};

exports.updateLectureTT = function (req, res) {
   
    var LectureTTModel = new LectureTTTask(req.body);

    LectureTTTask.updateLectureTTModel(LectureTTModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteLectureTT = function (req, res) {
   
    var LectureTTModel = new LectureTTTask(req.body);

    LectureTTTask.deleteLectureTTModel(LectureTTModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ----------------------- Genrate Lecture Time Table ----------
exports.generateLectureTT = function (req, res) {
    var GenerateLectureTTModel = new GenerateLectureTTTask(req.body);

    GenerateLectureTTTask.generateLectureTT(GenerateLectureTTModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "GenerateLectureTTModel details fetched", data: { GLectureTimeTable: task } });
    });
};


// ------------------ Student Attendance --------------------------------------
exports.getSubjectByType = function (req, res) {
    var StudentAttendanceModel = new StudentAttTask(req.body);

    StudentAttTask.getSubjectByTypeDetails(StudentAttendanceModel,req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, req.query.DayId, req.query.type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Subject fetched", data: { SubjectList: task } });
    });
};

exports.getStudentForAttendance = function (req, res) {
    var StudentAttendanceModel = new StudentAttTask(req.body);

    StudentAttTask.getStudentForAttendance(StudentAttendanceModel, req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId,req.query.AttendanceDate,req.query.Main_Type,req.query.type,req.query.SubjectId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student details fetched", data: { StudentList: task } });
    });
};

exports.saveStudentAttendance = function (req, res) {
    var StudentAttendanceModel = new StudentAttTask(req.body);

    StudentAttTask.saveStudentAttendanceModel(StudentAttendanceModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.searchStudentAttendance = function (req, res) {
    var StudentAttendanceModel = new StudentAttTask(req.body);

    StudentAttTask.searchStudentAttendanceDetails(StudentAttendanceModel,req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId,req.query.SemesterId, req.query.SubjectId, req.query.AttendanceDate, req.query.type, req.query.Main_Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Attendance fetched", data: { StudentList: task } });
    });
};

exports.updateStudentAttendance = function (req, res) {
   
    var StudentAttendanceModel = new StudentAttTask(req.body);

    StudentAttTask.updateStudentAttendanceModel(StudentAttendanceModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};
