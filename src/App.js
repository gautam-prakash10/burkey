import React from "react";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Getintouch from "./components/Getintouch";
import Header from "./components/Header";
import About from "./components/About";
import Order from "./components/Order";
import Gallery from "./components/Gallery";
import Sliding from "./components/Reviews";

export default function App() {
  return (
    <div className="">
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
      <Order/>
      <Gallery/>
      <div className="grid place-items-center mt-10">
            <h2 className="text-center text-4xl text-yellow-400 mb-10">
              Instagram
            </h2>
              <button className="px-4 py-2 bg-yellow-400 text-white rounded-md">
                Follow us
              </button>
          </div>
      <div className="bg-black">
        <h2 className=" text-4xl font-bold text-yellow-400 mb-10 mt-10 text-center">
          Google Reviews
        </h2>
      </div>
      <Sliding />
      <Getintouch/>
      <Footer/>
    </div>
  )
}
