import { useState, useEffect } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/data/AllProducts`, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products); // Assuming your API response structure
        } else {
          console.log("Failed to fetch products");
        }
      } catch (error) {
        console.log("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="ml-[14vw] pt-5">
        <h1 className="md:text-5xl text-3xl font-bold underline">ALL PRODUCTS</h1>
      </div>
      <div className="md:w-[95vw] px-5 md:px-1 md:flex md:flex-wrap md:ml-[8vw]">
        {products.map((data, index) => {
          const { imageUrl, category, brand, description } = data;

          return (
            <div
              className="md:w-[20vw] cursor-pointer border border-black md:ml-28 mt-10 mb-3 rounded-lg shadow-lg overflow-hidden"
              key={index}
            >
              <div>
                <img
                  className="object-cover w-full h-[30vh] rounded-t-lg"
                  src={imageUrl}
                  alt=""
                />
              </div>
              <div className="mt-3 mx-5">
                <p className="text-lg mb-1">
                  <span className="font-bold">Brand:</span> {brand}
                </p>
                <p className="text-lg mb-1">
                  <span className="font-bold">Category:</span> {category}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Description:</span> {description}
                </p>
              </div>
              <div className="mt-3 mx-5 mb-3">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
