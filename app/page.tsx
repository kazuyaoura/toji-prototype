'use client';

import { useState } from 'react';
import Image from 'next/image';
import IntroNarration from '../components/IntroNarration';

export default function Home() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <IntroNarration text="これはナレーションです。" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Image
        src="/title.png"
        alt="タイトル画像"
        width={300}
        height={200}
        className="mb-4"
      />
      <button
        onClick={() => setStarted(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        はじめる
      </button>
    </div>
  );
}
