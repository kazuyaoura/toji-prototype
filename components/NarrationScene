// components/NarrationScene.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import DialogueBox from '@/components/DialogueBox';

type Props = {
  /** ナレーション本文を順に表示 */
  steps: string[];
  /** シーン背景（上部イラスト） */
  sceneImg: string;
  /** ナレーション時に表示するキャラクター画像（任意） */
  narratorImg?: string;
  /** 全ステップ終了時に呼ばれる */
  onComplete: () => void;
  /** 画面リーダー用タイトル（任意） */
  title?: string;
  /** 右上にスキップボタン（デフォルト true） */
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
  const [i, setI] = useState(0);

  const advance = useCallback(() => {
    setI((prev) => {
      const next = prev + 1;
      if (next >= steps.length) {
        onComplete();
        return prev; // 末尾ではインデックス据え置き
      }
      return next;
    });
  }, [steps.length, onComplete]);

  // Enter / Space でも進む
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advance();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [advance]);

  return (
    <div
      className={[
        'min-h-screen w-screen flex flex-col items-center select-none',
        'bg-[#FAF7F2]',
        'bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)]',
        'bg-[length:24px_24px,12px_12px]',
        'bg-[position:0_0,6px_6px]',
      ].join(' ')}
      // どこをタップしても次へ（下部UIはバブリング停止）
      onClick={advance}
    >
      {/* 右上スキップ */}
      {showSkip && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onComplete();
          }}
          className="fixed right-3 top-3 z-50 rounded-full px-3 py-1 text-xs font-bold text-white bg-black/40 hover:bg-black/60"
          style={{ paddingTop: 'max(0.25rem, env(safe-area-inset-top))' }}
          aria-label="スキップ"
        >
          スキップ
        </button>
      )}

      {/* アクセシビリティ用タイトル */}
      <h1 className="sr-only">{title}</h1>

      {/* 上余白 */}
      <div className="h-3" />

      {/* ナレーター（任意） */}
      {narratorImg && (
        <div className="mt-1 pointer-events-none">
          <Image
            src={narratorImg}
            alt="ナレーションキャラクター"
            width={220}
            height={160}
            className="object-contain"
            priority
          />
        </div>
      )}

      {/* シーンイラスト（px固定枠で安定） */}
      <div className="mt-2 w-full flex justify-center">
        <div className="w-[90%] max-w-[720px]">
          <div className="mx-auto w-[320px] h-[180px] sm:w-[420px] sm:h-[210px] rounded-xl overflow-hidden bg-white/70 shadow flex items-center justify-center">
            <Image
              src={sceneImg}
              alt="シーン背景"
              width={420}
              height={210}
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>

      {/* 下部固定：コメント枠（DialogueBox） */}
      <div
        className="fixed left-0 right-0 bottom-0 z-50"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
        onClick={(e) => e.stopPropagation()} // 下部UIクリックで進まない
      >
        <DialogueBox text={steps[i] ?? ''} />
      </div>

      {/* コメント枠ぶんの余白（重なり防止） */}
      <div className="h-[30vh]" />
    </div>
  );
}
