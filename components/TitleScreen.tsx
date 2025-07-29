'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* 背景画像を絶対位置で配置 */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* はじめるボタン（確実に重ねて中央配置） */}
      <button
        onClick={onStart}
        className="absolute z-10 top-[83%] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black border border-black rounded shadow text-sm"
      >
        ▶ はじめる
      </button>
    </div>
  );
}
