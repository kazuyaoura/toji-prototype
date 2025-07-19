"use client";

import React from "react";

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f0e3] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 drop-shadow">
        今日から杜氏！
      </h1>
      <p className="mb-8 text-gray-700">西宮の酒蔵で始まる、新米杜氏の物語。</p>
      <button
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
        onClick={onStart}
      >
        はじめる
      </button>
    </div>
  );
}
