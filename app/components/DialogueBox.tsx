
import React from 'react';

type DialogueBoxProps = {
  speaker: string;
  message: string;
};

export default function DialogueBox({ speaker, message }: DialogueBoxProps) {
  return (
    <div className="bg-yellow-100 border border-yellow-400 rounded-md p-4 my-2">
      <div className="text-sm font-semibold text-yellow-700 mb-1">{speaker}</div>
      <div className="text-base text-gray-900">{message}</div>
    </div>
  );
}
