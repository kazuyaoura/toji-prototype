// components/CommentBox.tsx
import React from "react";

interface CommentBoxProps {
  character: "吉左衛門" | "鈴" | "隆介";
  text: string;
  imageSrc: string;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ character, text, imageSrc }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-lg p-4 flex items-start gap-4 z-50">
      <img src={imageSrc} alt={character} className="w-16 h-16 rounded-full object-cover border border-gray-300" />
      <div className="flex-1">
        <div className="text-sm text-gray-500 mb-1">{character}</div>
        <div className="text-base font-medium text-gray-800">{text}</div>
      </div>
    </div>
  );
};
