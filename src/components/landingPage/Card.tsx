import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const Card = ({ title, description, imageUrl, linkUrl }: CardProps) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-sm flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-52 group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-sm leading-6 text-slate-600 mb-6 line-clamp-4">
          {description}
        </p>

        {/* Button */}
        <div className="mt-auto">
          <a
            href={linkUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition-colors duration-200"
          >
            Try Model

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Card;