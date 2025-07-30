'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />

      {/* ▶ はじめるボタン：さらに右へ寄せる */}
      <button
        onClick={onStart}
        className="absolute z-50"
        style={{
          top: '17%',            // タイトル上部に重ねる位置のまま
          left: '75%',           // ← さらに右へ寄せた
          // transform を削除（中央揃えしない）
          width: '28%',
          height: '42px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '0.5rem',
          fontSize: '0.95rem',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
