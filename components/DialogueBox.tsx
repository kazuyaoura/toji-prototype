// components/DialogueBox.tsx
'use client';

type Props = {
  speaker?: string;
  text: string;
  onNext?: () => void;
  buttonText?: string;
};

export default function DialogueBox({
  speaker = '',
  text,
  onNext,
  buttonText = '次へ',
}: Props) {
  return (
    <div className="w-full bg-[#1b1b1b] border-t-4 border-white px-4 py-4 text-white">
      {speaker && (
        <div className="inline-block bg-blue-700 border-2 border-white rounded-md px-3 py-1 text-sm font-bold mb-2">
          {speaker}
        </div>
      )}

      <div className="bg-[#f8f1df] text-[#2b1d12] border-4 border-white rounded-xl p-4 shadow-lg">
        <p className="text-base leading-relaxed font-medium whitespace-pre-line">
          {text}
        </p>
      </div>

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
