// app/components/TitleScreen.tsx

export default function TitleScreen({ onStart }: { onStart: () => void }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>今日から杜氏！</h1>
      <img
        src="/images/title-image.png"
        alt="タイトル画像"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={onStart}
          style={{
            padding: '0.8rem 1.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          はじめる
        </button>
      </div>
    </div>
  );
}
