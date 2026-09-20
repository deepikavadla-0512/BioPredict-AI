import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const Card = ({ title, description, imageUrl, linkUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-96 h-120 flex flex-col relative">
      <img src={imageUrl} alt={title} className="object-cover w-full h-48 mb-4" />
      <h3 className="text-2xl font-bold text-[#123265] mb-4">{title}</h3>
      <p className="text-gray-500 text-center mb-4 overflow-hidden text-ellipsis h-24">{description}</p>
      <a
        href={linkUrl}
        className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800 flex items-center"
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
          className="ml-1 w-4 h-4"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default Card;
