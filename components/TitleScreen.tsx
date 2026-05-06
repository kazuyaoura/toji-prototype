'use client';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-6">

      <h1 className="text-white text-4xl font-bold">
        今日から杜氏！
      </h1>

      <button
        onClick={onStart}
        className="
          w-64
          h-16
          bg-blue-600
          text-white
          text-2xl
          font-bold
          rounded-xl
          border-4
          border-white
        "
      >
        ▶ はじめる
      </button>

    </div>
  );
}
