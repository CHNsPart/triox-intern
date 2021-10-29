const Products = require("../model/products")

const value = 1

exports.create = (req, res) => {

    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }
    console.log()
    const { description, CD, SD, RD, VAT } = req.body;

    // new user
    const product = new Products({
        CD,
        SD,
        RD,
        VAT,
        description
    })

    product.save()
        .then(data => {
            //res.send(data)
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}
// retrieve and return all food Item
exports.findOne = (req, res) => {
    const productId = req.params._id
    if (productId) {
        Products.findById(productId)
            .then(data => {
                calculateData(data)
                if (!data) {
                    res.status(404).send({ message: "Not found food with id " + productId })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + productId })
            })
    }
}

exports.findAll = (req, res) => {

    Products.find()
        .then(product => {
            res.send(product)
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retrieving user information" })
        })
}


const calculateData = ((data) => {
    console.log(data)
})