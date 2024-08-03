import { NavLink, Outlet } from "react-router-dom";
import { IoFileTrayFullSharp,IoHomeSharp } from "react-icons/io5";



const AdminLayout = () => {

  

  
  return (
    <div className="md:flex ">
      {/* Admin Sidebar */}
      <div className="md:w-[14vw] bg-gray-800 h-[8vh] md:h-[45vw]  ">

        <nav className="text-white ">
          <ul className="md:pt-8 flex md:flex-col md:h-[40vw] justify-center md:gap-5 px-3">
            
            
            

            <li>
             
        
         <NavLink to={`/admin/AddProducts`}>
          <button className=" px-4 py-2 text-sm md:text-xl flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700"><IoFileTrayFullSharp /> Add PRODUCT</button>
         </NavLink>

         <NavLink to={`/admin/AddCategory`}>
          <button className=" px-4 py-2 text-sm md:text-xl flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700"><IoFileTrayFullSharp /> Add Category</button>
         </NavLink>
        

         <NavLink to={`/admin/AddBrand`}>
          <button className=" px-4 py-2 text-sm md:text-xl flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700"><IoFileTrayFullSharp /> Add Brand</button>
         </NavLink>
        
        
            
            </li>

            <li>
              <a href="/" className=" px-4 py-2 text-sm md:text-xl hidden md:flex items-center gap-1 md:gap-2 font-medium text-white hover:bg-gray-700">
              <IoHomeSharp /> Home
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
     
      <div className="hero ">
      
    </div>
        <Outlet />
     
    </div>
  );
};

export default AdminLayout;