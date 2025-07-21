'use client';

export default function FloorMap({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">本蔵フロアマップ</h2>
      <img
        src="/map-placeholder.jpg"
        alt="本蔵マップ"
        className="w-full max-w-md mb-6 rounded shadow"
      />
      <p className="mb-4 text-lg">
        この本蔵の構造をしっかり覚えておこう。<br />
        スマホのカメラで撮影しておくと便利だぞ！
      </p>
      <button
        onClick={onNext}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        撮影した！次へ進む
      </button>
    </div>
  );
}
