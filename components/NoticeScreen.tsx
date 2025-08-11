// components/NoticeScreen.tsx
'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
  /** ボタンを出すか（catボタンを別で載せるなら false） */
  showButton?: boolean;
};

export default function NoticeScreen({ onNext, showButton = false }: Props) {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        fill
        priority
        sizes="100vw"
        className="object-contain pointer-events-none select-none z-0"
      />

      {/* 下中央ボタンエリア */}
      <div
        className="absolute z-10 left-1/2"
        style={{
          bottom: '5%',
          transform: 'translateX(-50%)',
          width: 'min(75vw, 520px)',
        }}
      >
        {showButton && (
          <button
            onClick={onNext}
            className="w-full h-12 rounded-lg font-bold text-white shadow"
            style={{ backgroundColor: '#007bff', fontSize: '1rem' }}
          >
            ▶ 次へ
          </button>
        )}
      </div>
    </div>
  );
}
