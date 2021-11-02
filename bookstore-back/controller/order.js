const Order = require("../model/Order");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.orderById = (req, res, next, id) => {
    Order.findById(id).exec((err, order) => {
        if (err || !order) {
            return res.json(400).json({error: 'No order'});
        }
        req.order = order;
        next();
    })
};

exports.create = (req, res) => {
    const order = new Order(req.body.order);
    order.save((err, data) => {
        if (err) {
            return res.status(400).json({error: errorHandler(err)});
        }
        res.json({data});
    });
}

exports.remove = (req, res) => {
    let order = req.order;
    order.remove((err, deletedOrder) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Order deleted successfully!'
        });
    });
};

exports.list = (req, res) => {
    Order.find().exec((err, orders) => {
        if (err) {
            return res.status(400).json({error: errorHandler(error)});
        }
        res.json(orders);
    });
};