'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* 背景画像：絶対位置 + z-0 + object-contain */}
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        className="absolute top-0 left-0 w-full h-full object-contain z-0 pointer-events-none"
      />

      {/* 重なり確認用ボタン：青色・中央・太め */}
      <button
        onClick={onStart}
        className="absolute z-10 top-[82.5%] left-1/2 transform -translate-x-1/2 w-[74%] h-[6%] bg-blue-600 text-white rounded-full shadow-md text-lg font-bold flex items-center justify-center"
      >
        ▶ はじめる
      </button>
    </div>
  );
}
