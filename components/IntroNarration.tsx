"use client";

import React from "react";

type Props = {
  text: string;
  onNext: () => void;
};

export default function IntroNarration({ text, onNext }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-xl">{text}</p>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        onClick={onNext}
      >
        次へ
      </button>
    </div>
  );
}
