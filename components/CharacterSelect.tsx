// components/CharacterSelect.tsx
'use client';

export type CharacterName = '隆介' | '鈴';

type Props = {
  onSelect: (character: CharacterName) => void;
};

/**
 * キャラクター選択：安定版
 * - スマホ崩れ対策済み
 * - 画像暴走防止
 * - ボタン押下安定
 */
export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',

        backgroundColor: '#FAF7F2',
        backgroundImage:
          'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px, 12px 12px',
        backgroundPosition: '0 0, 6px 6px',
      }}
    >
      {/* 上余白 */}
      <div style={{ flex: 1 }} />

      {/* メイン */}
      <main
        style={{
          width: '100%',
          maxWidth: 720,
          padding: 12,
          boxSizing: 'border-box',
        }}
      >
        {/* タイトル */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 8,
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

          <h1
            style={{
              fontSize: 20,
              fontWeight: 700,
              margin: 0,
              color: '#222',
            }}
          >
            主人公を選んでください
          </h1>
        </div>

        {/* キャラ2列 */}
        <div
          style={{
            width: '100%',
            maxWidth: 680,
            margin: '0 auto',

            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,

            position: 'relative',
            alignItems: 'start',
            justifyItems: 'center',
          }}
        >
          {/* 中央線 */}
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

          <CharacterCard
            name="隆介"
            imgSrc="/images/ryusuke_character.png"
            description="元気で明るく、誰からも好かれる人気者。"
            onClick={() => onSelect('隆介')}
          />

          <CharacterCard
            name="鈴"
            imgSrc="/images/suzu_character.png"
            description="冷静で頭脳明晰、みんなが頼りにする理論派。"
            onClick={() => onSelect('鈴')}
          />
        </div>
      </main>

      {/* 下部UI */}
      <div
        style={{
          width: '100%',
          background: '#1b1b1b',
          borderTop: '4px solid white',
          padding: '14px 16px',
          boxSizing: 'border-box',
          textAlign: 'center',
          color: 'white',
          fontSize: 14,
          flexShrink: 0,
        }}
      >
        主人公をタップして選んでください。
      </div>
    </div>
  );
}

/* カード */
function CharacterCard({
  name,
  imgSrc,
  description,
  onClick,
}: {
  name: CharacterName;
  imgSrc: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* 名前 */}
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

      {/* キャラ画像 */}
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
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* 説明 */}
      <p
        style={{
          margin: '8px 0 0',
          fontSize: 13,
          color: '#444',
          lineHeight: 1.5,
          textAlign: 'center',
          maxWidth: 280,
          minHeight: 40,
        }}
      >
        {description}
      </p>

      {/* ボタン */}
      <button
        type="button"
        onClick={onClick}
        style={{
          width: '100%',
          maxWidth: 280,

          marginTop: 10,
          padding: '12px 16px',

          border: '2px solid white',
          borderRadius: 12,

          fontWeight: 700,
          fontSize: '1.05rem',

          color: '#fff',
          backgroundColor: '#1D4ED8',

          boxShadow: '0 3px 10px rgba(0,0,0,.15)',

          cursor: 'pointer',
        }}
      >
        ▶ {name}を選ぶ
      </button>
    </div>
  );
}
