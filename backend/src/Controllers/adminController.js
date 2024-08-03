const Product = require("../Models/AllProducts");
const AllBrands = require("../Models/BrandModel");
const AllCategories = require("../Models/Category");

const createService = async (req, res, next) => {
    const { imageUrl, brand, category, description } = req.body;

    if (!imageUrl || !brand || !category || !description) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newService = await Product.create({
            imageUrl, brand, category, description
        });

        res.status(201).json({ message: "Service created successfully", data: newService });
    } catch (error) {
        next(error);
    }
};const createCategory = async (req, res, next) => {
  const { category } = req.body; // Destructure the 'category' from 'req.body'

  if (!category) {
      return res.status(400).json({ error: "Category field is required" });
  }

  try {
      const newCategory = await AllCategories.create({
          categories: category 
      });

      res.status(201).json({ message: "Category created successfully", data: newCategory });
  } catch (error) {
      next(error);
  }
};

const createBrand = async (req, res, next) => {
  const { brand } = req.body; 

  if (!brand) {
      return res.status(400).json({ error: "Brand field is required" });
  }

  try {
      const newBrand = await AllBrands.create({
          brand: brand.toString() // Ensure that 'brand' is a string
      });

      res.status(201).json({ message: "Brand created successfully", data: newBrand });
  } catch (error) {
      next(error);
  }
};

module.exports = { createService, createCategory, createBrand };