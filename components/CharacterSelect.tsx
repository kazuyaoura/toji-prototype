// components/CharacterSelect.tsx  ← Tailwind版（v10-tw）
'use client';

import { Button } from '@/components/ui/button';

type CharacterName = '隆介' | '鈴';
type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      className="min-h-screen w-screen flex flex-col items-center"
      style={{
        backgroundColor: '#FAF7F2',
        backgroundImage:
          'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px, 12px 12px',
        backgroundPosition: '0 0, 6px 6px',
      }}
    >
      {/* 上スペーサー */}
      <div className="flex-1" />

      <main className="w-full max-w-[720px] px-3">
        {/* タイトル＋飾り */}
        <div className="text-center mb-3">
          <div className="mb-1 flex items-center justify-center gap-2">
            <div className="h-px w-[28%] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <div className="w-[14px] h-[14px] rounded-full bg-[#C9A063] shadow-inner" aria-hidden />
            <div className="h-px w-[28%] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          </div>
          <h1 className="text-[18px] font-bold m-0">主人公を選んでください</h1>
        </div>

        {/* 2カラム（常に横並び） */}
        <div className="relative mx-auto grid w-full max-w-[680px] grid-cols-2 gap-4 place-items-center">
          {/* 縦仕切り */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent"
          />

          {/* 隆介 */}
          <div className="w-full flex flex-col items-center">
            {/* 名札（大きめ） */}
            <div className="text-[16px] font-bold text-[#222] bg-white/90 px-3 py-1 rounded-full shadow-sm mb-2">
              隆介
            </div>

            {/* 画像枠 */}
            <div className="w-[44vw] max-w-[280px] h-[32vh] overflow-hidden flex items-center justify-center bg-white/60 rounded-xl shadow">
              <img
                src="/images/ryusuke_character.png"
                alt="隆介"
                className="w-full h-full object-contain block"
                decoding="async"
              />
            </div>

            {/* キャッチ */}
            <p className="mt-2 text-[13px] text-[#444] leading-snug text-center max-w-[280px]">
              元気で明るく、誰からも好かれる<strong>人気者</strong>。
            </p>

            {/* catボタン（青） */}
            <Button className="w-full max-w-[280px] mt-2" onClick={() => onSelect('隆介')}>
              ▶ 隆介を選ぶ
            </Button>
          </div>

          {/* 鈴 */}
          <div className="w-full flex flex-col items-center">
            <div className="text-[16px] font-bold text-[#222] bg-white/90 px-3 py-1 rounded-full shadow-sm mb-2">
              鈴
            </div>

            <div className="w-[44vw] max-w-[280px] h-[32vh] overflow-hidden flex items-center justify-center bg-white/60 rounded-xl shadow">
              <img
                src="/images/suzu_character.png"
                alt="鈴"
                className="w-full h-full object-contain block"
                decoding="async"
              />
            </div>

            <p className="mt-2 text-[13px] text-[#444] leading-snug text-center max-w-[280px]">
              冷静で頭脳明晰、みんなが頼りにする<strong>理論派</strong>。
            </p>

            <Button className="w-full max-w-[280px] mt-2" onClick={() => onSelect('鈴')}>
              ▶ 鈴を選ぶ
            </Button>
          </div>
        </div>
      </main>

      {/* 下スペーサー */}
      <div className="flex-1" />
    </div>
  );
}
