"use client";
import React from "react";


export function ViralModelInfoPage() {
  return (
    <div className="max-w-full mx-auto bg-white dark:bg-[rgba(2,31,53,0.8)] shadow-xl rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">

      <div className="p-8 space-y-8">
        {/* Top Section - Model Architecture and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <img 
                  src="/viralDiseaseArchitechture.png" 
                  alt="Model Architecture"
                  className="w-full object-contain max-h-[400px] rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-[#123265] dark:text-gray-400 mt-4 text-center">
                Figure 1: Deep Learning Model Architecture for Viral Disease Classification and Mutated Pattern Extraction
              </p>
            </div>
          </div>

          {/* Model Classification Section */}
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#123265] dark:text-white">01</span>
                </div>
                <h2 className="text-xl font-semibold text-[#123265] dark:text-white">
                  Model Classification
                </h2>
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-[#123265] text-left dark:text-gray-300 leading-relaxed">
                  This model is designed to accurately classify viral diseases using a deep neural network (DNN) architecture. The primary objective is to develop an explainable DNN that not only provides high accuracy but also offers insights into its decision-making process. Here, a customized DNN architecture is optimized for both accuracy and explainability. The model incorporates techniques such as attention mechanisms and saliency maps to enhance interpretability. By analyzing viral genome sequences, the model aims to understand disease mechanisms, transmission, and develop effective treatments. This approach is crucial in addressing the complexities of viral disease classification due to diverse viral genomes and mutations. 
                  The model&apos;s performance is evaluated using diverse viral disease datasets, which include sequences from viruses like HIV, Ebola, SARS, MERS, and COVID-19. These datasets are processed using techniques such as one-hot encoding for nucleotide sequences and label encoding for disease names. For instance, nucleotides are encoded as follows: A =, T =, C =, G =, and N =. This encoding allows the model to numerically process the genetic information. The model&apos;s architecture is tailored to extract meaningful features from these encoded sequences, facilitating accurate classification.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-[rgba(2,31,53,0.03)] dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <span className="text-sm font-medium text-[#123265] dark:text-white">02</span>
              </div>
              <h2 className="text-xl font-semibold text-[#123265] dark:text-white">
                Explainability and Insights
              </h2>
            </div>
            <p className="text-[#123265] text-left dark:text-gray-300 leading-relaxed">
              Explainability is a critical component of this model, as it enhances trust and provides valuable insights into how specific genomic sequences influence the model&apos;s decisions. Here, techniques such as attention mechanisms and saliency maps are used to make the model more interpretable. Attention mechanisms help focus on specific parts of the input data that are most relevant to the classification task, while saliency maps visually highlight the important genomic regions involved in the decision-making process. For example, gradient-based methods like Grad-CAM are employed to generate these maps, offering a clear visualization of which nucleotide sequences are driving the predictions.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] mt-4 p-4">
        <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 text-center">
          For technical inquiries, please contact us
        </p>
      </div>
    </div>
  );
}
