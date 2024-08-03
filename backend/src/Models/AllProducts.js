const mongoose = require('mongoose');

const AllProductSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  collection: 'AllProducts'
});

const Product = mongoose.model('Product', AllProductSchema);

module.exports = Product;
