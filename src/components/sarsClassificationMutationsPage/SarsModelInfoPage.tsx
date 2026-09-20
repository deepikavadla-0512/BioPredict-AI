"use client";
import React from "react";


export function SarsModelInfoPage() {
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
                  src="/model_architecture.png" 
                  alt="Model Architecture"
                  className="w-full object-contain max-h-[400px] rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 mt-4 text-center">
                Figure 1: Deep Learning Model Architecture for SARS-CoV-2 Variant Classification
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
                <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300 leading-relaxed">
                  {/* Model description text remains the same */}
                  The deep learning model for SARS-CoV-2 variant classification is based on a Convolutional Neural Network (CNN) optimized for genomic sequence data. The model processes one-hot encoded nucleotide sequences as input and extracts hierarchical features using three 1D convolutional layers with ReLU activation, followed by max-pooling layers to reduce dimensionality. A dropout mechanism is incorporated after each convolutional block to mitigate overfitting. The extracted feature maps are flattened and passed through two fully connected layers (FC layers) with 72 and 32 neurons, respectively, leading to a final softmax output layer for five-class classification of SARS-CoV-2 variants (Alpha, Beta, Gamma, Delta, and Omicron). The model was trained using a cross-entropy loss function and optimized with Adam, achieving a high test accuracy of 98.10%, demonstrating its effectiveness in variant classification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Explainability */}
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
            <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300 leading-relaxed">
              {/* Explainability text remains the same */}
              To interpret the CNN&apos;s predictions and identify biologically significant sequence features, we integrated Layer-wise Relevance Propagation (LRP) as an explainability technique. LRP redistributes the model&apos;s output relevance back to the input nucleotides, highlighting key genomic positions contributing to variant classification. We employed the Epsilon-Gamma-Box composite rule, where the epsilon rule ensures numerical stability in propagation, while the gamma rule amplifies relevant contributions. The relevance propagation is adapted for different layer types: fully connected layers, convolutional layers, and max-pooling layers, ensuring a structured flow of relevance from output to input. The explainability results were validated using fidelity and sparsity metrics, confirming that the highlighted positions align with critical mutation hotspots. Additionally, we performed a variant-wise and country-wise mutation analysis, particularly for the Omicron variant, across different geographical locations, identifying distinct mutation patterns in India, China, and the USA. This comprehensive explainability framework bridges the gap between deep learning accuracy and biological interpretability, enhancing confidence in computational genomic analysis.
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
