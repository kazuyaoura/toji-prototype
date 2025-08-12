// components/CharacterSelect.tsx
'use client';

type CharacterName = '隆介' | '鈴';

type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px',
        boxSizing: 'border-box',
      }}
    >
      {/* 反映確認 */}
      <h1 style={{ fontSize: 18, fontWeight: 700, margin: '8px 0 12px' }}>
        主人公を選んでください（v4）
      </h1>

      {/* 2カラム固定（グリッドをインライン指定） */}
      <div
        style={{
          width: '100%',
          maxWidth: 640,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 12,
          rowGap: 12,
          alignItems: 'start',
          justifyItems: 'center',
        }}
      >
        {/* 隆介 */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 画像枠（必ず収まる） */}
          <div
            style={{
              width: '44vw',
              maxWidth: 300,
              height: '34vh',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/ryusuke_character.png"
              alt="隆介"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'static',   // 念のため絶対配置を無効化
                display: 'block',
              }}
              decoding="async"
            />
          </div>

          {/* catボタン（インラインで強制） */}
          <button
            type="button"
            onClick={() => onSelect('隆介')}
            style={{
              width: '100%',
              maxWidth: 300,
              marginTop: 8,
              padding: '12px 16px',
              border: 'none',
              borderRadius: 12,
              fontWeight: 700,
              color: '#fff',
              backgroundColor: '#007bff',
              boxShadow: '0 2px 6px rgba(0,0,0,.2)',
              fontSize: '1.1rem',
            }}
          >
            ▶ 隆介を選ぶ
          </button>
        </div>

        {/* 鈴 */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '44vw',
              maxWidth: 300,
              height: '34vh',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/suzu_character.png"
              alt="鈴"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'static',
                display: 'block',
              }}
              decoding="async"
            />
          </div>

          <button
            type="button"
            onClick={() => onSelect('鈴')}
            style={{
              width: '100%',
              maxWidth: 300,
              marginTop: 8,
              padding: '12px 16px',
              border: 'none',
              borderRadius: 12,
              fontWeight: 700,
              color: '#fff',
              backgroundColor: '#007bff',
              boxShadow: '0 2px 6px rgba(0,0,0,.2)',
              fontSize: '1.1rem',
            }}
          >
            ▶ 鈴を選ぶ
          </button>
        </div>
      </div>

      <div style={{ height: 16 }} />
    </div>
  );
}
