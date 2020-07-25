'use strict';
var MasterUnitModuleTask = require('../model/MasterUnit/MasterUnit');
var MasterItemModuleTask = require('../model/MasterItem/MasterItem');
var MasterVendorModuleTask = require('../model/MasterVendor/MasterVendor');
var DirectStockEntryModuleTask = require('../model/DirectStockEntry/DirectStockEntry');
var DirectStockIssueModuleTask = require('../model/DirectStockIssue/DirectStockIssue');
var QuotationModuleTask = require('../model/Quotation/Quotation');
var QuotationApprovalModuleTask = require('../model/QuotationApproval/QuotationApproval');
var PurchaseOrderModuleTask = require('../model/PurchaseOrder/PurchaseOrder');
var StoreInvoiceModuleTask = require('../model/StoreInvoice/StoreInvoice');
var StockEntryModuleTask = require('../model/StockEntry/StockEntry');
var VendorPaymentModuleTask = require('../model/VendorPayment/VendorPayment');
var StoreRequisitionModuleTask = require('../model/StoreRequisition/StoreRequisition');
var StockAcceptanceRequisitionModuleTask = require('../model/StockAcceptanceRequisition/StockAcceptanceRequisition');
var StockIssueModuleTask = require('../model/StockIssue/StockIssue');
var ExpiredStockModuleTask = require('../model/ExpiredStock/ExpiredStock');


// MasterUnit CRUD
exports.SaveMasterUnit = function (req, res) {

    if (!req.body.Unit) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterUnitModel = new MasterUnitModuleTask(req.body);
    MasterUnitModuleTask.saveMasterUnitModel(MasterUnitModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Unit Saved successfully", error: {} });
        }
    });
}
exports.getMasterUnit = function (req, res) {

    MasterUnitModuleTask.getMasterUnit(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Unit Fetched", data: { MasterUnit: task } });
    });
}

exports.updateMasterUnit = function (req, res) {
    if (!req.body.Unit) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterUnitModel = new MasterUnitModuleTask(req.body);
    MasterUnitModuleTask.updateMasterUnitModel(MasterUnitModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Unit Updated successfully", error: {} });
    });
};
exports.deleteMasterUnit = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterUnitModel = new MasterUnitModuleTask(req.body);
    MasterUnitModuleTask.deleteMasterUnit(MasterUnitModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Unit Deleted successfully", error: {} });
    });
};
// MasterItem CRUD


exports.SaveMasterItem = function (req, res) {

    if (!req.body.ItemName) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterItemModel = new MasterItemModuleTask(req.body);
    MasterItemModuleTask.saveMasterItemModel(MasterItemModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Item Saved successfully", error: {} });
        }
    });
}
exports.getMasterItem = function (req, res) {

    MasterItemModuleTask.getMasterItem(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Item Fetched", data: { MasterItem: task } });
    });
}

exports.updateMasterItem = function (req, res) {
    if (!req.body.ItemName) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterItemModel = new MasterItemModuleTask(req.body);
    MasterItemModuleTask.updateMasterItemModel(MasterItemModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Item Updated successfully", error: {} });
    });
};
exports.deleteMasterItem = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterItemModel = new MasterItemModuleTask(req.body);
    MasterItemModuleTask.deleteMasterItem(MasterItemModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Item Deleted successfully", error: {} });
    });
};
// MasterVendor CRUD


exports.SaveMasterVendor = function (req, res) {

    if (!req.body.Vendor_Name) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterVendorModel = new MasterVendorModuleTask(req.body);
    MasterVendorModuleTask.saveMasterVendorModel(MasterVendorModel, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Vendor Saved successfully", error: {} });
        }
    });
}
exports.getMasterVendor = function (req, res) {

    MasterVendorModuleTask.getMasterVendor(req, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Vendor Fetched", data: { MasterVendor: task } });
    });
}

exports.updateMasterVendor = function (req, res) {
    if (!req.body.Vendor_Name) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    var MasterVendorModel = new MasterVendorModuleTask(req.body);
    MasterVendorModuleTask.updateMasterVendorModel(MasterVendorModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Vendor Updated successfully", error: {} });
    });
};
exports.deleteMasterVendor = function (req, res) {
    if (!req.query.id) {
        res.send({ status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }

    var MasterVendorModel = new MasterVendorModuleTask(req.body);
    MasterVendorModuleTask.deleteMasterVendor(MasterVendorModel, req.query.id, function (err, task) {
        if (err)
            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        else
            res.json({ status: true, message: "Vendor Deleted successfully", error: {} });
    });
};

// DirectStockEntry CRUD


exports.SaveDirectStockEntry = function (req, res) {

    if (!req.body.EntryDate) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    DirectStockEntryModuleTask.saveDirectStockEntryModel(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Direct Stock Entry Details Saved successfully", error: {} });
        }
    });
}
exports.getDirectStockEntry = function (req, res) {
    DirectStockEntryModuleTask.getDirectStockEntry(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Direct Stock Entry Details Fetched", data: { DirectStockEntry: task } });
        }
    });
}
exports.getAllItemNamesInStock = function (req, res) {
    DirectStockEntryModuleTask.getAllItemNamesInStock(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "All Item Names In Stock Fetched", data: { ItemNames: task } });
        }
    });
}

// DirectStockIssue CRUD


exports.SaveDirectStockIssue = function (req, res) {
    if (!req.body.EntryDate) {
        res.send({ Status: false, error: { message: 'fields are empty', code: "401" }, data: {} });
        return;
    }
    DirectStockIssueModuleTask.saveDirectStockIssueModel(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Direct Stock Entry Details Saved successfully", error: {} });
        }
    });
}
exports.getBalanceQtyOfItem = function (req, res) {
    DirectStockIssueModuleTask.getBalanceQtyOfItem(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Direct Stock Entry Details Fetched", data: { AvailableQty: task } });
        }
    });
}

// Quotation CRUD


exports.getQuotation = function (req, res) {
    QuotationModuleTask.getQuotation(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Details Fetched", data: { QuotationList: task } });
        }
    });
}

exports.getQuotationTransactionData = function (req, res) {
    QuotationModuleTask.getQuotationTransactionData(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Details Fetched", data: { QuotationTransactionData: task } });
        }
    });
}
exports.CheckQuotation_No = function (req, res) {
    QuotationModuleTask.CheckQuotation_No(req.query.id, req.query.Vendor_ID, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Details Fetched", data: { Quotation_No: task } });
        }
    });
}


exports.getVendors = function (req, res) {
    QuotationModuleTask.getVendors(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Vendors Details Fetched", data: { VendorList: task } });
        }
    });
}
exports.saveQuotation = function (req, res) {
    QuotationModuleTask.saveQuotation(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Saved Successfully", error: {} });
        }
    });
}
exports.updateQuotation = function (req, res) {
    QuotationModuleTask.updateQuotation(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Updated Successfully", error: {} });
        }
    });
}
exports.deleteQuotation = function (req, res) {
    QuotationModuleTask.deleteQuotation(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Deleted Successfully", error: {} });
        }
    });
}

// QuotationApproval CRUD


exports.getGroupNames = function (req, res) {
    QuotationApprovalModuleTask.getGroupNames(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Approval Details Fetched", data: { GroupNamesList: task } });
        }
    });
}
exports.getAllGroupNames = function (req, res) {
    QuotationApprovalModuleTask.getAllGroupNames(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Approval Details Fetched", data: { GroupNamesList: task } });
        }
    });
}

exports.getQuotationApprovalList = function (req, res) {
    QuotationApprovalModuleTask.getQuotationApprovalList(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Approval List Fetched", data: { QuotationApprovalList: task } });
        }
    });
}
exports.ApproveQuotation = function (req, res) {
    QuotationApprovalModuleTask.ApproveQuotation(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Approval Saved Successfully.", error: {} });
        }
    });
}


// Purchase Order CRUD


exports.getQuotationNumberByVendor = function (req, res) {
    PurchaseOrderModuleTask.getQuotationNumberByVendor(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Number Details Fetched", data: { QuotationNumberList: task } });
        }
    });
}
exports.getQuotationDetails = function (req, res) {
    PurchaseOrderModuleTask.getQuotationDetails(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Details Fetched", data: { QuotationDetails: task } });
        }
    });
}
exports.getQuotationPurchaseOrders = function (req, res) {
    PurchaseOrderModuleTask.getQuotationPurchaseOrders(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Details Fetched", data: { QuotationPurchaseOrders: task } });
        }
    });
}
exports.getPurchaseDetailsTransData = function (req, res) {
    PurchaseOrderModuleTask.getPurchaseDetailsTransData(req.query, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Quotation Details Fetched", data: { QuotationPurchaseOrders: task } });
        }
    });
}



exports.updatePurchaseOrder = function (req, res) {
    PurchaseOrderModuleTask.updatePurchaseOrder(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Purchase Order Details Updated Successfully", data: { CurrentQuotationPurchaseOrders: task } });
        }
    });
}
exports.deletePurchaseOrder = function (req, res) {
    PurchaseOrderModuleTask.deletePurchaseOrder(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Purchase Order Details Deleted Successfully", data: {} });
        }
    });
}

exports.savePurchaseOrder = function (req, res) {
    PurchaseOrderModuleTask.savePurchaseOrder(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Purchase Order Details Saved Successfully", data: { CurrentQuotationPurchaseOrders: task } });
        }
    });
}
exports.getQuotationIDNO = function (req, res) {
    PurchaseOrderModuleTask.getQuotationIDNO(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Purchase Order Details Saved Successfully", data: { QuotationIDNO: task } });
        }
    });
}


// Store Invoice CURD
exports.checkInvoiceNumber = function (req, res) {
    StoreInvoiceModuleTask.checkInvoiceNumber(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Check Invoice Number Details Fetched", data: { checkInvoiceNo: task } });
        }
    });
}
exports.saveStoreInvoice = function (req, res) {
    StoreInvoiceModuleTask.saveStoreInvoice(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Invoice Details Saved Successfully", data: { InvoiceNo: task } });
        }
    });
}
exports.searchInvoiceByVendor = function (req, res) {
    StoreInvoiceModuleTask.searchInvoiceByVendor(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Invoice Details Fetched", data: { InvoicesByVendorList: task } });
        }
    });
}

exports.getPurchaseOrderNoByVendor = function (req, res) {
    StoreInvoiceModuleTask.getPurchaseOrderNoByVendor(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Purchase Order No By Vendor Details Fetched", data: { PurchaseOrderNoByVendor: task } });
        }
    });
}
exports.getTotalAmountOfQuotationByPOID = function (req, res) {
    StoreInvoiceModuleTask.getTotalAmountOfQuotationByPOID(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Total Amount Of Quotation By POID Details Fetched", data: { TotalAmountOfQuotation: task } });
        }
    });
}


// StockEntry CURD



exports.getInvoiceNumberByVendor = function (req, res) {
    StockEntryModuleTask.getInvoiceNumberByVendor(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Invoice Number By Vendor Details Fetched", data: { InvoiceNumberByVendor: task } });
        }
    });
}
exports.getInvoiceItemDetails = function (req, res) {
    StockEntryModuleTask.getInvoiceItemDetails(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Invoice Item Details Fetched", data: { Invoice: task } });
        }
    });
}
exports.saveStockEntry = function (req, res) {
    StockEntryModuleTask.saveStockEntryModel(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Stock Details Saved Successfully", error: { } });
        }
    });
}

// Vendor Payment CURD


exports.getVendorInvoicesForPayment = function (req, res) {
    VendorPaymentModuleTask.getVendorInvoicesForPayment(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Invoice Number By Vendor Details Fetched", data: { VendorInvoiceDetails: task } });
        }
    });
}
exports.changeInvoiceNo = function (req, res) {
    VendorPaymentModuleTask.changeInvoiceNo(req.query.id, req.query.Vendor_ID, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Invoice Number By Vendor Details Fetched", data: { VendorInvoice: task } });
        }
    });
}
exports.saveVendorPayment = function (req, res) {
    VendorPaymentModuleTask.saveVendorPayment(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Vendor Payment Done", error: { } });
        }
    });
}


// Store Requisition CURD


exports.getStoreRequisition = function (req, res) {
    StoreRequisitionModuleTask.getStoreRequisition(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Fetched", data: { StoreRequisition: task } });
        }
    });
}
exports.getItemListByRequisitionId = function (req, res) {
    StoreRequisitionModuleTask.getItemListByRequisitionId(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Fetched", data: { singleItemList: task } });
        }
    });
}

exports.getUsersByDepartment = function (req, res) {
    StoreRequisitionModuleTask.getUsersByDepartment(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "User Details Fetched", data: { UserList: task } });
        }
    });
}
exports.saveStoreRequisition = function (req, res) {
    StoreRequisitionModuleTask.saveStoreRequisition(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Saved Successfully", error : {} });
        }
    });
}
exports.updateStoreRequisition = function (req, res) {
    StoreRequisitionModuleTask.updateStoreRequisition(req.body, req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Updated Successfully", error : {} });
        }
    });
}
exports.deleteStoreRequisition = function (req, res) {
    StoreRequisitionModuleTask.deleteStoreRequisition(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Deleted Successfully", error : {} });
        }
    });
}

// Stock Acceptance Requisition CURD
exports.RejectRequisitionDetails = function (req, res) {
    StockAcceptanceRequisitionModuleTask.RejectRequisitionDetails(req.query.id, req.query.rejectionReason, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Rejected", error : {} });
        }
    });
}
exports.AcceptRequisitionDetails = function (req, res) {
    StockAcceptanceRequisitionModuleTask.AcceptRequisitionDetails(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Accepted", error : {} });
        }
    });
}

// Stock Issue Curd 
exports.GetRequisitionNoByDept = function (req, res) {
    StockIssueModuleTask.GetRequisitionNoByDept(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition Details Fetched", data : { RequisitionIdList : task} });
        }
    });
}
exports.GetRequisitionNoDetails = function (req, res) {
    StockIssueModuleTask.GetRequisitionNoDetails(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Store Requisition No Details Fetched", data : { RequisitionNoDetails : task} });
        }
    });
}
exports.getItemNoListPendingForTransfer = function (req, res) {
    StockIssueModuleTask.getItemNoListPendingForTransfer(req.query.id, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Items No Details Fetched", data : { ItemNoList : task} });
        }
    });
}
exports.SaveStockIssueDetails = function (req, res) {
    StockIssueModuleTask.SaveStockIssueDetails(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Stock Issued Successfully", error : {} });
        }
    });
}


  // Expired Stock CURD 

  exports.getExpiredStock = function (req, res) {
    ExpiredStockModuleTask.getExpiredStock(req.query.FromDate, req.query.ToDate, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Expired Stock Fetched", data : { ExpiredStockList : task} });
        }
    });
}
exports.saveExpiredStock = function (req, res) {
    
    ExpiredStockModuleTask.saveExpiredStock(req.body, function (err, task) {
        if (err) {

            res.send({ status: false, error: { message: err.sqlMessage, code: err.errno }, data: {} });
        }
        else {
            res.json({ status: true, message: "Expired Stock Details Saved Successfully", error : { } });
        }
    });
}
