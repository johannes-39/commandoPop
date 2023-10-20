import './App.css';
import Footer from "./components/Footer/Footer";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import About from "./pages/about/About";
import News from "./pages/news/News";

function App() {
  return (
      <div>
          <Header></Header>
          <div className={"mySides"}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<News />} />
              </Routes>
              <Routes>
                      <Route path="/shop" element={<Home/>} />
              </Routes>
              <Routes>
                  <Route path="/about" element={<About/>} />
              </Routes>
          </BrowserRouter>
          </div>
          <footer><Footer/></footer>

      </div>





  );
}

export default App;
