import React from 'react';
import { instagram, twitter } from '../assets';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center font-inter text-gray-900 py-4">
      <div className="text-center mb-2">
        This AI Article Summarizer is made by Vishwas Sharma
      </div>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/thevgraph/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://x.com/Vishwas02651" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
