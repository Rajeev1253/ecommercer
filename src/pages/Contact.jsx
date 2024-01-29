import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../pages/Contact.css";
import dot from "../assets/images/dot.svg"
const Contact = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div className="notfound">
          <div className="not-heading">
            <h1>Contact Us</h1>
            <div>
              <span>Home.</span>
              <span>Pages.</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
        <div className="upper">
          <div className="upper-left">
            <span>Information About us</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <img src={dot}></img>
          </div>
          <div className="upper-right">
            <span>Contact Way</span>
            <div className="circle">

            <div className="circle1">
            <div className="circle-text">
                <p>Tel: 877-67-88-99</p>
                <p>E-Mail: shop@store.com</p>
            </div>
            </div>
            </div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
