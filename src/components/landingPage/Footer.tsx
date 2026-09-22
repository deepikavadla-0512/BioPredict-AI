"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              BioPredict AI
            </h3>

            <p className="text-gray-300 text-sm leading-6 max-w-md">
              An AI-powered platform for biological prediction,
              genetic analysis, and computational research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/pathogenicityClassification"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pathogenicity Classification
                </Link>
              </li>

              <li>
                <Link
                  href="/sarsClassificationMutations"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  SARS-CoV-2 Classification
                </Link>
              </li>

              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Research Areas
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Biological Prediction</li>
              <li>Genetic Analysis</li>
              <li>Machine Learning</li>
              <li>Computational Biology</li>
              <li>Drug Target Analysis</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BioPredict AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;