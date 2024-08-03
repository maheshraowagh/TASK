import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" h-full md:h-[88vh] w-full  md:flex flex-col flex md:flex-row items-center justify-center">
      
      <div className=" w:full  lg:w-3/6 flex flex-col items-center lg:items-start justify-center ">
        <h1 className="text-4xl md:mb-0 mb-5 lg:text-7xl text-center lg:text-left md:px-20 
         font-semibold text-yellow-300">
          Discover New Products
        </h1>
        <p className="mt-6 text-2xl  md:px-20  text-center  text-black  lg:text-left">
        Discover captivating products, enriching experiences, and endless inspiration in our curated collection.
        </p>

        <div className="mt-8">

            <div className="mt-8 ">
                <NavLink to='/AllProducts'>
          <button className="text-yellow-300 text-2xl font-semibold border
           border-yellow-100 mx-20 py-4 rounded-l-full rounded-r-full md:px-20 px-5 hover:bg-zinc-800 rounded-full">
              New Products
          </button>
          </NavLink>
          </div>

        </div>
      </div>

      <div className="w-full lg:w-3/6  md:1">
      <img className="lg:w-[80%] " src="" alt="" /></div>
    </div>
  );
};

export default Hero;
