"use client";

import React from "react";

const faqs = [
  {
    question: "What is BioPredict AI?",
    answer:
      "BioPredict AI is an AI-powered platform designed to support biological prediction, genetic analysis, and computational research.",
  },
  {
    question: "What can I do with BioPredict AI?",
    answer:
      "The platform provides access to different computational biology models for tasks such as sequence analysis, pathogenicity classification, viral disease prediction, splice site prediction, and drug-target analysis.",
  },
  {
    question: "What type of data can be analyzed?",
    answer:
      "The supported data depends on the selected model. Some models work with genetic or DNA sequences, while others analyze biological or drug-related information.",
  },
  {
    question: "Is BioPredict AI a medical diagnostic tool?",
    answer:
      "No. The predictions provided by the platform are intended for computational research and educational purposes and should not be treated as a medical diagnosis.",
  },
  {
    question: "Which technologies are used?",
    answer:
      "The platform uses technologies including Next.js, React, TypeScript, Tailwind CSS, machine learning, and computational biology techniques.",
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-3">
            Help & Information
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-slate-600">
            Find answers to common questions about BioPredict AI.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {faq.question}
              </h2>

              <p className="mt-3 text-slate-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}