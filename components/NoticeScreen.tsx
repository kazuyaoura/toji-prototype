// components/NoticeScreen.tsx
'use client';

type Props = { onNext: () => void };

export default function NoticeScreen({ onNext }: Props) {
  // キャッシュ更新したい時は v= の数字だけ変えてください
  const SRC = '/images/ui_notice_game_disclaimer.png?v=6';

  return (
    <div
      className="fixed inset-0 z-[200] select-none"
      style={{
        backgroundImage: `url(${SRC})`,
        backgroundSize: 'contain',     // 画像全体を見せる
        backgroundPosition: 'center',  // 中央配置
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',       // 余白色（必要なら変更）
        // iOSのホームバーなど安全域分の下余白
        paddingBottom: 'calc(5% + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {/* 下中央ボタン（タイトルと同テイスト） */}
      <button
        onClick={onNext}
        className="absolute left-1/2 -translate-x-1/2 shadow"
        style={{
          bottom: '5%',
          width: '75vw',
          maxWidth: 520,
          height: 56,
          borderRadius: 12,
          backgroundColor: '#1677ff',
          color: '#fff',
          fontWeight: 800,
          fontSize: '1.125rem',
          letterSpacing: '0.05em',
          boxShadow: '0 6px 16px rgba(0,0,0,.25)',
        }}
        aria-label="次へ進む"
      >
        ▶ 次へ
      </button>
    </div>
  );
}
