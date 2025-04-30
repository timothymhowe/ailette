import React from 'react';

const SocialLinks = () => {
  return (
    <div className="absolute top-8 right-8 flex gap-5 z-10 md:top-6 md:right-6 sm:top-4 sm:right-4 sm:gap-2">
      <a 
        href="mailto:contact@ailette.dev" 
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 text-white/70 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/10 hover:text-white hover:shadow-lg hover:border-white/20 sm:w-9 sm:h-9"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
      
      <a 
        href="https://linkedin.com/in/ailette" 
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 text-white/70 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/10 hover:text-white hover:shadow-lg hover:border-white/20 sm:w-9 sm:h-9"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      
      <a 
        href="https://github.com/ailette" 
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 text-white/70 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/10 hover:text-white hover:shadow-lg hover:border-white/20 sm:w-9 sm:h-9"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks; 