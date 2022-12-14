import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/login";
import Signin from "../Components/signin";
import Dairy from "../Components/AfterLogin/pages/Dairy";
import Helps from "../Components/AfterLogin/pages/Helps";
import Foods from "../Components/AfterLogin/pages/Foods";
import Plans from "../Components/AfterLogin/pages/Plans";
import Settings from "../Components/AfterLogin/pages/Settings";
import Trends from "../Components/AfterLogin/pages/Trends";
import Support from "../Components/AfterLogin/pages/Support";
import Home from "../Pages/Home";
import About from "../Components/About";
import { Blog } from "../Components/Blogs/blog";
import ReqAuth from "./ReqAuth";
const AllRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>

          <Route path="/dairy" element={<ReqAuth><Dairy/></ReqAuth>}/>
        
        
        <Route path="/trends" element={<ReqAuth><Trends/></ReqAuth>}/>
        <Route path="/foods" element={<ReqAuth><Foods/></ReqAuth>}/>
        <Route path="/setting" element={<ReqAuth><Settings/></ReqAuth>}/>
        <Route path="/plans" element={<ReqAuth><Plans/></ReqAuth>}/>
        <Route path="/Helps" element={<Helps/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
