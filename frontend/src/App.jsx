import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Navbar from "./Components/Navbar"
import Logout from "./pages/Logout"
import AdminLayout from "./Components/AdminLayout"
import AdminHero from "./pages/AdminHero"
import AddAdminProducts from "./pages/AddAdminProducts"
import AddAdminCategory from "./pages/AddAdminCategory"
import AddAdminBrand from "./pages/AddAdminBrand"

const App = () => {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
 <Route path="/"  element={<Home/>} />
 <Route path="/AboutUs"  element={<AboutUs/>} />
 <Route path="/Contact"  element={<Contact/>} />
 <Route path="/AllProducts"  element={<AllProducts/>} />
 <Route path="/login"  element={<Login/>} />
 <Route path="/register"  element={<Register/>} />
 <Route path="/logout"  element={<Logout/>} />
 <Route path="/admin" element ={<AdminLayout/>}>
 <Route index element={<AdminHero/> } />
 <Route path="AddProducts" element={<AddAdminProducts/>}/>
 <Route path="AddCategory" element={<AddAdminCategory/>}/>
 <Route path="AddBrand" element={<AddAdminBrand/>}/>
 </Route>


  </Routes>
  
  
  </BrowserRouter>

    </>
  )
}

export default App