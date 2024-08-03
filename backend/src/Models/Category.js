const mongoose = require('mongoose');

const AllCategoriesSchema = new mongoose.Schema({
    categories: {
        type: String,
        required: true,
        enum: ['Clothes', 'Perfume', 'Sports', 'Beauty', 'Electronics', 'Books', 'Toys', 'Home Decor', 'Health', 'Food']
    }
}, {
    timestamps: true,
});

const AllCategories = mongoose.model('AllCategories', AllCategoriesSchema);

module.exports = AllCategories;