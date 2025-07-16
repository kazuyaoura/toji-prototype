'use client';

import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/select-character'); // 次のステップ（キャラ選択）へ遷移予定
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>はじめに</h1>
      <p>
        このゲームは、昭和初期の酒蔵を舞台に、あなたが杜氏として酒造りを体験する物語です。
      </p>

      <h2>注意事項</h2>
      <ul>
        <li>このゲームはフィクションです。実際の工程や製法とは異なる場合があります。</li>
        <li>プレイ中にセーブ機能は行われません。</li>
        <li>スマートフォン推奨です。</li>
      </ul>

      <button
        onClick={handleNext}
        style={{
          fontSize: '1.25rem',
          padding: '0.5rem 1.5rem',
          marginTop: '2rem',
          backgroundColor: '#eee',
          border: '1px solid #999',
          borderRadius: '6px',
        }}
      >
        次へ
      </button>
    </main>
  );
}
