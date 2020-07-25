'use strict';
var Task = require('../model/CourseModel/courseModel');
var CountryTask = require('../model/CountryModel/countryModel');
var StateTask = require('../model/StateModel/stateModel');
var DistrictTask = require('../model/DistrictModel/districtModel');
var CityTask = require('../model/CityModel/cityModel');
var ReligionTask = require('../model/ReligionModel/religionModel');
var BranchTask = require('../model/BranchModel/branchModel');
var SessionTask = require('../model/SessionModel/sessionModel');
var CategoryTask = require('../model/CategoryModel/categoryModel');
var CastTask = require('../model/CastModel/castModel');
var SubCastTask = require('../model/SubCastModel/subCastModel');
var YearTask = require('../model/YearModel/yearModel');
var SemesterTask = require('../model/SemesterModel/semesterModel');
var SessionWiseSemTask = require('../model/SessionWiseSemModel/sessionWiseSemModel');
var BatchTask = require('../model/BatchModel/batchModel');
var TTSubjectTask = require('../model/TTSubjectModel/ttSubjectModel');
var StreamTask = require('../model/StreamModel/streamModel');
var TimeMasterTask = require('../model/TimeMasterModel/timeMasterModel');
var EntranceExamTask = require('../model/EntranceExamModel/entranceExamModel');
var QualificationTask = require('../model/QualificationModel/qualificationModel');
var CertificateTask = require('../model/CertificateModel/certificateModel');
var HolidayTask = require('../model/HolidayModel/holidayMaster');
var LanguageTask = require('../model/LanguageModel/languageModel');
var FeesCategoryTask = require('../model/FeesCategoryModel/feesCategoryModel');
var FeesTypeTask = require('../model/FeesTypeModel/feesTypeModel');
var SessionalHolidayTask = require('../model/SessionalHolidayModel/sessionalHolidayModel');
var FeesMasterTask = require('../model/FeesMasterModel/feesMasterModel');
var FineTask = require('../model/FineModel/fineModel');
var IssueDayTask = require('../model/IssueDayModel/issueDayModel');
var ReIssueDayTask = require('../model/ReissueDayModel/reissueDayModel');
var IssueDayCounterTask = require('../model/IssueDayCounterModel/issueDayCounterModel');
var BookCategoryTask = require('../model/BookCategoryModel/bookCategoryModel');
var ReissueDayCounterTask = require('../model/ReissueDayCounterModel/reissueDayCounterModel');
var BookDetailTask = require('../model/BookDetailModel/bookDetailModel');
var JournalDetailTask = require('../model/JournalDetailModal/journalDetailModal');


var EmployeeDesignationModuleTask = require('../model/EmployeeDesignation/EmployeeDesignation');
var LeaveTypeMasterModuleTask = require('../model/LeaveTypeMaster/LeaveTypeMaster');
var DepartmentMasterModuleTask = require('../model/DepartmentMaster/DepartmentMaster');
var SalaryHeadMasterModuleTask = require('../model/SalaryHeadMaster/SalaryHeadMaster');
var GradeMasterModuleTask = require('../model/GradeMaster/GradeMaster');
var LeaveAllotmentMasterModuleTask = require('../model/LeaveAllotmentMaster/LeaveAllotmentMaster');
var MasterRoleModuleTask = require('../model/UserRole/UserRole');
var MasterUsersModuleTask = require('../model/MasterUsers/MasterUsers');
var MasterUsersAuthenticationModuleTask = require('../model/ErpUserAuthentication/ErpUserAuthentication');
var MasterCollegeModelTaskModule=require('../model/CollegeMaster/CollegeMaster');

var HostelMasterTask = require('../model/HostelMasterModel/hostelMasterModel');
var HostelInTimeTask = require('../model/HostelIntimeModel/hostelIntimeModel');

var MasterLabTask = require('../model/MasterLabModel/masterLabModel');

var LoginUserTask = require('../model/UserLoginModel/userLoginModel')



// ------------------------------- Course CRUD ----------------------------------------------------
exports.saveCourse = function (req, res) {
    if (!req.body.CourseName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var courseModel = new Task(req.body);

    Task.saveCourseModel(courseModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateCourse = function (req, res) {
    if (!req.body.CourseName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var courseModel = new Task(req.body);

    Task.updatecourseModel(courseModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.getCourse = function (req, res) {
    Task.getCourseDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Course details fetched", data: { Course: task } });
    });
};

exports.deleteCourse = function (req, res) {
    // if (!req.body.Country) {
    //     res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
    //     return;
    // }
    var courseModel = new Task(req.body);

    Task.deleteCourseModel(courseModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Country CRUD ----------------------------------------------------
exports.saveCountry = function (req, res) {
    if (!req.body.Country) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var countryModel = new CountryTask(req.body);

    
    CountryTask.saveCountryModel(countryModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getCountry = function (req, res) {
    CountryTask.getCountryDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Country details fetched", data: { Country: task } });
    });
};

exports.updateCountry = function (req, res) {
    if (!req.body.Country) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var countryModel = new CountryTask(req.body);

    CountryTask.updatecountryModel(countryModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteCountry = function (req, res) {
    // if (!req.body.Country) {
    //     res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
    //     return;
    // }
    var countryModel = new CountryTask(req.body);

    CountryTask.deletecountryModel(countryModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------------------  Sate CRUD ----------------------------------------------------
exports.getState = function (req, res) {
    StateTask.getStateDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "State details fetched", data: { State: task } });
    });
};

exports.saveState = function (req, res) {
    if (!req.body.StateName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var stateModel = new StateTask(req.body);
    StateTask.saveStateModel(stateModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateState = function (req, res) {
    if (!req.body.StateName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var stateModel = new StateTask(req.body);

    StateTask.updateStateModel(stateModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteState = function (req, res) {
    // if (!req.body.Country) {
    //     res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
    //     return;
    // }
    var stateModel = new StateTask(req.body);

    StateTask.deleteStateModel(stateModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------------------  District CRUD ----------------------------------------------------
exports.getDistrict = function (req, res) {
    DistrictTask.getDistrictDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "District details fetched", data: { District: task } });
    });
};


exports.getStateByCountry = function (req, res) {
    var districtModel = new DistrictTask(req.body);

    DistrictTask.getStateByCountryDetails(districtModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "State details fetched", data: { State: task } });
    });
};

exports.saveDistrict = function (req, res) {
    if (!req.body.District) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var DistrictModel = new DistrictTask(req.body);
    DistrictTask.saveDistrictModel(DistrictModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateDistrict = function (req, res) {
    if (!req.body.District) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var districtModel = new DistrictTask(req.body);

    DistrictTask.updateDistrictModel(districtModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteDistrict = function (req, res) {
    // if (!req.body.Country) {
    //     res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
    //     return;
    // }
    var districtModel = new DistrictTask(req.body);

    DistrictTask.deleteDistrictModel(districtModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------------------  City CRUD ----------------------------------------------------
exports.getDistrictByState = function (req, res) {
    var cityModel = new CityTask(req.body);

    CityTask.getDistrictByStateDetails(cityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "State details fetched", data: { District: task } });
    });
};

exports.saveCity = function (req, res) {
    if (!req.body.CityName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CityModel = new CityTask(req.body);
    CityTask.saveCityModel(CityModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getCity = function (req, res) {
    CityTask.getCityDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "District details fetched", data: { City: task } });
    });
};

exports.updateCity = function (req, res) {
    if (!req.body.CityName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var cityModel = new CityTask(req.body);

    CityTask.updateCityModel(cityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteCity = function (req, res) {
    // if (!req.body.Country) {
    //     res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
    //     return;
    // }
    var cityModel = new CityTask(req.body);

    CityTask.deleteCityModel(cityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------------------  Religion CRUD ----------------------------------------------------
exports.getReligion = function (req, res) {
    ReligionTask.getReligionDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Religion details fetched", data: { Religion: task } });
    });
};

exports.saveReligion = function (req, res) {
    
    if (!req.body.Religion) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var religionModel = new ReligionTask(req.body);
    ReligionTask.saveReligionModel(religionModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateReligion = function (req, res) {
    if (!req.body.Religion) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var religionModel = new ReligionTask(req.body);

    ReligionTask.updateReligionModel(religionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteReligion = function (req, res) {
    
    var religionModel = new ReligionTask(req.body);

    ReligionTask.deleteReligionModel(religionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------------------  Branch CRUD ----------------------------------------------------
exports.getBranch = function (req, res) {
    BranchTask.getBranchDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Branch details fetched", data: { Branch: task } });
    });
};

exports.saveBranch = function (req, res) {
    if (!req.body.BranchName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var branchModel = new BranchTask(req.body);
    BranchTask.saveBranchModel(branchModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateBranch = function (req, res) {
    if (!req.body.BranchName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var branchModel = new BranchTask(req.body);

    BranchTask.updateBranchModel(branchModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteBranch = function (req, res) {
    
    var branchModel = new BranchTask(req.body);

    BranchTask.deleteBranchModel(branchModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Session CRUD ----------------------------------------------------
exports.getSession = function (req, res) {
    SessionTask.getSessionDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Session details fetched", data: { Session: task } });
    });
};

exports.saveSession = function (req, res) {
    if (!req.body.SessionFrom) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var sessionModel = new SessionTask(req.body);
    SessionTask.saveSessionModel(sessionModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateSession = function (req, res) {
    if (!req.body.Session) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SessionModel = new SessionTask(req.body);

    SessionTask.updateSessionModel(SessionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteSession = function (req, res) {
    
    var SessionModel = new SessionTask(req.body);

    SessionTask.deleteSessionModel(SessionModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Category CRUD ----------------------------------------------------
exports.getCategory = function (req, res) {
    CategoryTask.getCategoryDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Country details fetched", data: { Category: task } });
    });
};

exports.saveCategory = function (req, res) {
    
    if (!req.body.Category) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CategoryModel = new CategoryTask(req.body);

    CategoryTask.saveCategoryModel(CategoryModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateCategory = function (req, res) {
    if (!req.body.Category) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CategoryModel = new CategoryTask(req.body);

    CategoryTask.updateCategoryModel(CategoryModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteCategory = function (req, res) {
   
    var CategoryModel = new CategoryTask(req.body);

    CategoryTask.deleteCategoryModel(CategoryModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Cast CRUD ----------------------------------------------------
exports.getCast = function (req, res) {
    CastTask.getCastDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Cast details fetched", data: { Cast: task } });
    });
};

exports.saveCast = function (req, res) {
    
    if (!req.body.Cast) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CastModel = new CastTask(req.body);

    CastTask.saveCastModel(CastModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateCast = function (req, res) {
    if (!req.body.Cast) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CastModel = new CastTask(req.body);

    CastTask.updateCastModel(CastModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteCast = function (req, res) {
   
    var CastModel = new CastTask(req.body);

    CastTask.deleteCastModel(CastModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- SUB Cast CRUD ----------------------------------------------------
exports.getSubCast = function (req, res) {
    SubCastTask.getSubCastDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SubCast details fetched", data: { SubCast: task } });
    });
};

exports.saveSubCast = function (req, res) {
    
    if (!req.body.SubCast) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SubCastModel = new SubCastTask(req.body);

    SubCastTask.saveSubCastModel(SubCastModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateSubCast = function (req, res) {
    if (!req.body.SubCast) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SubCastModel = new SubCastTask(req.body);

    SubCastTask.updateSubCastModel(SubCastModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteSubCast = function (req, res) {
   
    var SubCastModel = new SubCastTask(req.body);

    SubCastTask.deleteSubCastModel(SubCastModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Year CRUD ----------------------------------------------------

exports.getBranchByCourse = function (req, res) {
    var yearModel = new YearTask(req.body);

    YearTask.getBranchByCourseDetails(yearModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Branch details fetched", data: { Branch: task } });
    });
};


exports.getYear = function (req, res) {
    YearTask.getYearDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Year details fetched", data: { Year: task } });
    });
};

exports.saveYear = function (req, res) {
  
    if (!req.body.YearName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var YearModel = new YearTask(req.body);

    YearTask.saveYearModel(YearModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateYear = function (req, res) {
    if (!req.body.YearName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var YearModel = new YearTask(req.body);

    YearTask.updateYearModel(YearModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteYear = function (req, res) {
   
    var YearModel = new YearTask(req.body);

    YearTask.deleteYearModel(YearModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Semester CRUD ----------------------------------------------------

exports.getYearByBranch = function (req, res) {
    var SemesterModel = new SemesterTask(req.body);

    SemesterTask.getYearByBranchDetails(SemesterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Branch details fetched", data: { Year: task } });
    });
};


exports.getSemester = function (req, res) {
    SemesterTask.getSemesterDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Year details fetched", data: { Semester: task } });
    });
};

exports.saveSemester = function (req, res) {
  
    if (!req.body.Semester) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SemesterModel = new SemesterTask(req.body);

    SemesterTask.saveSemesterModel(SemesterModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateSemester = function (req, res) {
    if (!req.body.Semester) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SemesterModel = new SemesterTask(req.body);

    SemesterTask.updateSemesterModel(SemesterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteSemester = function (req, res) {
   
    var SemesterModel = new SemesterTask(req.body);

    SemesterTask.deleteSemesterModel(SemesterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Session Wise Semester CRUD ----------------------------------------------------

exports.getSemByYear = function (req, res) {
    var SessionWiseSemModel = new SessionWiseSemTask(req.body);

    SessionWiseSemTask.getSemByYearDetails(SessionWiseSemModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Semester details fetched", data: { Semester: task } });
    });
};


exports.getSessionWiseSem = function (req, res) {
    SessionWiseSemTask.getSessionWiseSemDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Session Wise Sem details fetched", data: { SessionWiseSem: task } });
    });
};

exports.saveSessionWiseSem = function (req, res) {
  
    if (!req.body.FromDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SessionWiseSemModel = new SessionWiseSemTask(req.body);

    SessionWiseSemTask.saveSemesterModel(SessionWiseSemModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateSessionWiseSem = function (req, res) {
    if (!req.body.FromDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SessionWiseSemModel = new SessionWiseSemTask(req.body);

    SessionWiseSemTask.updateSemesterModel(SessionWiseSemModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteSessionWiseSem = function (req, res) {
   
    var SessionWiseSemModel = new SessionWiseSemTask(req.body);

    SessionWiseSemTask.deleteSemesterModel(SessionWiseSemModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Session Wise Semester CRUD ----------------------------------------------------

exports.getBatch = function (req, res) {
    BatchTask.getBatchDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Batch details fetched", data: { Batch: task } });
    });
};

exports.saveBatch = function (req, res) {
  
    if (!req.body.Batch) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var BatchModel = new BatchTask(req.body);

    BatchTask.saveBatchModel(BatchModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateBatch = function (req, res) {
    if (!req.body.Batch) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var BatchModel = new BatchTask(req.body);

    BatchTask.updateBatchModel(BatchModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteBatch = function (req, res) {
   
    var BatchModel = new BatchTask(req.body);

    BatchTask.deleteBatchModel(BatchModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- TT Subject CRUD ----------------------------------------------------
exports.getTTSubject = function (req, res) {
    TTSubjectTask.getTTSubjectDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SubCast details fetched", data: { TTSubject: task } });
    });
};

exports.saveTTSubject = function (req, res) {
    
    if (!req.body.Subject) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var TTSubjectModel = new TTSubjectTask(req.body);

    TTSubjectTask.saveTTSubjectModel(TTSubjectModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateTTSubject = function (req, res) {
    if (!req.body.Subject) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var TTSubjectModel = new TTSubjectTask(req.body);

    TTSubjectTask.updateTTSubjectModel(TTSubjectModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteTTSubject = function (req, res) {
   
    var TTSubjectModel = new TTSubjectTask(req.body);

    TTSubjectTask.deleteTTSubjectModel(TTSubjectModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Stream CRUD ----------------------------------------------------
exports.getStream = function (req, res) {
    StreamTask.getStreamDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Stream details fetched", data: { Stream: task } });
    });
};

exports.saveStream = function (req, res) {
    
    if (!req.body.Stream) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var StreamModel = new StreamTask(req.body);

    StreamTask.saveStreamModel(StreamModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateStream = function (req, res) {
    if (!req.body.Stream) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var StreamModel = new StreamTask(req.body);

    StreamTask.updateStreamModel(StreamModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteStream = function (req, res) {
   
    var StreamModel = new StreamTask(req.body);

    StreamTask.deleteStreamModel(StreamModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Time Master CRUD ----------------------------------------------------
exports.getTimeMaster = function (req, res) {
    TimeMasterTask.getTimeMasterDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Time Master details fetched", data: { TimeMaster: task } });
    });
};

exports.saveTimeMaster = function (req, res) {
    
    if (!req.body.FromTime) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var TimeMasterModel = new TimeMasterTask(req.body);

    TimeMasterTask.saveTimeMasterModel(TimeMasterModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateTimeMaster = function (req, res) {
    if (!req.body.FromTime) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var TimeMasterModel = new TimeMasterTask(req.body);

    TimeMasterTask.updateTimeMasterModel(TimeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteTimeMaster = function (req, res) {
   
    var TimeMasterModel = new TimeMasterTask(req.body);

    TimeMasterTask.deleteTimeMasterModel(TimeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Entrance Exam CRUD ----------------------------------------------------
exports.getEntranceExam = function (req, res) {
    EntranceExamTask.getEntranceExamDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Time Master details fetched", data: { EntranceExam: task } });
    });
};

exports.saveEntranceExam = function (req, res) {
    
    if (!req.body.EntranceName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EntranceExamModel = new EntranceExamTask(req.body);

    EntranceExamTask.saveEntranceExamModel(EntranceExamModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateEntranceExam = function (req, res) {
    if (!req.body.EntranceName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EntranceExamModel = new EntranceExamTask(req.body);

    EntranceExamTask.updateEntranceExamModel(EntranceExamModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteEntranceExam = function (req, res) {
   
    var EntranceExamModel = new EntranceExamTask(req.body);

    EntranceExamTask.deleteEntranceExamModel(EntranceExamModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Qualification CRUD ----------------------------------------------------
exports.getQualification = function (req, res) {
    QualificationTask.getQualificationDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Time Master details fetched", data: { Qualification: task } });
    });
};

exports.saveQualification = function (req, res) {
    
    if (!req.body.Qualification) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var QualificationModel = new QualificationTask(req.body);

    QualificationTask.saveQualificationModel(QualificationModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateQualification = function (req, res) {
    if (!req.body.Qualification) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var QualificationModel = new QualificationTask(req.body);

    QualificationTask.updateQualificationModel(QualificationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteQualification = function (req, res) {
   
    var QualificationModel = new QualificationTask(req.body);

    QualificationTask.deleteQualificationModel(QualificationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Certificate CRUD ----------------------------------------------------
exports.getCertificate = function (req, res) {
    CertificateTask.getCertificateDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Time Master details fetched", data: { Certificate: task } });
    });
};

exports.saveCertificate = function (req, res) {
    
    if (!req.body.CertifiacteType) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CertificateModel = new CertificateTask(req.body);

    CertificateTask.saveCertificateModel(CertificateModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateCertificate = function (req, res) {
    if (!req.body.CertifiacteType) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var CertificateModel = new CertificateTask(req.body);

    CertificateTask.updateCertificateModel(CertificateModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteCertificate = function (req, res) {
   
    var CertificateModel = new CertificateTask(req.body);

    CertificateTask.deleteCertificateModel(CertificateModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Holiday CRUD ----------------------------------------------------
exports.getHoliday = function (req, res) {
    HolidayTask.getHolidayDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Holiday details fetched", data: { Holiday: task } });
    });
};

exports.saveHoliday = function (req, res) {
    
    if (!req.body.Holiday) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var HolidayModel = new HolidayTask(req.body);

    HolidayTask.saveHolidayModel(HolidayModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateHoliday = function (req, res) {
    if (!req.body.Holiday) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var HolidayModel = new HolidayTask(req.body);

    HolidayTask.updateHolidayModel(HolidayModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHoliday = function (req, res) {
   
    var HolidayModel = new HolidayTask(req.body);

    HolidayTask.deleteHolidayModel(HolidayModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Language CRUD ----------------------------------------------------
exports.getLanguage = function (req, res) {
    LanguageTask.getLanguageDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Language details fetched", data: { Language: task } });
    });
};

exports.saveLanguage = function (req, res) {
    
    if (!req.body.Language) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var LanguageModel = new LanguageTask(req.body);

    LanguageTask.saveLanguageModel(LanguageModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateLanguage = function (req, res) {
    if (!req.body.Language) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var LanguageModel = new LanguageTask(req.body);

    LanguageTask.updateLanguageModel(LanguageModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteLanguage = function (req, res) {
   
    var LanguageModel = new LanguageTask(req.body);

    LanguageTask.deleteLanguageModel(LanguageModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- FeesCategory CRUD ----------------------------------------------------
exports.getFeesCategory = function (req, res) {
    FeesCategoryTask.getFeesCategoryDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "FeesCategory details fetched", data: { FeesCategory: task } });
    });
};

exports.saveFeesCategory = function (req, res) {
    
    if (!req.body.FeesCategory) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var FeesCategoryModel = new FeesCategoryTask(req.body);

    FeesCategoryTask.saveFeesCategoryModel(FeesCategoryModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateFeesCategory = function (req, res) {
    if (!req.body.FeesCategory) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var FeesCategoryModel = new FeesCategoryTask(req.body);

    FeesCategoryTask.updateFeesCategoryModel(FeesCategoryModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteFeesCategory = function (req, res) {
   
    var FeesCategoryModel = new FeesCategoryTask(req.body);

    FeesCategoryTask.deleteFeesCategoryModel(FeesCategoryModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Fees Type CRUD ----------------------------------------------------
exports.getFeesType = function (req, res) {
    FeesTypeTask.getFeesTypeDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "FeesType details fetched", data: { FeesType: task } });
    });
};

exports.saveFeesType = function (req, res) {
    
    if (!req.body.FeesType) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var FeesTypeModel = new FeesTypeTask(req.body);

    FeesTypeTask.saveFeesTypeModel(FeesTypeModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateFeesType = function (req, res) {
    if (!req.body.FeesType) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var FeesTypeModel = new FeesTypeTask(req.body);

    FeesTypeTask.updateFeesTypeModel(FeesTypeModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteFeesType = function (req, res) {
   
    var FeesTypeModel = new FeesTypeTask(req.body);

    FeesTypeTask.deleteFeesTypeModel(FeesTypeModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- SessionalHoliday CRUD ----------------------------------------------------
exports.getSessionalHoliday = function (req, res) {
    SessionalHolidayTask.getSessionalHolidayDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SessionalHoliday details fetched", data: { SessionalHoliday: task } });
    });
};

exports.saveSessionalHoliday = function (req, res) {
    
    if (!req.body.HolidayFromDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SessionalHolidayModel = new SessionalHolidayTask(req.body);

    SessionalHolidayTask.saveSessionalHolidayModel(SessionalHolidayModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateSessionalHoliday = function (req, res) {
    if (!req.body.HolidayFromDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SessionalHolidayModel = new SessionalHolidayTask(req.body);

    SessionalHolidayTask.updateSessionalHolidayModel(SessionalHolidayModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteSessionalHoliday = function (req, res) {
   
    var SessionalHolidayModel = new SessionalHolidayTask(req.body);

    SessionalHolidayTask.deleteSessionalHolidayModel(SessionalHolidayModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};


exports.getNextFeeId = function (req, res) {
    FeesMasterTask.getNextFeeIdDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "SessionalHoliday details fetched", data: { NextFeeId: task } });
    });
};


exports.saveFeeDetails = function (req, res) {
    
   
    var FeeDetailsModel = new FeesMasterTask(req.body);

    FeesMasterTask.saveFeeDetailsModel(FeeDetailsModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getFeeMaster = function (req, res) {
    FeesMasterTask.getFeeMasterDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Fee Master details fetched", data: { FeeMaster: task } });
    });
};

exports.getFeeTransData = function (req, res) {
    var FeeDetailsModel = new FeesMasterTask(req.body);

    FeesMasterTask.getFeeTransDataDetails(FeeDetailsModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Semester details fetched", data: { TrasFeeData: task } });
    });
};


exports.updateFeeDetails = function (req, res) {
    // if (!req.body.HolidayFromDate) {
    //     res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
    //     return;
    // }
    var FeeDetailsModel = new FeesMasterTask(req.body);

    FeesMasterTask.updateFeeDetailsModel(FeeDetailsModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteFeeMaster = function (req, res) {
   
    var FeeDetailsModel = new FeesMasterTask(req.body);

    FeesMasterTask.deleteFeeMasterModel(FeeDetailsModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};


// ----------------------------- Employee Master---------------------------------------------------
//-----------------------------------------------------

// EmployeeDesignation CRUD


exports.SaveEmployeeDesignation = function (req, res) {

    if (!req.body.Designation) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EmployeeDesignationModel = new EmployeeDesignationModuleTask(req.body);
    EmployeeDesignationModuleTask.saveEmployeeDesignationModel(EmployeeDesignationModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Employee Designation Saved successfully", error: {} });
        }
    });
}
exports.getEmployeeDesignation = function (req, res) {

    EmployeeDesignationModuleTask.getEmployeeDesignation(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Designation Fetched", data: { EmployeeDesignation: task } });
    });
}
exports.updateEmployeeDesignation = function (req, res) {
    if (!req.body.Designation) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EmployeeDesignationModel = new EmployeeDesignationModuleTask(req.body);
    EmployeeDesignationModuleTask.updateEmployeeDesignationModel(EmployeeDesignationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Designation Updated successfully", error: {} });
    });
};
exports.deleteEmployeeDesignation = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var EmployeeDesignationModel = new EmployeeDesignationModuleTask(req.body);
    EmployeeDesignationModuleTask.deleteEmployeeDesignation(EmployeeDesignationModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Employee Designation Deleted successfully", error: {} });
    });
};


// LeaveTypeMaster CRUD


exports.SaveLeaveTypeMaster = function (req, res) {

    if (!req.body.LeaveType) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var LeaveTypeMasterModel = new LeaveTypeMasterModuleTask(req.body);
    LeaveTypeMasterModuleTask.saveLeaveTypeMasterModel(LeaveTypeMasterModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Leave Type Saved successfully", error: {} });
        }
    });
}
exports.getLeaveTypeMaster = function (req, res) {

    LeaveTypeMasterModuleTask.getLeaveTypeMaster(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leave Type Fetched", data: { LeaveTypeMaster: task } });
    });
}

exports.updateLeaveTypeMaster = function (req, res) {
    if (!req.body.LeaveType) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var LeaveTypeMasterModel = new LeaveTypeMasterModuleTask(req.body);
    LeaveTypeMasterModuleTask.updateLeaveTypeMasterModel(LeaveTypeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leave Type Updated successfully", error: {} });
    });
};
exports.deleteLeaveTypeMaster = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var LeaveTypeMasterModel = new LeaveTypeMasterModuleTask(req.body);
    LeaveTypeMasterModuleTask.deleteLeaveTypeMaster(LeaveTypeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leave Type Deleted successfully", error: {} });
    });
};

// DepartmentMaster CRUD


exports.SaveDepartmentMaster = function (req, res) {

    if (!req.body.Department) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var DepartmentMasterModel = new DepartmentMasterModuleTask(req.body);
    DepartmentMasterModuleTask.saveDepartmentMasterModel(DepartmentMasterModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Department Saved successfully", error: {} });
        }
    });
}
exports.getDepartmentMaster = function (req, res) {

    DepartmentMasterModuleTask.getDepartmentMaster(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Department Fetched", data: { DepartmentMaster: task } });
    });
}

exports.updateDepartmentMaster = function (req, res) {
    if (!req.body.Department) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var DepartmentMasterModel = new DepartmentMasterModuleTask(req.body);
    DepartmentMasterModuleTask.updateDepartmentMasterModel(DepartmentMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Department Updated successfully", error: {} });
    });
};
exports.deleteDepartmentMaster = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var DepartmentMasterModel = new DepartmentMasterModuleTask(req.body);
    DepartmentMasterModuleTask.deleteDepartmentMaster(DepartmentMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Department Deleted successfully", error: {} });
    });
};


// SalaryHeadMaster CRUD


exports.SaveSalaryHeadMaster = function (req, res) {

    if (!req.body.GradeName) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SalaryHeadMasterModel = new SalaryHeadMasterModuleTask(req.body);
    SalaryHeadMasterModuleTask.saveSalaryHeadMasterModel(SalaryHeadMasterModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Salary Head successfully", error: {} });
        }
    });
}
exports.getSalaryHeadMaster = function (req, res) {

    SalaryHeadMasterModuleTask.getSalaryHeadMaster(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Salary Head Fetched", data: { SalaryHeadMaster: task } });
    });
}

exports.updateSalaryHeadMaster = function (req, res) {
    if (!req.body.GradeName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var SalaryHeadMasterModel = new SalaryHeadMasterModuleTask(req.body);
    SalaryHeadMasterModuleTask.updateSalaryHeadMasterModel(SalaryHeadMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Salary Head Updated successfully", error: {} });
    });
};
exports.deleteSalaryHeadMaster = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var SalaryHeadMasterModel = new SalaryHeadMasterModuleTask(req.body);
    SalaryHeadMasterModuleTask.deleteSalaryHeadMaster(SalaryHeadMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Salary Head Deleted successfully", error: {} });
    });
};


// GradeMaster CRUD


exports.SaveGradeMaster = function (req, res) {

    if (!req.body.Grade) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var GradeMasterModel = new GradeMasterModuleTask(req.body);
    GradeMasterModuleTask.saveGradeMasterModel(GradeMasterModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Grade Saved Saved successfully", error: {} });
        }
    });
}
exports.getGradeMaster = function (req, res) {

    GradeMasterModuleTask.getGradeMaster(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Grade Fetched", data: { GradeMaster: task } });
    });
}

exports.updateGradeMaster = function (req, res) {
    if (!req.body.Grade) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var GradeMasterModel = new GradeMasterModuleTask(req.body);
    GradeMasterModuleTask.updateGradeMasterModel(GradeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Grade Updated successfully", error: {} });
    });
};
exports.deleteGradeMaster = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var GradeMasterModel = new GradeMasterModuleTask(req.body);
    GradeMasterModuleTask.deleteGradeMaster(GradeMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Grade Deleted successfully", error: {} });
    });
};

// LeaveAllotmentMaster CRUD


exports.SaveLeaveAllotmentMaster = function (req, res) {

    if (!req.body.NoOfLeave) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var LeaveAllotmentMasterModel = new LeaveAllotmentMasterModuleTask(req.body);
    LeaveAllotmentMasterModuleTask.saveLeaveAllotmentMasterModel(LeaveAllotmentMasterModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Leave Allotment Saved Saved successfully", error: {} });
        }
    });
}
exports.getLeaveAllotmentMaster = function (req, res) {

    LeaveAllotmentMasterModuleTask.getLeaveAllotmentMaster(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leave Allotment Fetched", data: { LeaveAllotmentMaster: task } });
    });
}

exports.updateLeaveAllotmentMaster = function (req, res) {
    if (!req.body.AllotmentId) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var LeaveAllotmentMasterModel = new LeaveAllotmentMasterModuleTask(req.body);
    LeaveAllotmentMasterModuleTask.updateLeaveAllotmentMasterModel(LeaveAllotmentMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leave Allotment Updated successfully", error: {} });
    });
};
exports.deleteLeaveAllotmentMaster = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var LeaveAllotmentMasterModel = new LeaveAllotmentMasterModuleTask(req.body);
    LeaveAllotmentMasterModuleTask.deleteLeaveAllotmentMaster(LeaveAllotmentMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Leave Allotment Deleted successfully", error: {} });
    });
};


// crud MasterRole
exports.saveMasterRole = function (req, res) {
    if (!req.body.Role) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterRoleModel = new MasterRoleModuleTask(req.body);
    MasterRoleModuleTask.saveMasterRole(MasterRoleModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Role Saved Successfully", error: {} });
    });
};
exports.updateMasterRole = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterRoleModel = new MasterRoleModuleTask(req.body);
    MasterRoleModuleTask.updateMasterRole(MasterRoleModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Role Updated Successfully", error: {} });
    });
};
exports.deleteMasterRole = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    MasterRoleModuleTask.deleteMasterRole(req.query.id, function (err, task) {

        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Role Deleted Successfully", error: {} });
    });
};

exports.getMasterRole = function (req, res) {

    MasterRoleModuleTask.getMasterRole(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Roles Fetched", data: { masterRoles: task } });
    });
}



// crud Erp Users
exports.saveMasterUsers = function (req, res) {

    if (!req.body.FullName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterUsersModel = new MasterUsersModuleTask(req.body);
    MasterUsersModuleTask.saveMasterUsers(MasterUsersModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Saved Successfully", error: {} });
    });
};
exports.updateMasterUsers = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterUsersModel = new MasterUsersModuleTask(req.body);
    MasterUsersModuleTask.updateMasterUsers(MasterUsersModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Updated Successfully", error: {} });
    });
};
exports.changeUserPassword = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    MasterUsersModuleTask.changeUserPassword(req.body, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: task, error: {} });
    });
};
exports.deleteMasterUsers = function (req, res) {

    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    MasterUsersModuleTask.deleteMasterUsers(req.query.id, function (err, task) {

        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Deleted Successfully", error: {} });
    });
};

exports.getMasterUsers = function (req, res) {

    MasterUsersModuleTask.getMasterUsers(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Fetched", data: { masterUsers: task } });
    });
}

// crud Erp Users AUTHENTICATION
exports.SaveUserAuthentication = function (req, res) {

    if (!req.body.UserCode) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    MasterUsersAuthenticationModuleTask.SaveUserAuthentication(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Authentication Details Saved Successfully", error: {} });
    });
};
// exports.updateMasterUsers = function (req, res) {
//   if (!req.query.id) {
//       res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
//       return;
//   }
//   var MasterUsersModel = new MasterUsersModuleTask(req.body);
//   MasterUsersModuleTask.updateMasterUsers(MasterUsersModel, function (err, task) {
//       if (err)
//           res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
//       else
//           res.json({ status: true, message: "Users Updated Successfully", error: {} });
//   });
// };
// exports.changeUserPassword = function (req, res) {
//   if (!req.query.id) {
//       res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
//       return;
//   }
//   MasterUsersModuleTask.changeUserPassword(req.body, req.query.id, function (err, task) {
//       if (err)
//           res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
//       else
//           res.json({ status: true, message: task, error: {} });
//   });
// };
exports.UpdateUserAuthentication = function (req, res) {

    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    MasterUsersAuthenticationModuleTask.UpdateUserAuthentication(req.body, function (err, task) {

        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Access Details Updated Successfully", error: {} });
    });
};
exports.DeleteUserAuthentication = function (req, res) {

    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    MasterUsersAuthenticationModuleTask.DeleteUserAuthentication(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Users Access Details Deleted Successfully", error: {} });
    });
};

// exports.getMasterUsers=function(req,res){

//   MasterUsersModuleTask.getMasterUsers(req, function (err, task) {
//       if (err)
//           res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
//       else
//           res.json({ status: true, message: "Users Fetched", data: { masterUsers: task } });
//   });
// }



exports.getUrl = function (req, res) {

    MasterUsersAuthenticationModuleTask.getUrl(req.query.user_id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Urls Fetched", data: { accessUrls: task } });
    });
}
exports.getUserAccessUrls = function (req, res) {

    MasterUsersAuthenticationModuleTask.getUserAccessUrls(req.query.user_id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Urls Fetched", data: { UserAccessUrls: task } });
    });
}
// ------------------------------- bookcategory CRUD ----------------------------------------------------
exports.savebookcategory = function (req, res) {
    
    var DataModel = new BookCategoryTask(req.body);
    BookCategoryTask.savebookcategoryModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getbookcategory = function (req, res) {
    BookCategoryTask.getbookcategoryDetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bookcategoru details fetched", data: { bookcategoryDetails: task } });
    });
};

exports.updatebookcategory = function (req, res) {
 
    var DataModel = new BookCategoryTask(req.body);

    BookCategoryTask.updatebookcategoryModel(DataModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deletebookcategory = function (req, res) {
    BookCategoryTask.deletebookcategoryModel(req.query.BookCategoryId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Fine CRUD ----------------------------------------------------
exports.savefine = function (req, res) {
    
    var DataModel = new FineTask(req.body);
    FineTask.savefineModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateFine = function (req, res) {
    
    var DataModel = new FineTask(req.body);
    FineTask.UpdateFine(DataModel, function (err, task) {
        
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been Updated Successfully", error: {} });
        }
    });
};
exports.getfine = function (req, res) {
    FineTask.getfineDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Fine details fetched", data: { FineDetails: task } });
    });
};


// ------------------------------- IssueDay CRUD ----------------------------------------------------
exports.saveissueday = function (req, res) {
    
    var DataModel = new IssueDayTask(req.body);
    IssueDayTask.saveissuedayModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateIssueDay = function (req, res) {
    
    var DataModel = new IssueDayTask(req.body);
    IssueDayTask.UpdateIssueDay(DataModel, function (err, task) {
        
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been Updated Successfully", error: {} });
        }
    });
};

exports.getissueday = function (req, res) {
    IssueDayTask.getissuedayDetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issueday details fetched", data: { IssueDayDetails: task } });
    });
};

// ------------------------------- IssueDay Counter CRUD ----------------------------------------------------
exports.saveissuedaycounter = function (req, res) {
    
    var DataModel = new IssueDayCounterTask(req.body);
    IssueDayCounterTask.saveissuedaycounterModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateIssueDayCounter = function (req, res) {
    
    var DataModel = new IssueDayCounterTask(req.body);
    IssueDayCounterTask.UpdateIssueDayCounter(DataModel, function (err, task) {
        
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been Updated Successfully", error: {} });
        }
    });
};

exports.getissuedaycounter = function (req, res) {
    IssueDayCounterTask.getissuedaycounterDetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issueday counter details fetched", data: { IssueDayCounterDetails: task } });
    });
};

// ------------------------------- ReIssueDay CRUD ----------------------------------------------------
exports.savereissueday = function (req, res) {
    
    var DataModel = new ReIssueDayTask(req.body);
    ReIssueDayTask.savereissuedayModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateReIssueDay = function (req, res) {
    
    var DataModel = new ReIssueDayTask(req.body);
    ReIssueDayTask.UpdateReIssueDay(DataModel, function (err, task) {
        
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been Updated Successfully", error: {} });
        }
    });
};

exports.getreissueday = function (req, res) {
    ReIssueDayTask.getreissuedayDetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Reissueday details fetched", data: { ReIssueDayDetails: task } });
    });
};

// ------------------------------- ReIssueDay Counter CRUD ----------------------------------------------------
exports.savereissuedaycounter = function (req, res) {
    
    var DataModel = new ReissueDayCounterTask(req.body);
    ReissueDayCounterTask.savereissuedaycounterModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.UpdateReIssueDayCounter = function (req, res) {
    
    var DataModel = new ReissueDayCounterTask(req.body);
    ReissueDayCounterTask.UpdateReIssueDayCounter(DataModel, function (err, task) {
        
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been Updated Successfully", error: {} });
        }
    });
};

exports.getreissuedaycounter = function (req, res) {
    ReissueDayCounterTask.getreissuedaycounterDetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Reissue counter details fetched", data: { ReIssueDayCounterDetails: task } });
    });
};


// -------------------------------------- Master Hostel ----------------------------
exports.getHostelMaster = function (req, res) {
    HostelMasterTask.getHostelMasterDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "HostelMaster details fetched", data: { HostelMaster: task } });
    });
};

exports.saveHostelMaster = function (req, res) {
  
    var HostelMasterModel = new HostelMasterTask(req.body);

    HostelMasterTask.saveHostelMasterModel(HostelMasterModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateHostelMaster = function (req, res) {
  
    var HostelMasterModel = new HostelMasterTask(req.body);

    HostelMasterTask.updateHostelMasterModel(HostelMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteHostelMaster = function (req, res) {
   
    var HostelMasterModel = new HostelMasterTask(req.body);

    HostelMasterTask.deleteHostelMasterModel(HostelMasterModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// --------------- Hostel In TIme master ----------
exports.saveHostelIntime = function (req, res) {
  
    var HostelIntimeModel = new HostelInTimeTask(req.body);

    HostelInTimeTask.saveHostelIntimeModel(HostelIntimeModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getHostelInTimeDetails = function (req, res) {
    var HostelIntimeModel = new HostelInTimeTask(req.body);

    HostelInTimeTask.getHostelInTimeDetails(HostelIntimeModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Hostel details fetched", data: { HostelList: task } });
    });
};

exports.updateHostelIntime = function (req, res) {
  
    var HostelIntimeModel = new HostelInTimeTask(req.body);

    HostelInTimeTask.updateHostelIntimeModel(HostelIntimeModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

// ------------------------------- Lab Master CRUD ----------------------------------------------------
exports.getLab = function (req, res) {
    MasterLabTask.getLabDetails(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Lab details fetched", data: { LabList: task } });
    });
};

exports.saveLab = function (req, res) {
    
    var MasterLabModel = new MasterLabTask(req.body);

    MasterLabTask.saveLabModel(MasterLabModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateLab = function (req, res) {
    var MasterLabModel = new MasterLabTask(req.body);

    MasterLabTask.updateLabModel(MasterLabModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deleteLab = function (req, res) {
   
    var MasterLabModel = new MasterLabTask(req.body);

    MasterLabTask.deleteLabModel(MasterLabModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// -------------------- User Login ------------------
exports.LoginUser = function (req, res) {
    var LoginUserModel = new LoginUserTask(req.body);

    LoginUserTask.LoginUserDetails(LoginUserModel, req.query.id,req.query.Password, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Login details fetched", data: { LoginData: task } });
    });
};

exports.LoginStudent = function (req, res) {
    var LoginUserModel = new LoginUserTask(req.body);

    LoginUserTask.LoginStudentDetails(LoginUserModel, req.query.id,req.query.Password, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Login details fetched", data: { LoginData: task } });
    });
};

exports.checkLastWorkingDate = function (req, res) {
    LoginUserTask.checkLastWorkingDate(req.query.currentDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Last Working details fetched", data: { } });
    });
}
//College Master Details
exports.GetFYear = function(req, res) {
    MasterCollegeModelTaskModule.GetFYear(req, function(err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "From Year details fetched", data: { FYFrom: task } });
    });
};
exports.GetCollegeMasterDetails = function(req, res) {
    MasterCollegeModelTaskModule.GetCollegeMasterDetails(req, function(err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        } else {
            res.json({ status: true, message: "College details fetched", data: { CollageData: task } });
        }
    });
};

exports.saveMasterCollegeDetails = function(req, res) {
    if (!req.body.SchoolName) {
        res.send({ Status: false, error: { message: 'Fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterCollegeDetailsModel = new MasterCollegeModelTaskModule(req.body);
    MasterCollegeModelTaskModule.saveMasterCollegeDetails(MasterCollegeDetailsModel, function(err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        } else {
            res.json({ status: true, message: "College Details Saved Successfully", error: {} });
        }
    });
}
exports.updateMasterCollegeDetails = function(req, res) {
        if (!req.body.SchoolName) {
            res.send({ Status: false, error: { message: 'Fields are empty', code: "401" }, data: {} });
            return;
        }
        var MasterCollegeDetailsModel = new MasterCollegeModelTaskModule(req.body);
        MasterCollegeModelTaskModule.updateMasterCollegeDetails(MasterCollegeDetailsModel, function(err, task) {
            if (err) {
                res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
            } else {
                res.json({ status: true, message: "College Details Update Successfully", error: {} });
            }
        });
    }


    // ------------------------------- Book Details CRUD ----------------------------------------------------
exports.savebookdetails = function (req, res) {
    
    var DataModel = new BookDetailTask(req.body);
    BookDetailTask.savebookdetailsModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getbookdetails = function (req, res) {
    BookDetailTask.getbookDetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bookcategoru details fetched", data: { bookDetails: task } });
    });
};

exports.updatebookdetails = function (req, res) {
 
    var DataModel = new BookDetailTask(req.body);

    BookDetailTask.updatebookdetailsModel(DataModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deletebookdetails = function (req, res) {
    BookDetailTask.deletebookdetailsModel(req.query.BookId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

// ------------------------------- Journal Details CRUD ----------------------------------------------------
exports.savejournaldetails = function (req, res) {
    
    var DataModel = new JournalDetailTask(req.body);
    JournalDetailTask.savejournaldetailsModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.getjournaldetails = function (req, res) {
    JournalDetailTask.getjournaldetails(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Bookcategoru details fetched", data: { journalDetails: task } });
    });
};

exports.updatejournaldetails = function (req, res) {
 
    var DataModel = new JournalDetailTask(req.body);

    JournalDetailTask.updatejournaldetailsModel(DataModel, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been successfully UPDATED", error: {} });
    });
};

exports.deletejournaldetails = function (req, res) {
    JournalDetailTask.deletejournaldetailsModel(req.query.JournalId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Record has been DELETED successfully", error: {} });
    });
};

