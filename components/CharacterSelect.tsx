// components/CharacterSelect.tsx （v9）
'use client';

type CharacterName = '隆介' | '鈴';
type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#FAF7F2',
        backgroundImage:
          'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px, 12px 12px',
        backgroundPosition: '0 0, 6px 6px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* 上スペーサー */}
      <div style={{ flex: 1 }} />

      <main style={{ width: '100%', maxWidth: 720, padding: '12px' }}>
        {/* タイトル＆飾り罫 */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 6 }}
          >
            <div
              style={{
                height: 1,
                width: '28%',
                background: 'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.18), rgba(0,0,0,0))',
              }}
            />
            <div
              aria-hidden
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: '#C9A063',
                boxShadow: '0 1px 2px rgba(0,0,0,.15) inset',
              }}
            />
            <div
              style={{
                height: 1,
                width: '28%',
                background: 'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.18), rgba(0,0,0,0))',
              }}
            />
          </div>

          <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
            主人公を選んでください（v9）
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>
            ※ お好きな主人公を選ぶと、この後のセリフや相棒（頭）が変わります
          </p>
        </div>

        {/* 2カラム */}
        <div
          style={{
            width: '100%',
            maxWidth: 680,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: 16,
            alignItems: 'start',
            justifyItems: 'center',
            position: 'relative',
          }}
        >
          {/* 仕切り線 */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              transform: 'translateX(-0.5px)',
              background:
                'linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 15%, rgba(0,0,0,0.08) 85%, transparent)',
            }}
          />

          {/* 隆介カード */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                fontSize: 12,
                color: '#333',
                background: 'rgba(255,255,255,0.85)',
                padding: '4px 10px',
                borderRadius: 999,
                boxShadow: '0 1px 3px rgba(0,0,0,.08)',
                marginBottom: 6,
              }}
            >
              隆介
            </div>

            <div
              style={{
                width: '44vw',
                maxWidth: 280,
                height: '32vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.6)',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,.06)',
              }}
            >
              <img
                src="/images/ryusuke_character.png"
                alt="隆介"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                decoding="async"
              />
            </div>

            <p
              style={{
                margin: '8px 0 0',
                fontSize: 13,
                color: '#444',
                lineHeight: 1.5,
                textAlign: 'center',
                maxWidth: 280,
              }}
            >
              元気で明るく、誰からも好かれる<strong>人気者</strong>。
            </p>

            <button
              type="button"
              onClick={() => onSelect('隆介')}
              style={{
                width: '100%',
                maxWidth: 280,
                marginTop: 10,
                padding: '12px 16px',
                border: 'none',
                borderRadius: 12,
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#007bff',
                boxShadow: '0 3px 10px rgba(0,0,0,.15)',
                fontSize: '1.1rem',
              }}
            >
              ▶ 隆介を選ぶ
            </button>
          </div>

          {/* 鈴カード */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                fontSize: 12,
                color: '#333',
                background: 'rgba(255,255,255,0.85)',
                padding: '4px 10px',
                borderRadius: 999,
                boxShadow: '0 1px 3px rgba(0,0,0,.08)',
                marginBottom: 6,
              }}
            >
              鈴
            </div>

            <div
              style={{
                width: '44vw',
                maxWidth: 280,
                height: '32vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.6)',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,.06)',
              }}
            >
              <img
                src="/images/suzu_character.png"
                alt="鈴"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                decoding="async"
              />
            </div>

            <p
              style={{
                margin: '8px 0 0',
                fontSize: 13,
                color: '#444',
                lineHeight: 1.5,
                textAlign: 'center',
                maxWidth: 280,
              }}
            >
              冷静で頭脳明晰、みんなが頼りにする<strong>理論派</strong>。
            </p>

            <button
              type="button"
              onClick={() => onSelect('鈴')}
              style={{
                width: '100%',
                maxWidth: 280,
                marginTop: 10,
                padding: '12px 16px',
                border: 'none',
                borderRadius: 12,
                fontWeight: 700,
                color: '#fff',
                backgroundColor: '#007bff',
                boxShadow: '0 3px 10px rgba(0,0,0,.15)',
                fontSize: '1.1rem',
              }}
            >
              ▶ 鈴を選ぶ
            </button>
          </div>
        </div>
      </main>

      {/* 下スペーサー */}
      <div style={{ flex: 1 }} />
    </div>
  );
}
