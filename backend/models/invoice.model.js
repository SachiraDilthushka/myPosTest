const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    invoice_id:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:3
    },
},{
    timestamps : true,
});
const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = Invoice;