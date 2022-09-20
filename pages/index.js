import { useState } from 'react';
import axios from 'axios'

/* eslint-disable @next/next/no-img-element */
import Faq from "../components/home/Faq";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Offer from "../components/home/Offer";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";
import Section6 from "../components/home/Section6";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";


export default function Home() {


  return (
    <Layout title="Home Page">
      <Navbar />
      
      <Hero />
      {/* <Section1 /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
      <Faq />
      <Offer />
      <Footer />
    </Layout>
  );
}
