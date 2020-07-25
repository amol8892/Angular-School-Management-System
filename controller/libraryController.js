'use strict';
var AccessionRegisterTask = require('../model/AccessionModel/accessionModel');
var LibraryPurchaseOrderTask = require('../model/LibraryPurchaseOrder/LibraryPurchaseOrder');
var LibraryPurchaseOrderInvoiceTask = require('../model/LibraryPurchaseOrderInvoice/LibraryPurchaseOrderInvoice');
var LibraryAccessionRegisterTask = require('../model/LibraryAccessionRegister/LibraryAccessionRegister');
var LibraryDirectAccessionRegisterTask = require('../model/LibraryDirectAccessionRegister.js/LibraryDirectAccessionRegister');
var LibraryEditDirectAccessionRegisterTask = require('../model/LibraryEditDirectAccessionRegister/LibraryEditDirectAccessionRegister');
var LibraryOPACTask = require('../model/LibraryOPAC/LibraryOPAC');
var LibraryBookTransactionTask = require('../model/LibraryBookTransaction/LibraryBookTransaction');
var LibraryBookTransactionReferenceTask = require('../model/LibraryBookTransactionReference/LibraryBookTransactionReference');
var BookBindingTask = require('../model/BookBinding/BookBinding');
var BookDiscontinueTask = require('../model/BookDiscontinue/BookDiscontinue');
var LibraryFineDetailsTask = require('../model/LibraryFineDetails/LibraryFineDetails');
var LibraryInvoicePaymentTask = require('../model/LibraryInvoicePayment/LibraryInvoicePayment');

// -------------------------------  Front desk CRUD ----------------------------------------------------

exports.saveaccessionregistration = function (req, res) {

    var DataModel = new AccessionRegisterTask(req.body);

    AccessionRegisterTask.saveaccessionModel(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been SAVED successfully", error: {} });
        }
    });
};

exports.updateaccessionregistration = function (req, res) {

    var DataModel = new AccessionRegisterTask(req.body);

    AccessionRegisterTask.updateaccessionregistration(DataModel, function (err, task) {
        if (err) {
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Record has been UPDATED successfully", error: {} });
        }
    });
};

exports.getbookdetailsbyId = function (req, res) {
    AccessionRegisterTask.getbookdetailsbyId(req.query.bookid, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { bookdetails: task } });
    });
};

exports.getaccession = function (req, res) {
    AccessionRegisterTask.getaccession(req.query.SchoolId, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { accessiondetails: task } });
    });
};

exports.getaccessionbyId = function (req, res) {
    AccessionRegisterTask.getaccessionbyId(req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { accessiondetails: task } });
    });
};

// LibraryPurchaseOrder CURD

exports.getBooksTitle = function (req, res) {
    LibraryPurchaseOrderTask.getBooksTitle(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Books Title details fetched", data: { MasterBooksTitleList: task } });
    });
};
exports.getJournalTitle = function (req, res) {
    LibraryPurchaseOrderTask.getJournalTitle(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Journal Title details fetched", data: { MasterJournalTitleList: task } });
    });
};
exports.getVendorDetailsByVendorId = function (req, res) {
    LibraryPurchaseOrderTask.getVendorDetailsByVendorId(req.query.Vendor_ID, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Vendor details fetched", data: { MasterVendorDetails: task } });
    });
};
exports.getBookDetailsByBookId = function (req, res) {
    LibraryPurchaseOrderTask.getBookDetailsByBookId(req.query.Book_Id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { MasterBookDetails: task } });
    });
};
exports.getLibraryPurchaseOrderByVendor = function (req, res) {
    LibraryPurchaseOrderTask.getLibraryPurchaseOrderByVendor(req.query.Vendor_ID, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { LibraryPurchaseOrderByVendor: task } });
    });
};
exports.getLibraryPurchaseOrderByPONO = function (req, res) {
    LibraryPurchaseOrderTask.getLibraryPurchaseOrderByPONO(req.query.PO_NO, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { LibraryPurchaseOrderByPONO: task } });
    });
};


exports.getLibraryPurchaseOrder = function (req, res) {
    LibraryPurchaseOrderTask.getLibraryPurchaseOrder(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Purchase Order details fetched", data: { LibraryPurchaseOrder: task } });
    });
};
exports.getLibraryPurchaseOrderTrans = function (req, res) {
    LibraryPurchaseOrderTask.getLibraryPurchaseOrderTrans(req.query.PO_No, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Purchase Order Trans details fetched", data: { LibraryPurchaseOrderTrans: task } });
    });
};

exports.saveLibraryPurchaseOrder = function (req, res) {
    LibraryPurchaseOrderTask.saveLibraryPurchaseOrder(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Purchase Order Saved Successfully", error: {} });
    });
};
exports.updateLibraryPurchaseOrder = function (req, res) {
    LibraryPurchaseOrderTask.updateLibraryPurchaseOrder(req.query.PO_No, req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Purchase Order Updated Successfully", error: {} });
    });
};
exports.deleteLibraryPurchaseOrder = function (req, res) {
    LibraryPurchaseOrderTask.deleteLibraryPurchaseOrder(req.query.PO_No, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Purchase Order Deleted Successfully", error: {} });
    });
};


//-----------------------------------------LibraryPurchaseOrderInvoice CURD

exports.getLibraryPurchaseOrderInvoiceByVendor = function (req, res) {
    LibraryPurchaseOrderInvoiceTask.getLibraryPurchaseOrderInvoiceByVendor(req.query.Vendor_ID, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { LibraryPurchaseOrderInvoiceByVendor: task } });
    });
};
exports.getLibraryPurchaseOrderInvoiceByPONO = function (req, res) {
    LibraryPurchaseOrderInvoiceTask.getLibraryPurchaseOrderInvoiceByPONO(req.query.PO_NO, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", data: { LibraryPurchaseOrderInvoiceByPONO: task } });
    });
};
exports.checkLibraryInvoiceNo = function (req, res) {
    LibraryPurchaseOrderInvoiceTask.checkLibraryInvoiceNo(req.query.Invoice_No, req.query.Vendor_ID, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Invoice No details fetched", data: { LibraryInvoiceNo: task } });
    });
};

exports.cancelBookDetailsForLibraryInvoice = function (req, res) {
    LibraryPurchaseOrderInvoiceTask.cancelBookDetailsForLibraryInvoice(req.query.Id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book details fetched", error: {} });
    });
};
exports.saveLibraryPurchaseOrderInvoice = function (req, res) {
    LibraryPurchaseOrderInvoiceTask.saveLibraryPurchaseOrderInvoice(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Library Purchase Order Invoice Saved Successfully", error: {} });
    });
};


//-----------------------------------------LibraryAccessionRegister CURD
exports.getPrintAccesstionNumber = function (req, res) {
    LibraryAccessionRegisterTask.getPrintAccesstionNumber(req.query.Type, req.query.Book_Id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Accesstion Number details fetched", data: { PrintAccesstionNumberList: task } });
    });
};
exports.getJournalsFromGeneratedInvoices = function (req, res) {
    LibraryAccessionRegisterTask.getJournalsFromGeneratedInvoices(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Journals details fetched", data: { JournalsFromGeneratedInvoices: task } });
    });
};
exports.getBooksFromGeneratedInvoices = function (req, res) {
    LibraryAccessionRegisterTask.getBooksFromGeneratedInvoices(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Books details fetched", data: { BooksFromGeneratedInvoices: task } });
    });
};
exports.getBookDetailsByBookIdFromInvoice = function (req, res) {
    LibraryAccessionRegisterTask.getBookDetailsByBookIdFromInvoice(req.query.Book_Id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Books details fetched", data: { BookDetailsByBookIdFromInvoice: task } });
    });
};
exports.getNextAccessionNumber = function (req, res) {
    LibraryAccessionRegisterTask.getNextAccessionNumber(req.query.Book_Id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Next Accession Number fetched", data: { AccessionNo: task } });
    });
};
exports.saveAccessionRegister = function (req, res) {
    LibraryAccessionRegisterTask.saveAccessionRegister(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Accession Register Details Saved Successfully", error: {} });
    });
};

//-----------------------------------------LibraryDirectAccessionRegister CURD


exports.saveDirectAccessionRegister = function (req, res) {
    LibraryDirectAccessionRegisterTask.saveDirectAccessionRegister(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Direct Accession Register Details Saved Successfully", error: {} });
    });
};


//-----------------------------------------LibraryEditDirectAccessionRegister Curd

exports.getAccessionJournalsBooksFromAccessionRegister = function (req, res) {
    LibraryEditDirectAccessionRegisterTask.getAccessionJournalsBooksFromAccessionRegister(req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Direct Accession Register Nos Fetched", data: { AccessionList: task } });
    });
};
exports.getaccessionDetailsById = function (req, res) {
    LibraryEditDirectAccessionRegisterTask.getaccessionDetailsById(req.query.Accession_No, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Direct Accession Register Nos Fetched", data: { AccessionDetails: task } });
    });
};
exports.updateDirectAccessionRegister = function (req, res) {
    LibraryEditDirectAccessionRegisterTask.updateDirectAccessionRegister(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Direct Accession Register Updated Successfully", error: {} });
    });
};

//-----------------------------------------LibraryOPAC Curd

exports.searchOPAC = function (req, res) {
    LibraryOPACTask.searchOPAC(req.query.Type, req.query.searchName, req.query.searchValue, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Search OPAC Fetched", data: { BookAccessionDetailsList: task } });
    });
};

//-----------------------------------------LibraryBook Transaction Curd

exports.getIssuedBooksLibraryDetails = function (req, res) {
    LibraryBookTransactionTask.getIssuedBooksLibraryDetails(req.query.Type, req.query.user_id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Books Library Details Fetched", data: { IssuedBooksLibraryDetails: task } });
    });
};
exports.getAvailableAccessionNo = function (req, res) {
    LibraryBookTransactionTask.getAvailableAccessionNo(req.query, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Available Accession No Fetched", data: { AvailableAccessionNo: task } });
    });
};
exports.GetIssueDayCountByType = function (req, res) {
    LibraryBookTransactionTask.GetIssueDayCountByType(req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "issue Day Counter Fetched", data: { issueDayCounter: task } });
    });
};
exports.checkBookAvailableByBarcode = function (req, res) {
    LibraryBookTransactionTask.checkBookAvailableByBarcode(req.query.Barcode_No, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Barcode No Fetched", data: { BarcodeNoDetails: task } });
    });
};
exports.getAccessionNoOfIssuedBooks = function (req, res) {
    LibraryBookTransactionTask.getAccessionNoOfIssuedBooks(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Books By User Fetched", data: { AccessionNoOfIssuedBooks: task } });
    });
};
exports.getReissuedBooksByUser = function (req, res) {
    LibraryBookTransactionTask.getReissuedBooksByUser(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Reissued Books By User Fetched", data: { ReissuedBooksByUser: task } });
    });
};
exports.reissueLibraryBook = function (req, res) {
    LibraryBookTransactionTask.reissueLibraryBook(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Reissued Book", err: {} });
    });
};
exports.returnLibraryBook = function (req, res) {
    LibraryBookTransactionTask.returnLibraryBook(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Returned", err: {} });
    });
};
exports.getReturnedBooksLibraryDetails = function (req, res) {
    LibraryBookTransactionTask.getReturnedBooksLibraryDetails(req.query.Type, req.query.user_id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Returned Books By User Fetched", data: { ReturnedBooksLibraryDetails: task } });
    });
};

exports.getLibraryFineForUser = function (req, res) {
    LibraryBookTransactionTask.getLibraryFineForUser(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "fine Fetched", data: { fine: task } });
    });
};
exports.issueLibraryBook = function (req, res) {
    LibraryBookTransactionTask.issueLibraryBook(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Issued", error: {} });
    });
};

//-----------------------------------------LibraryBook Transaction Reference Curd

exports.getAccessionNoOfReferenceBook = function (req, res) {
    LibraryBookTransactionReferenceTask.getAccessionNoOfReferenceBook(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Accession Fetched", data: { AccessionNoOfReferenceBook: task } });
    });
};
exports.getIssuedBooksLibraryReferenceDetails = function (req, res) {
    LibraryBookTransactionReferenceTask.getIssuedBooksLibraryReferenceDetails(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Books Library Reference Details Fetched", data: { IssuedBooksLibraryReferenceDetails: task } });
    });
};
exports.issueLibraryBookReference = function (req, res) {
    LibraryBookTransactionReferenceTask.issueLibraryBookReference(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Issued", error: {} });
    });
};
exports.getIssuedAccessionNoOfReferenceBook = function (req, res) {
    LibraryBookTransactionReferenceTask.getIssuedAccessionNoOfReferenceBook(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Accession No Of Reference Book fetched", data: { IssuedAccessionNoOfReferenceBook: task } });
    });
};

exports.returnLibraryBookReference = function (req, res) {
    LibraryBookTransactionReferenceTask.returnLibraryBookReference(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Returned", err: {} });
    });
};

//-----------------------------------------LibraryBook Binding Curd

exports.getJournalsBooksForBindingByAccessionNo = function (req, res) {
    BookBindingTask.getJournalsBooksForBindingByAccessionNo(req.query.Type, req.query.Accession_No, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Accession No Of Reference Book fetched", data: { JournalsBooksForBinding: task } });
    });
};
exports.getJournalsBooksForBinding = function (req, res) {
    BookBindingTask.getJournalsBooksForBinding(req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Accession No Of Reference Book fetched", data: { JournalsBooksForBinding: task } });
    });
};
exports.getIssuedBooksForBindings = function (req, res) {
    BookBindingTask.getIssuedBooksForBindings(req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Accession No Of Reference Book fetched", data: { IssuedBooksForBindings: task } });
    });
};
exports.ReturnFromBinding = function (req, res) {
    BookBindingTask.ReturnFromBinding(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Returned From Binding", error: {} });
    });
};

exports.issueForBinding = function (req, res) {
    BookBindingTask.issueForBinding(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Books Issued for binding", error: {} });
    });
};
//-----------------------------------------LibraryBook Discontinue CURD

exports.getAccesstionNoAvailableByType = function (req, res) {
    BookDiscontinueTask.getAccesstionNoAvailableByType(req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Issued Accession No Of Reference Book fetched", data: { AccesstionNoAvailableByType: task } });
    });
};
exports.bookDiscontinue = function (req, res) {
    BookDiscontinueTask.bookDiscontinue(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Book Discontinued Successfully", error: { } });
    });
};

//-----------------------------------------LibraryBook Fine CURD

exports.getUserFineDetails = function (req, res) {
    LibraryFineDetailsTask.getUserFineDetails(req.query.user_id, req.query.Type, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "User Fine Details fetched", data: { UserFineDetails: task } });
    });
};
exports.payLibraryFine = function (req, res) {
    LibraryFineDetailsTask.payLibraryFine(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Payment done Suceessfully", error : {} });
    });
};

//-----------------------------------------LibraryBook Vendor Payment CURD

exports.getvendorLibraryInvoiceDetails = function (req, res) {
    LibraryInvoicePaymentTask.getvendorLibraryInvoiceDetails(req.query.Vendor_ID, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "vendor Library Invoice Details Fetched", data : {vendorLibraryInvoiceDetails:task} });
    });
};
exports.payLibraryVendorPayment = function (req, res) {
    LibraryInvoicePaymentTask.payLibraryVendorPayment(req.body, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Vendor Payment Done Successfully", error : {} });
    });
};

