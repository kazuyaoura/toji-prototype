'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/intro'); // introページに遷移
  };

  return (
    <main style={{ textAlign: 'center' }}>
      <Image
        src="/images/title-image.png"
        alt="タイトル画像"
        width={800}
        height={600}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <button
        onClick={handleStart}
        style={{
          fontSize: '1.5rem',
          padding: '0.75rem 2rem',
          marginTop: '1rem',
          backgroundColor: '#f5f5dc',
          border: '2px solid #000',
          borderRadius: '8px',
        }}
      >
        はじめる
      </button>
    </main>
  );
}
