const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    CD: {
        type: Number,
        required: true,
    },
    SD: {
        type: Number,
        required: true,
    },
    VAT: {
        type: Number,
        required: true,
    },
    RD: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true
    })

const Products = mongoose.model("Products", ProductSchema)

module.exports = Products