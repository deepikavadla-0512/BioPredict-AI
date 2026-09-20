"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#123265] py-2 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-10">
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              href="/" 
              className="text-base font-normal text-white hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            
            {/* Models Dropdown */}
            <div className="relative group">
              <button className="text-base font-normal text-white hover:text-white flex items-center relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all group-hover:after:w-full">
                Models
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-[#123265] border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/sarsClassificationMutations" className="block px-4 py-2 text-base font-normal text-white hover:bg-[#1a2f6f]">
                    SARS-CoV-2 Classification
                  </Link>
                  <Link href="/pathogenicityClassification" className="block px-4 py-2 text-base font-normal text-white hover:bg-[#1a2f6f]">
                    Pathogenicity Classification
                  </Link>
                  <Link href="/viralDiseasePrediction" className="block px-4 py-2 text-base font-normal text-white hover:bg-[#1a2f6f]">
                    Viral Disease Prediction
                  </Link>
                  <Link href="/spliceSitePrediction" className="block px-4 py-2 text-base font-normal text-white hover:bg-[#1a2f6f]">
                    Splice Site Prediction
                  </Link>
                  <Link href="/drugTargetPairsAnalysis" className="block px-4 py-2 text-base font-normal text-white hover:bg-[#1a2f6f]">
                    Drug Target Pairs Analysis
                  </Link>
                  <Link href="/" className="block px-4 py-2 text-base font-normal text-white hover:bg-[#1a2f6f]">
                    Model 6
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/#contributors-section" scroll={true}
              className="text-base font-normal text-white hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              Contributors & Collaborators
            </Link>
            
            <Link 
              href="/faqs" 
              className="text-base font-medium text-white hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              FAQs
            </Link>
            
            <Link 
              href="/about" 
              className="text-base font-medium text-white hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              About Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1a2f6f]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-sm text-white hover:bg-[#1a2f6f] rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/pathogenicityClassification" 
              className="block px-3 py-2 text-sm text-white hover:bg-[#1a2f6f] rounded-md"
            >
              Pathogenicity Classification
            </Link>
            <Link 
              href="/sarsClassificationMutations" 
              className="block px-3 py-2 text-sm text-white hover:bg-[#1a2f6f] rounded-md"
            >
              SARS-CoV-2 Classification
            </Link>
            <Link 
              href="/#contributors-section"
              scroll={true}
              className="text-base font-normal text-white hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              Contributors & Collaborators
            </Link>
            <Link 
              href="/faqs" 
              className="block px-3 py-2 text-sm text-white hover:bg-[#1a2f6f] rounded-md"
            >
              FAQs
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-sm text-white hover:bg-[#1a2f6f] rounded-md"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

