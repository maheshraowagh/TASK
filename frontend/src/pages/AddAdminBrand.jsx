import { useState } from 'react';

const AddAdminBrand = () => {
  const brands = [
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
  ];

  const [selectedBrand, setSelectedBrand] = useState("");

  const authorizationToken = `Bearer ${localStorage.getItem('token')}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedBrand) {
      alert("Please select a Brand");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/createBrand`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify({ brand: selectedBrand }), // Changed 'category' to 'brand'
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      if (!response.ok) {
        alert(responseData.message || "Failed to add Brand");
        return;
      }

      alert("Brand added successfully");
      setSelectedBrand("");
    } catch (error) {
      console.error("Error adding Brand:", error);
      alert("Failed to add Brand");
    }
  };

  const handleBrandChange = (e) => { // Renamed function
    setSelectedBrand(e.target.value);
  };

  return (
    <div className="flex  flex-col absolute left-[50%] justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto">
        <label htmlFor="brandDropdown" className="block text-sm font-medium text-gray-700">Select Brand:</label>
        <select id="brandDropdown" value={selectedBrand} onChange={handleBrandChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Select a Brand</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
        <button type="submit" className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default AddAdminBrand;