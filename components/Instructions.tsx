'use client';

type Props = { onNext: () => void };

export default function Instructions({ onNext }: Props) {
  // キャッシュ回避用のクエリ（デプロイ毎に数字を変えると確実）
  const SRC = '/images/ui_notice_game_disclaimer.png?v=3';

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      // 背景画像として描画（他のCSSの干渉を受けにくい）
      style={{
        backgroundImage: `url(${SRC})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#000',
        zIndex: 0,
      }}
    >
      {/* プリロード兼ねた不可視<img>（取得失敗なら alt アイコンで気づける） */}
      <img
        src={SRC}
        alt="ご注意（プリロード）"
        style={{ position: 'absolute', width: 0, height: 0, opacity: 0 }}
        onError={(e) => {
          // ネットワーク欄が見れない時用の簡易デバッグ
          // 失敗したら少しだけ見えるようにする
          (e.currentTarget.style as any).width = '1px';
          (e.currentTarget.style as any).height = '1px';
          (e.currentTarget.style as any).opacity = '1';
        }}
      />

      {/* 次へボタン（タイトルと同じ配置） */}
      <button
        onClick={onNext}
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[75vw] max-w-[520px] h-12
                   bg-blue-600 text-white font-bold rounded-lg shadow z-10"
      >
        ▶ 次へ
      </button>
    </div>
  );
}
