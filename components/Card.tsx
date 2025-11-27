// 'use client';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText = 'Learn More',
  onButtonClick 
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            priority={false}
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder='blur'
            blurDataURL={imageUrl}
          />
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      {buttonText && (
        <div className="px-6 pt-4 pb-2">
          <button 
            onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;