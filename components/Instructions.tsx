'use client';

type Props = { onNext: () => void };

export default function Instructions({ onNext }: Props) {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      // 背景画像として表示（contain で全体を収める / 中央配置）
      style={{
        backgroundImage: 'url(/images/ui_notice_game_disclaimer.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#000', // 余白が出るときの背景（任意で変更OK）
      }}
    >
      {/* 次へボタン：タイトル画面と同じ位置・幅 */}
      <button
        onClick={onNext}
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[75vw] max-w-[520px] h-12 bg-blue-600 text-white font-bold rounded-lg shadow"
      >
        ▶ 次へ
      </button>
    </div>
  );
}
