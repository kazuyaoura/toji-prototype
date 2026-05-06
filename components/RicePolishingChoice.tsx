'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import DialogueBox from './DialogueBox';
import { MoneyContext } from '@/contexts/MoneyContext';

export interface RicePolishingChoiceProps {
  character: '隆介' | '鈴';
  selectedRice: string;
  onSelect: (method: string) => void;
  isFirstPlay: boolean;
}

const RicePolishingChoice: React.FC<RicePolishingChoiceProps> = ({
  character,
  selectedRice,
  onSelect,
  isFirstPlay,
}) => {
  const [step, setStep] = useState(0);
  const { money, spend } = useContext(MoneyContext);

  const characterImage =
    character === '隆介'
      ? '/characters/character_main_ryusuke_transparent.png'
      : '/characters/character_main_suzue_transparent.png';

  const getFirstDialogue = () => {
    if (selectedRice === '播磨産山田錦') {
      return character === '隆介'
        ? 'これが播磨の山田錦か……さすがええ粒や。期待が高まるな！'
        : '播磨の山田錦……きれいなお米。これは良いお酒になりそう……！';
    } else if (selectedRice === '西宮産米') {
      return character === '隆介'
        ? '地元・西宮の米や。農家さんの想い、ちゃんと形にせなな！'
        : '西宮のお米か……農家さんの気持ち、ちゃんとお酒に込めたいね。';
    } else {
      return character === '隆介'
        ? 'ふむ、飯米か……コストは抑えられたな。ここからが腕の見せ所や！'
        : '飯米ね。米代は安く抑えられたし……ここから工夫のしがいがあるわね。';
    }
  };

  const polishingDialogues = [
    'まずは「足踏み」やな。\n人の力でゴリゴリと精米する昔ながらの方法や。',
    '次は「水車」や。\n自然の力で力強く精米できるんやで。',
    '続いて「蒸気機関」や。\n安定して精米できる近代技術や。',
    '最後は「機械精米」や！\n最新鋭の高精度精米やで。',
    'それぞれええとこ悪いとこあるさかい、よう考えて決めてな！',
  ];

  const polishingOptions = [
    { method: '足踏み', label: '足踏み（伝統の人力）', cost: 200 },
    { method: '水車', label: '水車（自然の力）', cost: 400 },
    { method: '蒸気機関', label: '蒸気機関（近代の力）', cost: 800 },
    { method: '機械精米', label: '機械精米（高精度・高コスト）', cost: 1500 },
  ];

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const isSelectionStep = step > polishingDialogues.length;

  const handleSelect = (method: string, cost: number) => {
    if (money >= cost) {
      spend(cost);
      onSelect(method);
    } else {
      alert('所持金が足りません！');
    }
  };

  const currentText =
    step === 0
      ? getFirstDialogue()
      : polishingDialogues[step - 1];

  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* 上：背景＋キャラ */}
      <div className="relative flex-1">

        {/* 背景 */}
        <Image
          src="/backgrounds/bg_rice_storage_room.png"
          alt="背景"
          fill
          priority
          className="object-cover pointer-events-none"
        />

        {/* キャラ */}
        <div className="absolute bottom-0 left-0 w-1/3 max-w-[240px] z-10">
          <Image
            src={
              step === 0
                ? characterImage
                : '/characters/character_rice_saburo_transparent.png'
            }
            alt="キャラクター"
            width={300}
            height={300}
          />
        </div>

      </div>

      {/* 下：UI */}
      {!isSelectionStep ? (
        <DialogueBox
          speaker={step === 0 ? character : '三郎'}
          text={currentText}
          onNext={handleNext}
        />
      ) : (
        <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4 text-white">

          <div className="text-center mb-4">
            精米方法を選んでください
            <br />
            所持金：¥{money.toLocaleString()}
          </div>

          <div className="space-y-3">
            {polishingOptions.map((option) => (
              <button
                key={option.method}
                onClick={() => handleSelect(option.method, option.cost)}
                disabled={
                  option.method === '機械精米' && isFirstPlay
                }
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  border-2
                  border-white
                  px-4
                  py-3
                  text-left
                  shadow-lg
                  active:scale-95
                  transition
                  disabled:opacity-40
                "
              >
                <div className="font-bold text-lg">
                  {option.label}
                </div>

                <div className="text-sm mt-1">
                  ¥{option.cost.toLocaleString()}
                </div>
              </button>
            ))}
          </div>

          {isFirstPlay && (
            <div className="text-xs mt-3 text-center opacity-80">
              ※ 初回は機械精米は選べません
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default RicePolishingChoice;
