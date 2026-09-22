import React from "react";

const models = [
  "SARS-CoV-2 Classification & Mutation Prediction",
  "MECP2 SNV Pathogenicity Classification",
  "Viral Disease Prediction",
  "Splice Site Prediction",
  "Drug Target Pair Analysis",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-3">
            About the Platform
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            BioPredict AI
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            An AI-powered platform for biological prediction, genetic analysis,
            and computational research.
          </p>
        </div>

        {/* Overview */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Platform Overview
          </h2>

          <p className="text-slate-600 leading-7">
            BioPredict AI brings together computational biology and artificial
            intelligence to support the analysis of biological and genetic data.
            The platform provides access to multiple prediction models covering
            areas such as genetic variants, viral diseases, RNA splicing, and
            drug-target analysis.
          </p>
        </section>

        {/* Research Areas */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Research Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-cyan-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Machine Learning
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Applying machine-learning techniques to biological prediction
                and classification tasks.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Genetic Analysis
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Computational analysis of genetic sequences and variants.
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Computational Biology
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Using computational methods to explore biological data and
                patterns.
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 p-5">
              <h3 className="font-semibold text-slate-900">
                Drug Target Analysis
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Computational analysis of potential relationships between drugs
                and biological targets.
              </p>
            </div>
          </div>
        </section>

        {/* Available Models */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Available Models
          </h2>

          <div className="space-y-3">
            {models.map((model, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 px-5 py-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                  {index + 1}
                </span>

                <span className="text-slate-700 font-medium">
                  {model}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}