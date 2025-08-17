// components/CharacterSelect.tsx
'use client';

export type CharacterName = '隆介' | '鈴';

type Props = { onSelect: (character: CharacterName) => void };

/**
 * キャラクター選択：完全固定版（インラインCSSで確実に反映）
 * - 背景はパターン塗り（インライン）
 * - 2カラムは常に横並び（狭幅でも崩れない）
 * - 画像は 160x200 の枠に object-fit: contain で収める
 */
export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FAF7F2',
        backgroundImage:
          'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px, 12px 12px',
        backgroundPosition: '0 0, 6px 6px',
      }}
    >
      {/* 上スペーサー */}
      <div style={{ flex: 1 }} />

      <main style={{ width: '100%', maxWidth: 720, padding: 12 }}>
        {/* タイトル＋飾り */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                height: 1,
                width: '28%',
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.18), rgba(0,0,0,0))',
              }}
            />
            <div
              aria-hidden
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: '#C9A063',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,.15)',
              }}
            />
            <div
              style={{
                height: 1,
                width: '28%',
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.18), rgba(0,0,0,0))',
              }}
            />
          </div>
          <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
            主人公を選んでください
          </h1>
        </div>

        {/* 2カラム（常に横並び） */}
        <div
          style={{
            width: '100%',
            maxWidth: 680,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: 12,
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

          {/* 隆介 */}
          <CharacterCard
            name="隆介"
            imgSrc="/images/ryusuke_character.png"
            onClick={() => onSelect('隆介')}
          />

          {/* 鈴 */}
          <CharacterCard
            name="鈴"
            imgSrc="/images/suzu_character.png"
            onClick={() => onSelect('鈴')}
          />
        </div>
      </main>

      {/* 下スペーサー */}
      <div style={{ flex: 1 }} />
    </div>
  );
}

/** 1枚分のカード（画像枠160×200px、上下も含めて確実に収める） */
function CharacterCard({
  name,
  imgSrc,
  onClick,
}: {
  name: CharacterName;
  imgSrc: string;
  onClick: () => void;
}) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 名札 */}
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: '#222',
          background: 'rgba(255,255,255,0.9)',
          padding: '6px 14px',
          borderRadius: 999,
          boxShadow: '0 1px 3px rgba(0,0,0,.08)',
          marginBottom: 8,
        }}
      >
        {name}
      </div>

      {/* 画像枠 */}
      <div
        style={{
          width: 160,
          height: 200,
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
          src={imgSrc}
          alt={name}
          width={160}
          height={200}
          decoding="async"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* キャッチコピー */}
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
        {name === '隆介' ? (
          <>
            元気で明るく、誰からも好かれる<strong>人気者</strong>。
          </>
        ) : (
          <>
            冷静で頭脳明晰、みんなが頼りにする<strong>理論派</strong>。
          </>
        )}
      </p>

      {/* 決定ボタン（常に青） */}
      <button
        type="button"
        onClick={onClick}
        style={{
          width: '100%',
          maxWidth: 280,
          marginTop: 10,
          padding: '12px 16px',
          border: 'none',
          borderRadius: 12,
          fontWeight: 700,
          color: '#fff',
          backgroundColor: '#1D4ED8', // blue-600
          boxShadow: '0 3px 10px rgba(0,0,0,.15)',
          fontSize: '1.05rem',
          cursor: 'pointer',
        }}
      >
        ▶ {name}を選ぶ
      </button>
    </div>
  );
}
