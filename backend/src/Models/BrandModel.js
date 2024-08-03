const mongoose = require('mongoose');


const BrandSchema = new mongoose.Schema({
    brand: { 
        type: String,
        required: true,
        enum: [
            'Nike',
            'Adidas',
            'Apple',
            'Samsung',
            'Gucci',
            'Zara',
            'H&M',
            'L\'Oréal',
            'Sony',
            'Microsoft'
        ]
    }
}, {
    timestamps: true,
});


const AllBrands = mongoose.model('AllBrands', BrandSchema);


module.exports = AllBrands;