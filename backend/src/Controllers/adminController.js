const Product = require("../Models/AllProducts");

const createService = async (req, res, next) => {
    const { imageUrl, brand, category, description } = req.body;
  
    
    if (!imageUrl || !brand || !category || !description ) {
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
  };
  






// const createProducts = async (req, res) => {
//     const { imageUrl, brand, category, description } = req.body;
//     console.log(req.body)
//     try {
//       const  id = req.headers; // Ensure the header key is correct
//       console.log(`Received user ID from headers: ${id}`);
      
//       if (!id) {
//         return res.status(400).json({ message: "User ID is missing in headers" });
//       }
  
//       const user = await Product.findById(id);
  
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       if (user.isAdmin !== 'admin') {
//         return res.status(403).json({ message: "Access denied" });
//       }
      
//       console.log(`User role: ${isAdmin}`);
      
//       const Product = await Product.create({
//         imageUrl, brand, category, description 
//       });
  
//       console.log(`New Product created: ${Product}`);
      
//       res.status(201).json({ message: "Book Created Successfully", book });
      
//     } catch (error) {
//       res.status(500).json({ message: "Internal server error", error: error.message });
//     }
//   };

  module.exports = createService ;