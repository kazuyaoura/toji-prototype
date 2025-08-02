'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      {/* 背景画像を一旦コメントアウト or 除外 */}
      {/*
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />
      */}

      {/* はじめるボタンだけを絶対配置 */}
      <button
        onClick={onStart}
        className="absolute z-50"
        style={{
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '48px',
          backgroundColor: 'red',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '8px',
          fontSize: '1rem',
        }}
      >
        ▶ はじめる（背景なし）
      </button>
    </div>
  );
}
