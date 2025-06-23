import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Blog from "./Website/Pages/Blog";
import Feature from "./Website/Pages/Feature";
import NotFound from "./Website/Pages/NotFound";
import Car from "./Website/Pages/Car";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import Contact from "./Website/Pages/Contact";
import Dashboard from "./Admin/Apages/Dashboard";
import Blogmange from "./Admin/Apages/Blogmange";
import BlogAdd from "./Admin/Apages/BlogAdd";
import Alogin from "./Admin/Apages/Alogin";
 import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/car" element={<Car />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Test" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

          {/* admin */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/blogmanage" element={<Blogmange />} />
          <Route path="/blogadd" element={<BlogAdd />} />
             <Route path="/alogin" element={<Alogin />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
