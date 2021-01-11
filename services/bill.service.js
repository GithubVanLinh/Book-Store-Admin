const Bill = require('../models/bill');

module.exports = {
    createBill: (billData)=>{
        console.log(billData);

        Bill.create(bill)
    }
}