import React from "react";
import HeroSection from "@/components/landingPage/HeroSection";
import Card from "@/components/landingPage/Card";
import Navbar from "@/components/Navbar";
import { NavBanner } from "@/components/NavBanner";
import Footer from "@/components/landingPage/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBanner />

      <HeroSection
        title="BioPredict AI"
        tagline="An AI-powered platform for biological prediction, genetic analysis, and computational research."
      />

      <Navbar />

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-2">
              Explore Our Research
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Models
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Explore AI and computational biology models designed for
              biological analysis, prediction, and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">

            <Card
              title="SARS-CoV-2 Classification & Mutation Prediction"
              description="Classifies SARS-CoV-2 variants and predicts mutation patterns using deep learning techniques."
              imageUrl="/Coronavirus._SARS-CoV-2.png"
              linkUrl="/sarsClassificationMutations"
            />

            <Card
              title="MECP2 SNV Pathogenicity Classifier"
              description="Analyzes genetic changes in the MECP2 gene and predicts whether variants may be associated with disease."
              imageUrl="/T7_RNA_polymerase.jpg"
              linkUrl="/pathogenicityClassification"
            />

            <Card
              title="Viral Disease Prediction"
              description="Analyzes viral genetic information to classify different viral diseases and identify biological patterns."
              imageUrl="/viralDiseasePredictionImg.jpg"
              linkUrl="/viralDiseasePrediction"
            />

            <Card
              title="Splice Site Prediction"
              description="Identifies important regions in genes where RNA splicing occurs, including splice donor and acceptor sites."
              imageUrl="/RNA_splicing_diagram_en.svg.png"
              linkUrl="/spliceSitePrediction"
            />

            <Card
              title="Drug Target Pair Analysis"
              description="Analyzes potential drug-target pairs to support computational research into disease treatment."
              imageUrl="/Drug_target.jpg"
              linkUrl="/drugTargetPairsAnalysis"
            />

            <Card
              title="Poliovirus Mutation Prediction"
              description="An upcoming model focused on analyzing and predicting poliovirus mutation patterns."
              imageUrl="/viralDiseasePredictionImg.jpg"
              linkUrl="/"
            />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;