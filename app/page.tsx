'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/intro');
  };

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <img src="/images/title-image.png" alt="今日から杜氏！" style={{ width: '100%', height: 'auto' }} />

      <button
        onClick={handleStart}
        style={{
          marginTop: '1rem',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#f4e4b5',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
      >
        はじめる
      </button>
    </main>
  );
}
