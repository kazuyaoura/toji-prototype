'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import IntroNarration from './components/IntroNarration';

export default function Home() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <IntroNarration />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Image
        src="/images/title_image.png" // 実際のパスに合わせて調整
        alt="タイトル画像"
        width={400}
        height={300}
        className="mb-4"
      />
      <button
        className="bg-red-600 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700"
        onClick={() => setStarted(true)}
      >
        はじめる
      </button>
    </div>
  );
}
