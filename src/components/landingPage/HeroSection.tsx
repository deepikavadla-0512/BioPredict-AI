"use client";

import React, { useState, useEffect } from "react";

interface HeroSectionProps {
  title: string;
  tagline: string;
}

const HeroSection = ({ title, tagline }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;

    const intervalId = setInterval(() => {
      if (i < title.length) {
        setCurrentText(title.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [title]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20 px-6 min-h-[45vh] flex flex-col items-center justify-center text-center">

      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
          AI • Biology • Research
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
          {currentText}
          <span className="text-cyan-500">|</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl leading-8 text-slate-600">
          {tagline}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
            Machine Learning
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Computational Biology
          </span>

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Genetic Analysis
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;