"use client";

import React from "react";

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff8dc] px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">プレイの注意事項</h2>
      <p className="text-base md:text-lg text-gray-700 mb-6">
        このゲームは酒蔵体験をもとにしたフィクションです。<br />
        実際の工程や環境とは異なる部分があります。<br />
        <br />
        一部に音声・振動・フラッシュ演出が含まれますので、<br />
        体調に不安のある方はご注意ください。
      </p>
      <button
        onClick={onNext}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        次へ
      </button>
    </div>
  );
}
