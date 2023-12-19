import React from "react";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Getintouch from "./components/Getintouch";
import Header from "./components/Header";
import About from "./components/About";
import Order from "./components/Order";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <div className="">
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
      <Order/>
      <Gallary/>
      <Review/>
      <Getintouch/>
      <Footer/>
    </div>
  )
}
