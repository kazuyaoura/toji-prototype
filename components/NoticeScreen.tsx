// components/NoticeScreen.tsx
'use client';

type Props = { onNext: () => void };

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 背景画像（全画面、はみ出し対策） */}
      <img
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        className="absolute inset-0 w-full h-full object-contain bg-black"
        draggable={false}
      />

      {/* 下部センターのCTA（タイトル画面と同テイスト） */}
      <div className="absolute left-1/2 bottom-[5%] -translate-x-1/2 z-10 w-[min(75vw,520px)]">
        <button
          onClick={onNext}
          className="w-full h-12 rounded-lg font-bold text-white shadow"
          style={{ backgroundColor: '#007bff', fontSize: '1rem' }}
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
