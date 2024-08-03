import React, { useState } from 'react';

const AddAdminCategory = () => {
  const categories = [
    'Clothes', 'Perfume', 'Sports', 'Beauty', 'Electronics',
    'Books', 'Toys', 'Home Decor', 'Health', 'Food'
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const authorizationToken = `Bearer ${localStorage.getItem('token')}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory) {
      alert("Please select a category");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/createCategory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify({ category: selectedCategory }),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      if (!response.ok) {
        alert(responseData.message || "Failed to add category");
        return;
      }

      alert("Category added successfully");
      setSelectedCategory("");
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category");
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col absolute left-[50%] justify-center items-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto">
        <label htmlFor="categoryDropdown" className="block text-sm font-medium text-gray-700">Select Category:</label>
        <select id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit" className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddAdminCategory;