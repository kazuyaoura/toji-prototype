'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（START絵付き） */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        className="w-full h-full object-contain"
        style={{ pointerEvents: 'none' }}
      />

      {/* 猿若方式：画像の上に絶対配置ボタン */}
      <button
        onClick={() => {
          console.log('▶ はじめる（猿若方式）押されたよ！');
          onStart();
        }}
        className="absolute"
        style={{
          top: '83%',            // ← 必要に応じて微調整
          left: '50%',
          width: '74%',
          height: '6.5%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(255, 0, 0, 0.5)', // ← 目視確認用（完成時は透明に）
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
