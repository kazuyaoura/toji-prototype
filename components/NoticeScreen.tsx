'use client';

type Props = { onNext: () => void };

export default function NoticeScreen({ onNext }: Props) {
  // キャッシュ回避用にクエリを付ける（値は適宜更新）
  const SRC = '/images/ui_notice_game_disclaimer.png?v=5';

  return (
    <div
      // 画面全面を覆う（他UIより前面）
      className="fixed inset-0 z-[999]"
      style={{
        backgroundImage: `url(${SRC})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#000',
      }}
    >
      {/* フォールバック用の不可視img（失敗時は1pxで可視化） */}
      <img
        src={SRC}
        alt="ご注意（プリロード）"
        style={{ position: 'absolute', width: 0, height: 0, opacity: 0 }}
        onError={(e) => {
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
          e.currentTarget.style.opacity = '1';
        }}
      />

      {/* 下中央の「次へ」 */}
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
