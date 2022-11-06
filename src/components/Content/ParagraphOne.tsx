import React from 'react';
interface ParagraphOneProps {
  para: string;
}
const ParagraphOne = ({ para }: ParagraphOneProps) => {
  return (
    <div>
      <blockquote className="p-4 my-4 bg-tan border-l-4 border-gray-300 ">
        <p className="italic font-medium leading-relaxed text-green text-3xl">
          {para}
        </p>
      </blockquote>
    </div>
  );
};

export default ParagraphOne;
