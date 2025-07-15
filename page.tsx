import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>「今日から杜氏！」</h1>
      <p>ようこそ、本蔵へ。</p>
      <Link href="/prologue">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          ▶ 杜氏を始める
        </button>
      </Link>
    </main>
  );
}
