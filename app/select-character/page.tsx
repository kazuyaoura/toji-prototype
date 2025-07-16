'use client';

import { useRouter } from 'next/navigation';

export default function SelectCharacterPage() {
  const router = useRouter();

  const selectCharacter = (name: string) => {
    // ここで選択を保存する処理を入れてもよい
    router.push('/prologue'); // 次の画面へ遷移（仮）
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>キャラクターを選んでください</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
        <div onClick={() => selectCharacter('隆介')} style={{ cursor: 'pointer' }}>
          <img src="/images/ryusuke_character.png" alt="隆介" width={150} height={150} />
          <p>隆介</p>
        </div>

        <div onClick={() => selectCharacter('鈴')} style={{ cursor: 'pointer' }}>
          <img src="/images/suzu_character.png" alt="鈴" width={150} height={150} />
          <p>鈴</p>
        </div>
      </div>
    </main>
  );
}
