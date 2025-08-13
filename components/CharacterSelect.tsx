// components/CharacterSelect.tsx  （v6）
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
        // ★ 画面中央に寄せる
        alignItems: 'center',
      }}
    >
      {/* 上スペーサー（可変） */}
      <div style={{ flex: 1 }} />

      {/* 中央ブロック */}
      <main style={{ width: '100%', maxWidth: 720, padding: '12px' }}>
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
            主人公を選んでください（v6）
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: 13, color: '#555' }}>
            ※ お好きな主人公を選ぶと、この後のセリフや相棒（頭）が変わります
          </p>
        </div>

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
                background: 'rgba(255,255,255,0.8)',
                padding: '4px 10px',
                borderRadius: 999,
                boxShadow: '0 1px 3px rgba(0,0,0,.08)',
                marginBottom: 6,
              }}
            >
              隆介（短髪・笑顔）
            </div>
            <div
              style={{
                width: '44vw', maxWidth: 280, height: '32vh',
                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.6)', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,.06)',
              }}
            >
              <img
                src="/images/ryusuke_character.png" alt="隆介"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                decoding="async"
              />
            </div>
            <button
              type="button" onClick={() => onSelect('隆介')}
              style={{
                width: '100%', maxWidth: 280, marginTop: 10, padding: '12px 16px',
                border: 'none', borderRadius: 12, fontWeight: 700,
                color: '#fff', backgroundColor: '#007bff', boxShadow: '0 3px 10px rgba(0,0,0,.15)',
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
                background: 'rgba(255,255,255,0.8)',
                padding: '4px 10px',
                borderRadius: 999,
                boxShadow: '0 1px 3px rgba(0,0,0,.08)',
                marginBottom: 6,
              }}
            >
              鈴（お団子ヘア）
            </div>
            <div
              style={{
                width: '44vw', maxWidth: 280, height: '32vh',
                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.6)', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,.06)',
              }}
            >
              <img
                src="/images/suzu_character.png" alt="鈴"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                decoding="async"
              />
            </div>
            <button
              type="button" onClick={() => onSelect('鈴')}
              style={{
                width: '100%', maxWidth: 280, marginTop: 10, padding: '12px 16px',
                border: 'none', borderRadius: 12, fontWeight: 700,
                color: '#fff', backgroundColor: '#007bff', boxShadow: '0 3px 10px rgba(0,0,0,.15)',
                fontSize: '1.1rem',
              }}
            >
              ▶ 鈴を選ぶ
            </button>
          </div>
        </div>
      </main>

      {/* 下スペーサー（可変） */}
      <div style={{ flex: 1 }} />
    </div>
  );
}
