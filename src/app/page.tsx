import React from 'react';
import HeroSection from '@/components/landingPage/HeroSection';
import Card from '@/components/landingPage/Card';
import CollaboratorsAndContributors from '@/components/landingPage/CollaboratorsAndContributors';
import Navbar from '@/components/Navbar';
import { NavBanner } from '@/components/NavBanner';
import Footer from '@/components/landingPage/Footer';

const Home = () => {
  return (
    <div>
      <NavBanner />
      <HeroSection
        title="DrCMDs Predictor"
        tagline="A Novel System for Disease Prediction, Mutated Patterns Discovery, and Drug Candidates Generation to Combat Viral Diseases in the Indian Population."
      />
      <Navbar />
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto p-4 text-center">
          <h2 className="text-5xl font-bold text-[#123265] mb-8">Our Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center max-w-7xl mx-auto">
            <Card
              title="Classification and Mutation Pattern Prediction in SARS-CoV2 using Deep Neural Networks"
              description="This classifies the SARS-CoV2 variants and predicts the mutation patterns."
              imageUrl="/Coronavirus._SARS-CoV-2.png"
              linkUrl="/sarsClassificationMutations"
            />
            <Card
              title="MECP2 SNV Pathogenicity Classifier"
              description="This model is designed to help predict whether a genetic change in the MECP2 gene is likely to cause disease or not. By learning from patterns in existing genetic data, it can identify which mutations are harmful and which are harmless. This helps support genetic research and can assist in understanding conditions linked to MECP2."
              imageUrl="/T7_RNA_polymerase.jpg"
              linkUrl="/pathogenicityClassification"
            />
            <Card
              title="Viral Disease Prediction"
              description="This model helps identify different viral diseases by analyzing their genetic information. It’s designed not only to be accurate but also to explain how it makes its decisions. By studying the genetic patterns of viruses like HIV, Ebola, SARS, MERS, and COVID-19, the model learns to recognize which virus is which. This can support research, improve understanding of how viruses spread, and contribute to developing better treatments."
              imageUrl="/viralDiseasePredictionImg.jpg"
              linkUrl="/viralDiseasePrediction"
            />
            <Card
              title="Splice Acceptor and Donor Site Prediction"
              description="This model is built to identify important regions in genes where RNA splicing happens — known as splice acceptor and donor sites."
              imageUrl="/RNA_splicing_diagram_en.svg.png"
              linkUrl="/spliceSitePrediction"
            />
            <Card
              title="Drug Target Pairs Analysis"
              description="This model is designed to identify drug-target pairs that are likely to be effective in treating a given disease."
              imageUrl="/Drug_target.jpg"
              linkUrl="/drugTargetPairsAnalysis"
            />
            <Card
              title="Model 6: coming soon"
              description="Model for predicting poliovirus mutations."
              imageUrl="https://cardiff.imgix.net/__data/assets/image/0004/2498467/GettyImages-1253218209.jpg?w=873&h=491&fit=crop&q=60&auto=format"
              linkUrl="https://example.com/model6-page"
            />
          </div>
        </div>
      </section>
      <section id="contributors-section">
        <CollaboratorsAndContributors />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
