"use client";
import React from "react";

export function PathogenicityModelInfoPage() {
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
                  src="/patogenic_model_architecture.png" 
                  alt="Model Architecture"
                  className="w-full object-contain max-h-[400px] rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 mt-4 text-center">
                Figure 1: Architecture for MECP2 SNV Pathogenicity Classification
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
                In this model, XGBoost algorithm was used to classify MECP2 gene mutations based on extracted genomic features. Categorical variables were one-hot encoded, clinical labels were binarized, and continuous features were normalized using Min-Max scaling. The dataset was then split into training and testing sets. Key hyperparameters like tree depth and learning rate were optimized using grid search. XGBoost’s ensemble learning approach helped reduce overfitting and improve generalization. Through iterative boosting and careful tuning, the model effectively distinguished pathogenic from benign mutations. The final model demonstrated strong performance, highlighting the potential of tree-based methods in genomic variant classification.
                </p>
              </div>
            </div>
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