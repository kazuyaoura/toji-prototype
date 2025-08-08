'use client';

import { useState } from 'react';

type Props = { onNext: () => void };

export default function Instructions({ onNext }: Props) {
  const [err, setErr] = useState<string | null>(null);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 背景画像：最小構成（<img>）で絶対表示、位置は全面 */}
      <img
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
        onError={() => setErr('画像の読み込みに失敗しました')}
        onLoad={() => setErr(null)}
      />

      {/* 次へボタン：タイトル画面と同位置 */}
      <button
        onClick={onNext}
        className="absolute z-10 bottom-[5%] left-1/2 -translate-x-1/2 w-[75vw] max-w-[520px] h-12 bg-blue-600 text-white font-bold rounded-lg shadow"
      >
        ▶ 次へ
      </button>

      {/* デバッグ用オーバーレイ（エラー時だけ表示） */}
      {err && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 text-red-200 font-bold">
          {err}（/images/ui_notice_game_disclaimer.png）
        </div>
      )}
    </div>
  );
}
