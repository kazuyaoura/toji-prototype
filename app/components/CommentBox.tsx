import React from 'react';

type CommentBoxProps = {
  speaker: string;
  message: string;
};

export default function CommentBox({ speaker, message }: CommentBoxProps) {
  return (
    <div className="bg-white border rounded-md p-3 shadow-md">
      <p className="text-sm text-gray-500">{speaker}</p>
      <p className="text-lg font-medium text-gray-800">{message}</p>
    </div>
  );
}
