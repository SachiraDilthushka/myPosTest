const router = require('express').Router();
let Product = require('../models/product.model');


router.route('/').get((req, res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const product_id = req.body.product_id;
    const product_name = req.body.product_name;
	const product_description = req.body.product_description;
    const product_qty = Number(req.body.product_qty);
    const date = Date.parse(req.body.date);
    const newProduct = new Product({
        product_id,
		product_name,
        product_description,
        product_qty,
        date,
    });


    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.json('product deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/update/:id').post((req, res) => {

    Product.findById(req.params.id)
        .then(product => {
            product.product_id = req.body.product_id;
            product.product_name = req.body.product_name;
			product.product_description = req.body.product_description;
            product.product_qty = Number(req.body.product_qty);
            product.date = Date.parse(req.body.date);

            product.save()
                .then(() => res.json('product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 