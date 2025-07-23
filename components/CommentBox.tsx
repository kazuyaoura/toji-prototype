'use client';

import React from 'react';

type Props = {
  comment: string;
};

export default function CommentBox({ comment }: Props) {
  return (
    <div className="bg-yellow-100 text-black p-4 rounded-lg shadow-md mb-4 max-w-md mx-auto border border-yellow-400">
      <p className="text-base font-bold leading-relaxed whitespace-pre-line drop-shadow-text">
        {comment}
      </p>
    </div>
  );
}
