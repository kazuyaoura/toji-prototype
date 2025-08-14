// components/CharacterSelect.tsx  ← v10-tw-guard
'use client';

type CharacterName = '隆介' | '鈴';
type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      className={[
        'w-screen min-h-screen flex flex-col items-center',
        'bg-[#FAF7F2]',
        'bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)]',
        'bg-[length:24px_24px,12px_12px]',
        'bg-[position:0_0,6px_6px]',
      ].join(' ')}
    >
      <div className="flex-1" />

      <main className="w-full max-w-[720px] px-3">
        <div className="text-center mb-3">
          <div className="mb-1 flex items-center justify-center gap-2">
            <div className="h-px w-[28%] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <div className="w-[14px] h-[14px] rounded-full bg-[#C9A063] shadow-inner" aria-hidden />
            <div className="h-px w-[28%] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          </div>
          <h1 className="text-[18px] font-bold m-0">
            主人公を選んでください <span className="text-xs text-black/50">v10-tw-guard</span>
          </h1>
        </div>

        <div className="relative mx-auto grid w-full max-w-[680px] grid-cols-2 gap-4 place-items-center">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent"
          />

          {/* 隆介 */}
          <div className="w-full flex flex-col items-center">
            <div className="text-[16px] font-bold text-[#222] bg-white/90 px-3 py-1 rounded-full shadow-sm mb-2">隆介</div>

            {/* 画像枠：固定vhは使わない */}
            <div className="w-[44vw] max-w-[200px] max-h-[220px] overflow-hidden flex items-center justify-center bg-white/60 rounded-xl shadow">
              <img
                src="/images/ryusuke_character.png"
                alt="隆介"
                className="!w-full !h-auto object-contain block"
                decoding="async"
              />
            </div>

            <p className="mt-2 text-[13px] text-[#444] leading-snug text-center max-w-[280px]">
              元気で明るく、誰からも好かれる<strong>人気者</strong>。
            </p>

            <button
              type="button"
              onClick={() => onSelect('隆介')}
              className="w-full max-w-[280px] mt-2 px-4 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:translate-y-[1px] shadow"
            >
              ▶ 隆介を選ぶ
            </button>
          </div>

          {/* 鈴 */}
          <div className="w-full flex flex-col items-center">
            <div className="text-[16px] font-bold text-[#222] bg-white/90 px-3 py-1 rounded-full shadow-sm mb-2">鈴</div>

            <div className="w-[44vw] max-w-[200px] max-h-[220px] overflow-hidden flex items-center justify-center bg-white/60 rounded-xl shadow">
              <img
                src="/images/suzu_character.png"
                alt="鈴"
                className="!w-full !h-auto object-contain block"
                decoding="async"
              />
            </div>

            <p className="mt-2 text-[13px] text-[#444] leading-snug text-center max-w-[280px]">
              冷静で頭脳明晰、みんなが頼りにする<strong>理論派</strong>。
            </p>

            <button
              type="button"
              onClick={() => onSelect('鈴')}
              className="w-full max-w-[280px] mt-2 px-4 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:translate-y-[1px] shadow"
            >
              ▶ 鈴を選ぶ
            </button>
          </div>
        </div>
      </main>

      <div className="flex-1" />
    </div>
  );
}
