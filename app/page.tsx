'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TitleScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/prologue');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Image
        src="/title-image.png"
        alt="今日から杜氏！"
        width={800}
        height={0}
        style={{ height: 'auto' }}
        priority
      />
      <button
        onClick={handleStart}
        className="mt-6 px-6 py-3 bg-orange-600 text-white text-xl font-bold rounded-full shadow hover:bg-orange-700 transition"
      >
        はじめる
      </button>
    </div>
  );
}
