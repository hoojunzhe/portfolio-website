import React, { useState, useEffect } from 'react';

function App() {
  // Image carousel logic
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "WhatsApp Image 2026-07-28 at 10.21.49 PM.jpeg",
    "WhatsApp Image 2026-07-28 at 10.21.48 PM.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* HEADER / HERO SECTION (Banner Style) */}
      <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {images.map((src, index) => (
            <img
              key={src}
              src={`/${src}`}
              alt="Hoo Jun Zhe Profile Background"
              className={`absolute inset-0 w-full h-full object-cover object-[45%_center] transition-opacity duration-1000 ease-in-out ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-950/60 z-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">Hoo Jun Zhe</h1>
          <h2 className="text-xl md:text-3xl text-blue-400 font-medium mt-3 drop-shadow">Business Analyst & Product Owner</h2>
          
          <p className="mt-6 text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl drop-shadow-md">
            Strategic Business Analyst and former Software Developer with hands-on experience driving Agile projects through the complete SDLC. Currently pursuing an MBA, I specialize in translating complex stakeholder needs into actionable user stories using Jira and Figma. I excel at managing cross-functional teams to deliver impactful products, including large-scale mobile app migrations.
          </p>

          {/* Mobile-friendly Button Stacking */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap w-full sm:w-auto justify-center md:justify-start gap-4">
            <a href="https://wa.me/60175517696" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-md font-medium text-center hover:bg-green-500 transition shadow-lg shadow-green-900/30">
              WhatsApp Me
            </a>
            <a href="mailto:hoojunzhe@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-center hover:bg-blue-500 transition shadow-lg shadow-blue-900/30">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/hoojunzhe/" target="_blank" rel="noreferrer" className="bg-slate-800/80 backdrop-blur-sm text-slate-200 px-8 py-3 rounded-md font-medium text-center hover:bg-slate-700