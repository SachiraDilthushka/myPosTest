const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
	product_description: {
        type: String,
        required: true,
    },
    product_qty: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;