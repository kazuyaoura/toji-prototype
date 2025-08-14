// components/SceneLayout.tsx
'use client';

type Props = {
  characterImg: string; // コメント主キャラ画像パス
  sceneImg: string;     // イラスト背景パス
  comment: string;      // コメント本文
  onNext?: () => void;  // 次へボタン押下時
};

export default function SceneLayout({
  characterImg,
  sceneImg,
  comment,
  onNext,
}: Props) {
  return (
    <div
      className={[
        'min-h-screen w-screen flex flex-col items-center',
        'bg-[#FAF7F2]',
        'bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)]',
        'bg-[length:24px_24px,12px_12px]',
        'bg-[position:0_0,6px_6px]',
      ].join(' ')}
    >
      {/* キャラクター画像 */}
      <div className="mt-4">
        <img
          src={characterImg}
          alt="コメント主キャラクター"
          className="max-h-[120px] object-contain pointer-events-none"
          decoding="async"
        />
      </div>

      {/* シーンイラスト */}
      <div className="mt-2 w-full flex justify-center">
        <div className="w-[90%] max-w-[720px] h-[200px] sm:h-[260px] bg-white/60 rounded-xl shadow flex items-center justify-center overflow-hidden">
          <img
            src={sceneImg}
            alt="シーン背景"
            className="max-w-full max-h-full object-contain pointer-events-none"
            decoding="async"
          />
        </div>
      </div>

      {/* 下部コメント枠 */}
      <div
        className="fixed left-0 right-0 bottom-0 z-50"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 12px)' }}
      >
        <div className="mx-auto w-full max-w-[720px] px-4">
          <div className="bg-white rounded-xl shadow p-3 text-[15px] leading-relaxed text-[#222] min-h-[80px]">
            {comment}
          </div>
          {onNext && (
            <button
              onClick={onNext}
              className="w-full mt-2 py-2 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:translate-y-[1px] shadow"
            >
              ▶ 次へ
            </button>
          )}
        </div>
      </div>

      {/* コメント枠分の余白（スクロール防止用） */}
      <div className="h-[120px]" />
    </div>
  );
}
