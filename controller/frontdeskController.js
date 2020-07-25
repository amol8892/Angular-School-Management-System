'use strict';
var CharacterCertificateTask = require('../model/CharacterCertificateModal/CharacterCertificateModal');
var NoticeFormatTask = require('../model/NoticeFormatModel/NoticeFormatModel');
var InwardLetterTask = require('../model/InwardLetterModel/InwardLetterModel');
var OutwardLetterTask = require('../model/OutwardLetterModel/OutwardLetterModel');
var BonafiedCertificateModelTaskModule = require('../model/BonafideCertificateModel/BonafideCertificateModel');
var LeavingCertificateModelTaskModule = require('../model/LeavingCertificateModel/LeavingCertificateModel');

// -------------------------------  Front desk CRUD ----------------------------------------------------
exports.getStudentForCharacter = function (req, res) {
    var DataModel = new CharacterCertificateTask(req.body);

    CharacterCertificateTask.getStudentForCharacter(DataModel, req.query.id, req.query.CourseId, req.query.BranchId, req.query.YearId, req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
}

exports.savecharactercertificate = function (req, res) {
  
    var DataModel = new CharacterCertificateTask(req.body);

    CharacterCertificateTask.saveCertificateModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully",data: { SavedList: task }, error: {} });
        }
    });
};

exports.savenoticeformat = function (req, res) {
  
    var DataModel = new NoticeFormatTask(req.body);

    NoticeFormatTask.saveNoticeFormatModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.saveinwardletter = function (req, res) {
  
    var DataModel = new InwardLetterTask(req.body);

    InwardLetterTask.saveInwardModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.saveoutwardletter = function (req, res) {
  
    var DataModel = new OutwardLetterTask(req.body);

    OutwardLetterTask.saveOutwardModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getcharactercertificate = function (req, res) {
    CharacterCertificateTask.getcharactercertificate(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Character certificate details fetched", data: { CharacterCertificateDetails: task } });
    });
};

exports.getnoticeformat = function (req, res) {
    NoticeFormatTask.getnoticeformat(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Notice format details fetched", data: { NoticeFormatDetails: task } });
    });
};

exports.getinwardletter = function (req, res) {
    InwardLetterTask.geInwardLetterDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Inward letter details fetched", data: { InwardLetterDetails: task } });
    });
};

exports.getoutwardletter = function (req, res) {
    OutwardLetterTask.geOutwardLetterDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Outward letter details fetched", data: { OutwardLetterDetails: task } });
    });
};

exports.deleteinwardletter = function (req, res) {

    var SerialNo = req.query.SerialNo

    InwardLetterTask.deleteInwardModel(SerialNo, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

exports.deleteoutwardletter = function (req, res) {

    var SerialNo = req.query.SerialNo

    OutwardLetterTask.deleteOutwardModel(SerialNo, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

exports.updatecharactercertificate = function (req, res) {
  
    var DataModel = new CharacterCertificateTask(req.body);

    CharacterCertificateTask.updateCertificateModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateinwardletter = function (req, res) {
  
    var DataModel = new InwardLetterTask(req.body);
    
    InwardLetterTask.updateInwardModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateoutwardletter = function (req, res) {
  
    var DataModel = new OutwardLetterTask(req.body);
    
    OutwardLetterTask.updateOutwardModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getgtudentsfornotice = function (req, res) {

    NoticeFormatTask.getStudentForNotice(req.query.id, req.query.CourseId,req.query.BranchId,req.query.YearId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student details fetched", data: { StudentList: task } });
    });
};

//Bonafied Crtifiacte
exports.GetStudentBySem = function (req, res) {
    BonafiedCertificateModelTaskModule.GetStudentBySem(req.query, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "To Year details fetched", data: { Student: task } });
        }
    });
}
//Bonafied Crtifiacte
exports.getStudentForBonafide = function (req, res) {
    var StudentForCancelModel = new BonafiedCertificateModelTaskModule(req.body);

    BonafiedCertificateModelTaskModule.getStudentForBonafide(StudentForCancelModel, req.query.id, req.query.CourseId, req.query.BranchId, req.query.YearId, req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
}
exports.getStudentForBookTransaction = function (req, res) {
    var StudentForCancelModel = new BonafiedCertificateModelTaskModule(req.body);

    BonafiedCertificateModelTaskModule.getStudentForBookTransaction(StudentForCancelModel, req.query.id, req.query.CourseId, req.query.BranchId, req.query.YearId, req.query.SemesterId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
}
exports.GetBonafideCertificate = function (req, res) {
    var BonafideCertificateModel = new BonafiedCertificateModelTaskModule(req.body);
    BonafiedCertificateModelTaskModule.GetBonafideCertificate(BonafideCertificateModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bonafied Certificate details fetched", data: { BonafideCerti: task } });
    });
}
exports.SaveBonafideCertificate = function (req, res) {
    var BonafideCertificateModel = new BonafiedCertificateModelTaskModule(req.body);
    BonafiedCertificateModelTaskModule.SaveBonafideCertificate(BonafideCertificateModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        } else {
            res.json({ status: true, message: "Bonafied Certificate Saved Successfully", error: {} });
        }
    });
}
exports.UpdateBonafideCertificate = function (req, res) {
    var BonafideCertificateModel = new BonafiedCertificateModelTaskModule(req.body);
    BonafiedCertificateModelTaskModule.UpdateBonafideCertificate(BonafideCertificateModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        } else {
            res.json({ status: true, message: "Bonafied Certificate Updated Successfully", error: {} });
        }
    });
}
//Leaving Certificate 
exports.getStudentByBranch = function (req, res) {
    LeavingCertificateModelTaskModule.getStudentByBranch(req.query,req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Name details fetched", data: { StudentList: task } });
    });
}
exports.GetLeavingCertificate = function (req, res) {
    LeavingCertificateModelTaskModule.GetLeavingCertificate(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leaving Certificate details fetched", data: { LC: task } });
    });
}
exports.SaveLeavingCertificate = function (req, res) {
    var LeavingCertificateModel = new LeavingCertificateModelTaskModule(req.body);
    LeavingCertificateModelTaskModule.SaveLeavingCertificate(LeavingCertificateModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        } else {
            res.json({ status: true, message: "Leaving Certificate Saved Successfully", error: {} });
        }
    });
}

exports.UpdateLeavingCertificate = function (req, res) {
    var BonafideCertificateModel = new LeavingCertificateModelTaskModule(req.body);
    LeavingCertificateModelTaskModule.UpdateLeavingCertificate(BonafideCertificateModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        } else {
            res.json({ status: true, message: "Leaving Certificate Updated Successfully", error: {} });
        }
    });
}