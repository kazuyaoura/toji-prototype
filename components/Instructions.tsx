'use client';

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      {/* 背景画像 */}
      <img
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        className="w-full h-full object-cover pointer-events-none z-0"
      />

      {/* 次へボタン（中央寄せ、下5%） */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(75vw, 520px)',
          zIndex: 10,
        }}
      >
        <button
          onClick={onNext}
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
