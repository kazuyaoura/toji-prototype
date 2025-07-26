'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-6">タイトル画面（テスト）</h1>
      <button
        onClick={() => {
          console.log('✅ スタートボタン押された（テスト）');
          onStart();
        }}
        className="px-6 py-3 text-xl bg-blue-500 text-white rounded"
      >
        ▶ START
      </button>
    </div>
  );
}
