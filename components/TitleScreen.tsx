'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（画像全体に表示） */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain', // 必要なら 'cover' に変更してフィット調整
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* 本物のはじめるボタン（まずは赤く表示） */}
      <div
        className="absolute z-50 left-1/2"
        style={{
          top: '83%', // STARTボタンの中央に重ねたい位置。必要なら微調整
          width: '72%',
          height: '6%',
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ ▶ はじめる 押されました');
            onStart();
          }}
          className="w-full h-full text-xl font-bold bg-red-600 text-white rounded-xl shadow-md hover:opacity-90 active:scale-95 transition"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
