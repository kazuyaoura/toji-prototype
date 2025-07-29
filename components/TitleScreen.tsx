'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（coverで余白を排除） */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // ← ここ変更
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ボタン：まず中央に表示することを最優先 */}
      <div
        className="absolute z-50 top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ はじめる 押されました');
            onStart();
          }}
          className="px-8 py-4 text-xl font-bold bg-red-600 text-white rounded-xl shadow-lg"
        >
          ▶ はじめる（中央テスト）
        </button>
      </div>
    </div>
  );
}
