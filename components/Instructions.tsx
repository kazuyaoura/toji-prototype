'use client';

import Image from 'next/image';

type Props = { onNext: () => void };

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="fixed inset-0 z-[999] bg-black">
      {/* 背景画像（中央に等比） */}
      <div className="absolute inset-0">
        <Image
          src="/images/ui_notice_game_disclaimer.png"
          alt="ご注意"
          fill
          className="object-contain pointer-events-none"
          priority
        />
      </div>

      {/* ボタン：縦が反転して効く環境向けに top を小さく */}
      <div
        style={{
          position: 'absolute',
          top: '5%',                // ← 小さい top で“画面の下寄り”に出る環境向け
          right: '50%',             // ← 中央寄せ（左右も反転環境想定）
          transform: 'translateX(50%)',
          width: 'min(75vw, 520px)',
          zIndex: 1000,
        }}
      >
        <button
          onClick={onNext}
          className="w-full h-12 bg-blue-600 text-white font-bold rounded-lg shadow"
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
