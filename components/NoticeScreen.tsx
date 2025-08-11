'use client';

type Props = { onNext: () => void };

export default function NoticeScreen({ onNext }: Props) {
  const SRC = '/images/ui_notice_game_disclaimer.png'; // クエリは付けない

  return (
    <div className="fixed inset-0 z-[999] bg-black">
      {/* 画像を画面いっぱいに敷く（縦横比は保持） */}
      <img
        src={SRC}
        alt="ご注意"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* 下中央の「次へ」ボタン */}
      <button
        onClick={onNext}
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2
                   w-[75vw] max-w-[520px] h-12
                   bg-blue-600 text-white font-bold rounded-lg shadow"
      >
        ▶ 次へ
      </button>
    </div>
  );
}
