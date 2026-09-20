"use client";
import React from "react";


export function DrugTargetPairsModelInfoPage() {
  return (
    <div className="max-w-full mx-auto bg-white dark:bg-[rgba(2,31,53,0.8)] shadow-xl rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">
      <div className="p-8 space-y-8">
        {/* First Section - Model Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* DTI Model Image */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <img 
                  src="/dtimodel.png" 
                  alt="DTI Model Architecture"
                  className="w-full object-contain max-h-[400px] rounded-lg"
                />
              </div>
              <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 mt-4 text-center">
                Figure 1: Drug-Target Interaction Model Architecture
              </p>
            </div>
          </div>

          {/* Model Classification Section */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex items-center gap-3 mb-6 pt-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <span className="text-base font-medium text-[#123265] dark:text-white">01</span>
                </div>
                <h2 className="text-3xl font-bold text-[#123265] dark:text-white">
                  Model Architecture
                </h2>
              </div>
              <div className="flex-1 flex items-start">
                <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300 leading-relaxed">
                The model architecture for predicting drug-target interactions (DTIs) is centered around a sophisticated Graph Neural Network (GNN) framework called GNN-DTI, which effectively integrates chemical and biological data representations to address the complexities of drug discovery. In this architecture, drugs are represented as molecular graphs derived from their SMILES strings, where nodes correspond to atoms and edges represent chemical bonds, capturing the detailed structural information of molecules. Protein targets are encoded as one-hot vectors that represent their amino acid sequences, enabling the model to process biological target information alongside chemical data. The core GNN block consists of three GENConv layers inspired by the DeeperGCN framework, which are specifically designed to overcome challenges such as vanishing gradients and overfitting that commonly affect deep graph convolutional networks. These layers use a SoftMax aggregation function during message passing to ensure effective communication between nodes, allowing the model to capture intricate molecular interactions. After the graph convolution steps, drug and protein features are concatenated and passed through fully connected layers, producing a positive real number that predicts the binding affinity between the drug and the target protein. This architecture has demonstrated robust predictive performance on benchmark datasets like Davis and Kiba, outperforming several state-of-the-art models in terms of mean squared error (MSE) and concordance index (CI), which measure prediction accuracy and ranking quality respectively. The model’s ability to handle complex molecular structures and protein information makes it a powerful tool for identifying potential drug candidates and understanding their interactions at a detailed level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Explainability */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Explainability Text */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex items-center gap-3 mb-6 pt-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <span className="text-base font-medium text-[#123265] dark:text-white">02</span>
                </div>
                <h2 className="text-3xl font-bold text-[#123265] dark:text-white">
                  Explainability Framework
                </h2>
              </div>
              <div className="flex-1 flex items-start">
                <p className="text-[rgba(2,31,53,0.8)] text-left dark:text-gray-300 leading-relaxed">
                Explainability is a fundamental component of this architecture, addressed through the integration of the GNN-DTI Explainer module, which enhances model transparency by pinpointing the most influential atoms (nodes) and chemical bonds (edges) within drug molecules that drive the predictions of binding affinity. The explainer initializes trainable masks on nodes and edges, which are iteratively optimized using gradient-based updates guided by a loss function combining mean squared error and entropy regularization. This process refines the mask values, which range from 0 to 1, where higher values indicate greater importance in the model’s decision-making. Visualizations of these masks reveal critical molecular substructures such as carbon ring systems, nitrogen atoms, and chlorine atoms that consistently show high importance scores, highlighting their key roles in drug-target binding. This explainability framework not only helps researchers understand why the model makes certain predictions but also provides valuable insights for drug development by identifying molecular features essential for biological activity. Such insights facilitate cross-validation with experimental data and guide the design of new compounds with improved efficacy. Additionally, by isolating the most relevant substructures, the explainer aids in reducing the complexity of molecular data, allowing chemists to focus on key functional groups that influence binding affinity. Moreover, the explainer’s ability to highlight recurring patterns in molecular graphs supports decision-making in drug discovery and helps overcome the typical "black-box" nature of deep learning models, making the predictions more interpretable and trustworthy for practical applications. This interpretability is crucial for gaining regulatory approval and fostering confidence among stakeholders in pharmaceutical research.
                </p>
              </div>
            </div>
          </div>

          {/* Explainer Image */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <img 
                  src="/explainer.png" 
                  alt="Explainability Visualization"
                  className="w-full object-contain max-h-[400px] rounded-lg"
                />
              </div>
              <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 mt-4 text-center">
                Figure 2: Interaction Explainability Visualization
              </p>
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
