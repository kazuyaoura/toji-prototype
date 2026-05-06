'use client';

import Image from 'next/image';

type Props = {
  speaker?: string;
  text: string;
  portrait?: string;
  onNext?: () => void;
  buttonText?: string;
};

export default function DialogueBox({
  speaker = '',
  text,
  portrait,
  onNext,
  buttonText = '次へ',
}: Props) {
  return (
    <div className="w-full bg-[#1b1b1b] border-t-4 border-white px-4 py-3 text-white">

      <div className="flex items-start gap-3">

        {/* 顔アイコン */}
        <div
          className="
            w-16
            h-16
            rounded-lg
            border-2
            border-white
            bg-[#2b2b2b]
            overflow-hidden
            flex-shrink-0
            relative
          "
        >
          {portrait ? (
            <Image
              src={portrait}
              alt={speaker}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-300">
              顔
            </div>
          )}
        </div>

        {/* 会話 */}
        <div className="flex-1">

          {/* 名前札 */}
          {speaker && (
            <div className="inline-block bg-blue-700 border-2 border-white rounded-md px-3 py-1 text-sm font-bold mb-2">
              {speaker}
            </div>
          )}

          {/* 本文 */}
          <div className="bg-[#f8f1df] text-[#2b1d12] border-4 border-white rounded-xl p-4 shadow-lg min-h-[96px]">
            <p className="text-base leading-relaxed font-medium whitespace-pre-line">
              {text}
            </p>
          </div>

        </div>
      </div>

      {/* ボタン */}
      {onNext && (
        <div className="flex justify-end mt-3">
          <button
            onClick={onNext}
            className="
              min-w-32
              h-11
              rounded-lg
              bg-blue-600
              text-white
              font-bold
              border-2
              border-white
              shadow-lg
              active:scale-95
              transition
            "
          >
            ▶ {buttonText}
          </button>
        </div>
      )}

    </div>
  );
}
