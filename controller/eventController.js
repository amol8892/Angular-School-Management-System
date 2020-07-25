'use strict';
var MasterEventModuleTask = require('../model/MasterEvent/MasterEvent');
var EventDailyNotesModuleTask = require('../model/EventDailyNotes/EventDailyNotes');
var MasterActivityModuleTask = require('../model/MasterActivity/MasterActivity');
var MasterSubEventModuleTask = require('../model/MasterSubEvent/MasterSubEvent');
var MasterSubActivityModuleTask = require('../model/MasterSubActivity/MasterSubActivity');
var PlannerEventCalenderModuleTask = require('../model/PlannerEventCalender/PlannerEventCalender');
var PlannerActivityModuleTask = require('../model/PlannerActivity/PlannerActivity');
var ActivityStudentAttendanceModuleTask = require('../model/ActivityStudentAttendance/ActivityStudentAttendance');
var EventDetailsModuleTask = require('../model/EventDetails/EventDetails');
var StudentEventParticipationModuleTask = require('../model/StudentEventParticipation/StudentEventParticipation');
var StudentEventWinnerModuleTask = require('../model/StudentEventWinner/StudentEventWinner');
var PlannerViewEventsModuleTask = require('../model/PlannerViewEvents/PlannerViewEvents');


// MasterEvent CRUD
exports.SaveMasterEvent = function (req, res) {

    if (!req.body.Event) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterEventModel = new MasterEventModuleTask(req.body);
    MasterEventModuleTask.saveMasterEventModel(MasterEventModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Event Saved successfully", error: {} });
        }
    });
}
exports.getMasterEvent = function (req, res) {

    MasterEventModuleTask.getMasterEvent(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Fetched", data: { MasterEvent: task } });
    });
}

exports.updateMasterEvent = function (req, res) {
    if (!req.body.Event) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterEventModel = new MasterEventModuleTask(req.body);
    MasterEventModuleTask.updateMasterEventModel(MasterEventModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Updated successfully", error: {} });
    });
};
exports.deleteMasterEvent = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterEventModel = new MasterEventModuleTask(req.body);
    MasterEventModuleTask.deleteMasterEvent(MasterEventModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Deleted successfully", error: {} });
    });
};


// Master Sub Event CRUD
exports.saveMasterSubEvent = function (req, res) {

    if (!req.body.SubEvent) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterSubEventModel = new MasterSubEventModuleTask(req.body);
    MasterSubEventModuleTask.saveMasterSubEventModel(MasterSubEventModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Sub Event Saved successfully", error: {} });
        }
    });
}
exports.getMasterSubEvent = function (req, res) {

    MasterSubEventModuleTask.getMasterSubEvent(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Event Fetched", data: { MasterSubEvent: task } });
    });
}

exports.updateMasterSubEvent = function (req, res) {
    if (!req.body.SubEvent) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterSubEventModel = new MasterSubEventModuleTask(req.body);
    MasterSubEventModuleTask.updateMasterSubEventModel(MasterSubEventModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Event Updated successfully", error: {} });
    });
};
exports.deleteMasterSubEvent = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterSubEventModel = new MasterSubEventModuleTask(req.body);
    MasterSubEventModuleTask.deleteMasterSubEvent(MasterSubEventModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Event Deleted successfully", error: {} });
    });
};


// MasterActivity CRUD
exports.SaveMasterActivity = function (req, res) {

    if (!req.body.Activity) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterActivityModel = new MasterActivityModuleTask(req.body);
    MasterActivityModuleTask.saveMasterActivityModel(MasterActivityModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Activity Saved successfully", error: {} });
        }
    });
}
exports.getMasterActivity = function (req, res) {

    MasterActivityModuleTask.getMasterActivity(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Fetched", data: { MasterActivity: task } });
    });
}

exports.updateMasterActivity = function (req, res) {
    if (!req.body.Activity) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterActivityModel = new MasterActivityModuleTask(req.body);
    MasterActivityModuleTask.updateMasterActivityModel(MasterActivityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Updated successfully", error: {} });
    });
};
exports.deleteMasterActivity = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterActivityModel = new MasterActivityModuleTask(req.body);
    MasterActivityModuleTask.deleteMasterActivity(MasterActivityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Deleted successfully", error: {} });
    });
};
// MasterSubActivity CRUD
exports.saveMasterSubActivity = function (req, res) {

    if (!req.body.SubActivity) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterSubActivityModel = new MasterSubActivityModuleTask(req.body);
    MasterSubActivityModuleTask.saveMasterSubActivityModel(MasterSubActivityModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Sub Activity Saved successfully", error: {} });
        }
    });
}
exports.getMasterSubActivity = function (req, res) {

    MasterSubActivityModuleTask.getMasterSubActivity(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Activity Fetched", data: { MasterSubActivity: task } });
    });
}

exports.updateMasterSubActivity = function (req, res) {
    if (!req.body.SubActivity) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterSubActivityModel = new MasterSubActivityModuleTask(req.body);
    MasterSubActivityModuleTask.updateMasterSubActivityModel(MasterSubActivityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Activity Updated successfully", error: {} });
    });
};
exports.deleteMasterSubActivity = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterSubActivityModel = new MasterSubActivityModuleTask(req.body);
    MasterSubActivityModuleTask.deleteMasterSubActivity(MasterSubActivityModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Activity Deleted successfully", error: {} });
    });
};


// EventDailyNotes CRUD
exports.SaveEventDailyNotes = function (req, res) {

    if (!req.body.Notice) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EventDailyNotesModel = new EventDailyNotesModuleTask(req.body);
    EventDailyNotesModuleTask.saveEventDailyNotesModel(EventDailyNotesModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Event Daily Notes Saved successfully", error: {} });
        }
    });
}
exports.getEventDailyNotes = function (req, res) {

    EventDailyNotesModuleTask.getEventDailyNotes(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Daily Notes Fetched", data: { EventDailyNotes: task } });
    });
}

exports.updateEventDailyNotes = function (req, res) {
    if (!req.body.Notice) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var EventDailyNotesModel = new EventDailyNotesModuleTask(req.body);
    EventDailyNotesModuleTask.updateEventDailyNotesModel(EventDailyNotesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Daily Notes Updated successfully", error: {} });
    });
};
exports.deleteEventDailyNotes = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var EventDailyNotesModel = new EventDailyNotesModuleTask(req.body);
    EventDailyNotesModuleTask.deleteEventDailyNotes(EventDailyNotesModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Daily Notes Deleted successfully", error: {} });
    });
};

// PlannerEventCalender CURD

exports.getSubEventForSelectEvent = function (req, res) {

    PlannerEventCalenderModuleTask.getSubEventForSelectEvent(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Event Fetched", data: { MasterSubEvent: task } });
    });
}
exports.getTeachers = function (req, res) {

    PlannerEventCalenderModuleTask.getTeachers(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Event Fetched", data: { Teachers: task } });
    });
}

exports.saveEventCalender = function (req, res) {

    if (!req.body.EventDate) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    PlannerEventCalenderModuleTask.saveEventCalender(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Event Calender Saved successfully", error: {} });
        }
    });
}
exports.getEventCalender = function (req, res) {

    PlannerEventCalenderModuleTask.getEventCalender(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Calender Fetched", data: { EventCalender: task } });
    });
}
exports.getEventCalenderTrans = function (req, res) {

    PlannerEventCalenderModuleTask.getEventCalenderTrans(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Trans Calender Fetched", data: { EventCalenderTrans: task } });
    });
}

exports.updateEventCalender = function (req, res) {
    if (!req.body.EventDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    PlannerEventCalenderModuleTask.updateEventCalender(req.body, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Calender Updated successfully", error: {} });
    });
};
exports.deleteEventCalender = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    PlannerEventCalenderModuleTask.deleteEventCalender(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Calender Deleted successfully", error: {} });
    });
};


// PlannerActivity CURD

exports.getSubActivityByActivity = function (req, res) {

    PlannerActivityModuleTask.getSubActivityByActivity(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Event Fetched", data: { MasterSubActivityList: task } });
    });
}

exports.saveActivityPlanner = function (req, res) {

    if (!req.body.PlannerDate) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    PlannerActivityModuleTask.saveActivityPlanner(req.body, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Activity Planner Saved successfully", error: {} });
        }
    });
}
exports.getActivityPlanner = function (req, res) {

    PlannerActivityModuleTask.getActivityPlanner(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Planner Fetched", data: { ActivityPlanner: task } });
    });
}
exports.getActivityPlannerTrans = function (req, res) {

    PlannerActivityModuleTask.getActivityPlannerTrans(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Trans Calender Fetched", data: { ActivityPlannerTrans: task } });
    });
}

exports.updateActivityPlanner = function (req, res) {
    if (!req.body.PlannerDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    PlannerActivityModuleTask.updateActivityPlanner(req.body, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Planner Updated successfully", error: {} });
    });
};
exports.deleteActivityPlanner = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    PlannerActivityModuleTask.deleteActivityPlanner(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Planner Deleted successfully", error: {} });
    });
};

// ActivityStudentAttendance CURD

exports.getActivityDate = function (req, res) {
    ActivityStudentAttendanceModuleTask.getActivityDate(req.query.CourseId, req.query.BranchId, req.query.year, req.query.SessionId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activity Dates Fetched", data: { ActivityDateList: task } });
    });
}
exports.getActivityByDate = function (req, res) {
    ActivityStudentAttendanceModuleTask.getActivityByDate(req.query.PlannerDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Activities by Date Fetched", data: { ActivitiesByDatesList: task } });
    });
}
exports.getSubActivityByDate = function (req, res) {
    ActivityStudentAttendanceModuleTask.getSubActivityByDate(req.query.PlannerDate, req.query.ActivityId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Sub Activities by Date Fetched", data: { SubActivitiesByDatesList: task } });
    });
}
exports.SaveStudentActivityAttendance = function (req, res) {
    ActivityStudentAttendanceModuleTask.SaveStudentActivityAttendance(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Activity Attendance Saved Successfully", error: { } });
    });
}

exports.GetStudentActivityAttendance = function (req, res) {
    ActivityStudentAttendanceModuleTask.GetStudentActivityAttendance(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Activity Attendance Feteched", data: { StudentActivityAttendance : task} });
    });
}
exports.GetStudentActivityAttendanceTrans = function (req, res) {
    ActivityStudentAttendanceModuleTask.GetStudentActivityAttendanceTrans(req.query.AttendanceId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Activity Attendance Trans Feteched", data: { StudentIdList : task} });
    });
}
exports.UpdateStudentActivityAttendance = function (req, res) {
    ActivityStudentAttendanceModuleTask.UpdateStudentActivityAttendance(req.body, req.query.AttendanceId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Activity Attendance Updated Successfully", error: { } });
    });
}


// EventDetails CURD

exports.getEventsBySessionYear = function (req, res) {
    EventDetailsModuleTask.getEventsBySessionYear(req.query.SessionId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Events By Session Year Fetched", data: { EventsBySessionYear: task } });
    });
}
exports.UpdateEventDetails = function (req, res) {
    EventDetailsModuleTask.UpdateEventDetails(req.body, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Detail Added Successfully", error: { } });
    });
}


// Student Event Participation CURD

exports.getStudentByBranchEvent = function (req, res) {
    StudentEventParticipationModuleTask.getStudentByBranchEvent(req.query, function (err, task) {
        
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Students Fetched", data: { StudentList: task } });
    });
}
exports.getEventByDate = function (req, res) {
    StudentEventParticipationModuleTask.getEventByDate(req.query.EventDate, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Events By Event Date Fetched", data: { EventsByEventDate: task } });
    });
}
exports.getContactInfoOfStudent = function (req, res) {
    StudentEventParticipationModuleTask.getContactInfoOfStudent(req.query.StudentId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Contact Info Of Student Fetched", data: { ContactInfoOfStudent: task } });
    });
}


exports.saveStudentParticipation = function (req, res) {

    if (!req.body.EventDate) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    StudentEventParticipationModuleTask.saveStudentParticipation(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Student Participation Saved successfully", error: {} });
        }
    });
}
exports.getStudentParticipation = function (req, res) {

    StudentEventParticipationModuleTask.getStudentParticipation(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Participation Fetched", data: { StudentParticipation: task } });
    });
}
exports.getStudentParticipationTrans = function (req, res) {

    StudentEventParticipationModuleTask.getStudentParticipationTrans(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Participation Fetched", data: { StudentParticipationTrans: task } });
    });
}

exports.updateStudentParticipation = function (req, res) {
    if (!req.body.EventDate) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    StudentEventParticipationModuleTask.updateStudentParticipation(req.body, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Participation Updated successfully", error: {} });
    });
};
exports.deleteStudentParticipation = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    StudentEventParticipationModuleTask.deleteStudentParticipation(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student Participation Deleted successfully", error: {} });
    });
};


// Student Event Winner CURD

exports.getStudentByEventAndSubevent = function (req, res) {
    StudentEventWinnerModuleTask.getStudentByEventAndSubevent(req.query.EventDate, req.query.SubEventId, req.query.EventId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Student By Event And Subevent Fetched", data: { StudentByEventAndSubevent: task } });
    });
}
exports.getSubEventForSelectEventForThatDate = function (req, res) {
    StudentEventWinnerModuleTask.getSubEventForSelectEventForThatDate(req.query.EventDate, req.query.EventId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Subevent By Event Fetched", data: { SubeventByEvent: task } });
    });
}
exports.saveEventWinnerList = function (req, res) {
    StudentEventWinnerModuleTask.saveEventWinnerList(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Winner Saved Successfully", error: { } });
    });
}
exports.getEventWinnerList = function (req, res) {
    StudentEventWinnerModuleTask.getEventWinnerList(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Winner Fetched", data: { EventWinnerList : task } });
    });
}
exports.deleteEventWinner = function (req, res) {
    StudentEventWinnerModuleTask.deleteEventWinner(req.query.WinnerId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Event Winner Deleted Successfully",  error: { } });
    });
}

// Planner View Events CURD

exports.getEventDetailsBySessionDate = function (req, res) {
    PlannerViewEventsModuleTask.getEventDetailsBySessionDate(req.query.EventDate, req.query.SessionId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Events Details Fetched", data: { EventDetailsList: task } });
    });
}