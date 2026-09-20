"use client";

import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  title: string;
  tagline: string;
}

const HeroSection = ({ title, tagline }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < title.length) {
        setCurrentText(title.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed here

    return () => {
      clearInterval(intervalId);
    };
  }, [title]);

  return (
    <section className="bg-white py-5 h-45vh flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-[#123265]">{currentText}</h1>
      <p className="text-xl mt-4 w-9/12 text-center text-[#123265]">{tagline}</p>
    </section>
  );
};

export default HeroSection;

