'use client';

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div className="w-screen h-screen overflow-hidden m-0 p-0 relative bg-black">
      {/* 背景画像 */}
      <img
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        className="w-full h-full object-contain"
        draggable={false}
      />

      {/* 次へボタン */}
      <button
        onClick={onNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 active:scale-95 transition"
      >
        ▶ 次へ
      </button>
    </div>
  );
}
