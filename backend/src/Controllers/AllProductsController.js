const Product = require("../Models/AllProducts");

const AllProducts = async (req, res) => {
  try {
    const response = await Product.find();
    if (response.length === 0) {
      res.status(404).json({ msg: "No Products found" });
      return;
    }
    res.status(200).json({ products: response });
  } catch (error) {
    console.log(`Error fetching products: ${error}`);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { AllProducts };
