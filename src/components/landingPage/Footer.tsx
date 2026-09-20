"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#123265] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_0.8fr] gap-8 mb-8">
          {/* Navigation Links */}
          <div className="px-32 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link href="/pathogenicityClassification" className="hover:text-gray-300 transition-colors">Pathogenicity Classification</Link></li>
              <li><Link href="/sarsClassificationMutations" className="hover:text-gray-300 transition-colors">SARS-CoV-2 Classification</Link></li>
              <li><Link href="/#contributors-section" className="hover:text-gray-300 transition-colors">Contributors & Collaborators</Link></li>
              <li><Link href="/faqs" className="hover:text-gray-300 transition-colors">FAQs</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Funding Agencies */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Funding Agencies</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.anrfonline.in/ANRF/HomePage" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-gray-300 transition-colors">
                  ARNF
                </a>
              </li>
              <li>
                <a href="https://serb.gov.in/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-gray-300 transition-colors">
                  SERB
                </a>
              </li>
              <li>
                <a href="https://prism.serbonline.in/RS-NSRG" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-gray-300 transition-colors">
                  SRG
                </a>
              </li>
            </ul>
          </div>

          {/* Institute */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Institute</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.iiits.ac.in/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-gray-300 transition-colors">
                  IIIT Sri City
                </a>
              </li>
            </ul>
          </div>
          
          {/* Logos Column */}
          <div className="pr-32 text-center md:text-left flex flex-col justify-start items-baseline space-y-6">
            <img 
              src="/logos/iiits_.png" 
              alt="IIIT Sri City Logo" 
              className="w-16 h-auto object-contain"
            />
            <img 
              src="/logos/serb_logo.png" 
              alt="SERB Logo" 
              className="w-28 h-auto object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} IIIT Sri City x SERB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
