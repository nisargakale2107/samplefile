import React from 'react';
import App from '../components/playsong'
import Footer from '../components/Footer';
import About from '../components/About'; 
// Adjust the path accordingly
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <App/>
      <Footer />
    </div>
  );
};

export default AboutUsPage;