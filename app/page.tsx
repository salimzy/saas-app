'use client';

// import { useState } from 'react';
 // import Image from 'next/image';
// import { ChevronDown, Star, Download, Users, Lock, Zap, Menu, X } from 'lucide-react';
import Nav from './component/nav';
import Featured from './component/featured';
import Trending from './component/trending';
import Features from './component/features';
import Testimonials from './component/testimonials';
import Pricing from './component/pricing';
import Footer from './component/Footer';
import Faqs from './component/Faqs';
import Hero from './component/Hero';

export default function Home() {
  return (
    <div>
     <Nav />
      {/* Main Sections */}
      <Hero />
      <Featured />
      <Trending />
      <Features />
      <Testimonials />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
};
