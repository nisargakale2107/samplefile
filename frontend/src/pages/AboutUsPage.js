import React from 'react';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs'; 
// Adjust the path accordingly
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs />
      <Footer/>
    </div>
  );
};

export default AboutUsPage;