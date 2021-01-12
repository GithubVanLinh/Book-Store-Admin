const BillService = require('../services/bill.service');

function stringToDateStringFormat(strDate){
    const date = new Date(strDate);
    return date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
}
module.exports ={
    getAllBill:async (req, res, next)=>{
        const page = req.query.page || 1;

        const bills = await BillService.getAllBill(page);
        bills.bills = bills.docs;
        for(bill of bills.bills){
            console.log("bill", bill);
            bill.booking_date_vn = stringToDateStringFormat(bill.booking_date);

        }
        
        delete bills.docs;
        console.log(bills);
        res.render("bill_list", bills );
    },
    getBillByIdJSON: async (req, res, next)=>{
        const id = req.params.id || req.body.id || req.query.id;
        const bill = await BillService.getBillByIdJSON(id);
        res.json(bill);
    },
    updateBillStatusById: async (req, res, next) =>{
        const id = req.params.id || req.body.id || req.query.id;
        const bill = await BillService.updateBillStatusById(id, "Done");
        res.json({success: true});
    }

}