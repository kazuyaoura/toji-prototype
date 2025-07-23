'use client';

import React from 'react';

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6 text-lg text-center"
      onClick={onNext}
    >
      <h1 className="text-2xl font-bold mb-4">注意事項</h1>
      <p className="mb-2">これは試作版です。操作中に不具合が発生する可能性があります。</p>
      <p className="mb-4">画面をタップして次に進んでください。</p>
      <p className="text-sm text-gray-500">(画面をクリック/タップで次へ)</p>
    </div>
  );
}
