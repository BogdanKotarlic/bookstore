const Order = require("../model/Order");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const order = new Order(req.body.order);
    order.save((err, data) => {
        if (err) {
            return res.status(400).json({error: errorHandler(err)});
        }
        res.json({data});
    });
}