'use client';

type CharacterName = '隆介' | '鈴';

type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center">
      {/* 反映確認 */}
      <h1 className="text-lg font-bold mt-3 mb-3">主人公を選んでください（v3）</h1>

      {/* 2カラム固定 */}
      <div className="w-full max-w-[640px] px-3 grid grid-cols-2 gap-3">
        {/* 隆介 */}
        <div className="flex flex-col items-center">
          {/* 画像の枠を固定（必ず収まる） */}
          <div className="flex items-center justify-center overflow-hidden"
               style={{ width: '42vw', height: '32vh', maxWidth: 300 }}>
            <img
              src="/images/ryusuke_character.png"
              alt="隆介"
              className="w-full h-full object-contain"
              decoding="async"
            />
          </div>

          {/* catボタン（生HTMLで強制） */}
          <button
            type="button"
            onClick={() => onSelect('隆介')}
            className="w-full mt-2 py-3 px-4 rounded-lg font-bold text-white shadow
                       bg-[#007bff] hover:bg-[#0069d9] active:bg-[#005dc1]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007bff]"
            style={{ fontSize: '1.1rem', maxWidth: 300 }}
          >
            ▶ 隆介を選ぶ
          </button>
        </div>

        {/* 鈴 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center overflow-hidden"
               style={{ width: '42vw', height: '32vh', maxWidth: 300 }}>
            <img
              src="/images/suzu_character.png"
              alt="鈴"
              className="w-full h-full object-contain"
              decoding="async"
            />
          </div>

          <button
            type="button"
            onClick={() => onSelect('鈴')}
            className="w-full mt-2 py-3 px-4 rounded-lg font-bold text-white shadow
                       bg-[#007bff] hover:bg-[#0069d9] active:bg-[#005dc1]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007bff]"
            style={{ fontSize: '1.1rem', maxWidth: 300 }}
          >
            ▶ 鈴を選ぶ
          </button>
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}
