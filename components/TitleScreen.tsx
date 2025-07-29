'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像 */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* 青丸ボタンを再現 */}
      <button
        onClick={onStart}
        className="absolute z-50 top-[83%] left-1/2 transform -translate-x-1/2 px-4 py-2 border border-black text-black bg-white rounded-md text-sm shadow"
      >
        ▶ はじめる
      </button>
    </div>
  );
}
