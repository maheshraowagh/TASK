const { check } = require('express-validator');

const productValidationRules = () => {
  return [
    check('imageUrl').isURL().withMessage('Image URL must be a valid URL'),
    check('brand').notEmpty().withMessage('Brand is required'),
    check('category').notEmpty().withMessage('Category is required'),
    check('description').notEmpty().withMessage('Description is required'),
  ];
};

module.exports = {
  productValidationRules,
};
