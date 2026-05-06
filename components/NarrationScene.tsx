// components/NarrationScene.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import DialogueBox from '@/components/DialogueBox';

type Props = {
  /** ナレーション本文を順に表示 */
  steps: string[];

  /** シーン背景 */
  sceneImg: string;

  /** ナレーションキャラ画像（任意） */
  narratorImg?: string;

  /** 全終了時 */
  onComplete: () => void;

  /** 表示名 */
  title?: string;

  /** スキップボタン表示 */
  showSkip?: boolean;
};

export default function NarrationScene({
  steps,
  sceneImg,
  narratorImg,
  onComplete,
  title = 'ナレーション',
  showSkip = true,
}: Props) {
  const [index, setIndex] = useState(0);

  const isLast = index >= steps.length - 1;

  const advance = useCallback(() => {
    if (isLast) {
      onComplete();
      return;
    }

    setIndex((prev) => prev + 1);
  }, [isLast, onComplete]);

  // Enter / Space 対応
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advance();
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [advance]);

  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* 右上スキップ */}
      {showSkip && (
        <button
          onClick={onComplete}
          className="
            absolute
            top-3
            right-3
            z-50
            rounded-full
            px-4
            py-2
            text-xs
            font-bold
            text-white
            bg-black/60
            border
            border-white
          "
        >
          スキップ
        </button>
      )}

      {/* 上：背景エリア */}
      <div className="relative flex-1 overflow-hidden">

        {/* 背景 */}
        <Image
          src={sceneImg}
          alt="シーン背景"
          fill
          className="object-cover pointer-events-none"
          priority
        />

        {/* ナレーター立ち絵 */}
        {narratorImg && (
          <div className="absolute bottom-0 left-0 w-1/3 max-w-[260px] z-10">
            <Image
              src={narratorImg}
              alt="ナレーター"
              width={320}
              height={320}
              className="object-contain"
              priority
            />
          </div>
        )}

      </div>

      {/* 下：共通DialogueBox */}
      <DialogueBox
        speaker={title}
        text={steps[index] ?? ''}
        portrait={narratorImg}
        onNext={advance}
        buttonText={isLast ? '進む' : '次へ'}
      />

    </div>
  );
}
