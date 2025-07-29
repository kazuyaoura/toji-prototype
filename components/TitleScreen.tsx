'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（next/image ではなく通常の img） */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面背景"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',      // ← 必要に応じて cover に変更可
          zIndex: 0,
          pointerEvents: 'none',    // ← クリック透過
        }}
      />

      {/* タイトル表示（仮） */}
      <div className="absolute top-10 w-full text-center text-3xl font-bold text-orange-600 z-10">
        今日から社氏！
      </div>

      {/* キャラクターエリア */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-orange-200 rounded-xl flex items-center justify-center text-gray-600 text-lg z-10">
        キャラクター画像エリア
      </div>

      {/* ▶ はじめるボタン */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        style={{
          bottom: '8%',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ ▶ はじめる 押されました！（img背景テスト）');
            onStart();
          }}
          className="px-8 py-4 text-xl font-bold bg-red-600 text-white rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
