"use client";

import React from "react";

type Props = {
  onNext: () => void;
};

export default function KichizaemonIntro({ onNext }: Props) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow max-w-xl mx-auto">
      <p className="mb-2">
        わしがこの本蔵の酒造家、辰馬吉左衛門じゃ。まずは蔵のことをよく見て学ぶのじゃ。
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onNext}
      >
        はい、見てまいります！
      </button>
    </div>
  );
}
