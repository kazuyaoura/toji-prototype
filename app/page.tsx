'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <Image
        src="/images/title_visual.png"
        alt="今日から杜氏！"
        width={600}
        height={300}
        style={{ marginBottom: '1.5rem' }}
      />

      <h1>今日から杜氏！</h1>

      <section style={{ margin: '2rem auto', maxWidth: '600px', textAlign: 'left' }}>
        <h2>はじめに</h2>
        <p>
          このゲームは、昭和初期の酒蔵を舞台に、あなたが杜氏として酒造りを体験する物語です。
        </p>

        <h2>注意事項</h2>
        <ul>
          <li>このゲームはフィクションです。実際の工程や製品とは異なる場合があります。</li>
          <li>プレイ中にセーブは自動的に行われます。</li>
          <li>スマートフォン推奨です。</li>
        </ul>
      </section>

      <button
        onClick={() => router.push('/prologue')}
        style={{
          marginTop: '2rem',
          fontSize: '1.2rem',
          padding: '0.5rem 1rem',
        }}
      >
        はじめる
      </button>
    </main>
  );
}
