"use client";

import React from "react";

type Props = {
  onNext: () => void;
};

export default function CharacterSelect({ onNext }: Props) {
  const handleSelect = (character: string) => {
    // キャラクター名を一時的にログ出力（本実装では状態管理に記録）
    console.log("選ばれたキャラクター:", character);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefefe] text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">キャラクターを選んでください</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <button
          onClick={() => handleSelect("隆介")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-bold"
        >
          隆介（男性）
        </button>

        <button
          onClick={() => handleSelect("鈴")}
          className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-bold"
        >
          鈴（女性）
        </button>
      </div>

      <p className="text-sm text-gray-600">選択後、物語が始まります。</p>
    </div>
  );
}
