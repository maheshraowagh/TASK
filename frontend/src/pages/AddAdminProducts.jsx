import { useState } from 'react';

const AddAdminProducts = () => {
  const [service, setService] = useState({
    imageUrl: "", // Ensure this matches the backend schema
    category: "",
    description: "",
    brand: "",
  });

  const authorizationToken = `Bearer ${localStorage.getItem('token')}`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending request with data:", service);
      const response = await fetch(`http://localhost:5000/api/admin/createProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(service),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      if (!response.ok) {
        alert(responseData.message || "Failed to add product");
        return;
      }

      alert("Product added successfully");
      setService({
        imageUrl: "",
        category: "",
        description: "",
        brand: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="md:w-[50vw] mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={service.imageUrl}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={service.category}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={service.brand}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="md:flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdminProducts;
