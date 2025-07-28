'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-yellow-50">
      {/* タイトルのダミー表示 */}
      <div className="absolute top-10 w-full text-center text-3xl font-bold text-orange-600">
        今日から社氏！
      </div>

      {/* 中央のキャラ部分の仮領域 */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 bg-orange-200 rounded-xl flex items-center justify-center text-gray-600 text-lg">
        キャラクター画像エリア
      </div>

      {/* はじめるボタン（STARTの位置近く） */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{
          bottom: '8%', // 画像のSTARTに合わせたつもり
        }}
      >
        <button
          onClick={() => {
            console.log('✅ ▶ はじめる 押されました！（画像なしテスト）');
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
