'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/prologue')
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>今日から杜氏！</h1>

      <div style={{ marginBottom: '2rem', background: '#fff8e1', padding: '1rem', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>はじめに</h2>
        <p>
          このゲームは、酒ミュージアムにある「本蔵」を舞台に、酒造りを体験できる物語です。
          あなたは今年、新たに杜氏として選ばれました。
          伝統と工夫が交差する本蔵で、最高の酒を目指しましょう。
        </p>
      </div>

      <div style={{ marginBottom: '2rem', background: '#ffebee', padding: '1rem', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>注意事項</h2>
        <p>
          実際の酒造りとは異なる点もありますが、展示と連動しながら楽しめるよう工夫しています。
          スマートフォンを使用する際は、まわりの方のご迷惑にならないようご注意ください。
        </p>
      </div>

      <button
        onClick={handleStart}
        style={{
          padding: '0.75rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        はじめる
      </button>
    </div>
  )
}
