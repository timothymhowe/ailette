'use client'

import { useState, useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
import ProjectGallery from '../components/ProjectGallery';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [initialFadeComplete, setInitialFadeComplete] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  // Toggle projects view
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  // Initial fade-in effect with staggered animations
  useEffect(() => {
    // First, fade out the black overlay
    const overlayTimer = setTimeout(() => {
      setInitialFadeComplete(true);
    }, 500);

    // Then, fade in the logo
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1200);

    // Finally, fade in the text
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <>
      {/* Black overlay that fades out */}
      <div 
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-1500 ease-out ${
          initialFadeComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      <main className={`flex flex-col justify-between items-center min-h-screen bg-[#0a0a0a] text-white p-8 font-[Helvetica,Arial,sans-serif] overflow-hidden transition-opacity duration-1000 ease-out ${
        initialFadeComplete ? 'opacity-100' : 'opacity-0'
      }`}>
        <SocialLinks />
        
        <div className="text-center flex flex-col justify-center items-center flex-1 w-full max-w-[1200px] relative">
          {/* Logo and title section */}
          <div 
            className={`transition-all duration-700 ease-in-out absolute inset-0 flex flex-col items-center justify-center ${
              showProjects 
                ? 'transform -translate-y-full opacity-0 pointer-events-none' 
                : 'transform translate-y-0 opacity-100'
            }`}
          >
            {/* Logo with its own fade-in */}
            <div 
              className={`relative w-[300px] h-[300px] mb-8 transition-all duration-1000 ease-out ${
                showLogo ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="absolute w-[300px] h-[300px] bg-white/[0.03] rounded-full top-0 left-0 animate-[pulse_10s_infinite_alternate]"></div>
              <div className="absolute w-[240px] h-[240px] bg-white/[0.05] rounded-full top-[30px] left-[30px] animate-[pulse_7s_infinite_alternate]"></div>
              <div className="absolute w-[180px] h-[180px] bg-white/[0.1] rounded-full top-[60px] left-[60px] flex justify-center items-center animate-[pulse_5s_infinite_alternate]">
                <h1 className="text-2xl font-light tracking-[0.3em] text-white uppercase">A</h1>
              </div>
            </div>
            
            {/* Text with delayed fade-in */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                showText ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}
            >
              <h2 className="text-2xl font-light tracking-[0.3em] text-white uppercase">AILETTE.DEV</h2>
              <p className="text-base text-gray-400 my-8 font-light tracking-wider text-center max-w-[600px]">
                A curated portfolio of innovative projects and technological solutions.
                Crafted with precision and expertise.
              </p>
              
              {/* Explore Projects Button */}
              <button 
                onClick={toggleProjects}
                className="bg-transparent border border-white/10 text-gray-300 py-3 px-8 text-sm tracking-widest cursor-pointer transition-all duration-300 rounded font-light hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 mt-4"
              >
                EXPLORE PROJECTS
              </button>
            </div>
          </div>
          
          {/* Project Gallery */}
          <div 
            className={`transition-all duration-700 ease-out absolute inset-0 flex flex-col items-center justify-start pt-8 overflow-auto ${
              showProjects 
                ? 'transform translate-y-0 opacity-100' 
                : 'transform translate-y-full opacity-0 pointer-events-none'
            }`}
          >
            <h2 className="text-2xl font-light tracking-[0.3em] text-white uppercase mb-12 animate-fadeIn">Featured Projects</h2>
            
            <div className="max-h-[calc(100vh-220px)] overflow-auto pb-4 w-full">
              <ProjectGallery />
            </div>
            
            {/* Back Button */}
            <button
              onClick={toggleProjects}
              className="bg-transparent border border-white/10 text-gray-300 py-3 px-8 text-sm tracking-widest cursor-pointer transition-all duration-300 rounded font-light hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 mt-auto mb-4 fixed bottom-8"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
        
        <footer className="w-full text-center text-gray-600 text-xs tracking-wider py-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-10 backdrop-blur-sm">
          © 2024 by Ailette.io. All rights reserved.
        </footer>
      </main>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        /* Add custom duration class since Tailwind doesn't have duration-1500 */
        .duration-1500 {
          transition-duration: 1500ms;
        }
      `}</style>
    </>
  );
} 