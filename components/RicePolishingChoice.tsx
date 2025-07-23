'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface RicePolishingChoiceProps {
  playerName: '隆介' | '鈴';
  selectedRice: string;
  onSelect: (method: string) => void;
  isFirstPlay: boolean;
}

export default function RicePolishingChoice({ playerName, selectedRice, onSelect, isFirstPlay }: RicePolishingChoiceProps) {
  const [step, setStep] = useState(0);

  const playerImage = playerName === '隆介'
    ? '/characters/character_main_ryusuke_transparent.png'
    : '/characters/character_main_suzue_transparent.png';

  const getFirstDialogue = () => {
    if (selectedRice === '播磨産山田錦') {
      return playerName === '隆介'
        ? 'これが播磨の山田錦か……さすがええ粒や。期待が高まるな！'
        : '播磨の山田錦……きれいなお米。これは良いお酒になりそう……！';
    } else if (selectedRice === '西宮産米') {
      return playerName === '隆介'
        ? '地元・西宮の米や。農家さんの想い、ちゃんと形にせなな！'
        : '西宮のお米か……農家さんの気持ち、ちゃんとお酒に込めたいね。';
    } else {
      return playerName === '隆介'
        ? 'ふむ、飯米か……コストは抑えられたな。ここからが腕の見せ所や！'
        : '飯米ね。米代は安く抑えられたし……ここから工夫のしがいがあるわね。';
    }
  };

  const polishingDialogues = [
    'まずは「足踏み」やな。\n人の力でゴリゴリと精米する昔ながらの方法や。\n手間もかかるし、何より疲れる！ それでも200円でできるのは魅力やな。',
    '次は「水車」や。\n近くの夙川（しゅくがわ）にある水車小屋を使うてな、\n自然の力で力強く精米できるんやで。\nただな……ちょっと離れとるから、米の運搬が手間や。400円や。',
    '続いて「蒸気機関」や。\n石炭さえくべれば動いてくれるから、天気に関係なく安定しとる。\n精米のスピードも速いし、仕上がりもなかなかええ。\n800円とちょい高めやけどな。',
    '最後は「機械精米」や！\nこれはもう、最新鋭の技術やで。\n均一に精米できて、味も見た目も上等や。\n…せやけど、1500円。初めての仕込みにはちょっと贅沢かもしれへんな。',
    'それぞれええとこ悪いとこあるさかい、よう考えて決めてな！\nどの方法で精米する？'
  ];

  const handleNext = () => setStep((prev) => prev + 1);

  const polishingOptions = [
    { method: '足踏み', label: '足踏み（伝統の人力）', cost: 200 },
    { method: '水車', label: '水車（自然の力）', cost: 400 },
    { method: '蒸気機関', label: '蒸気機関（近代の力）', cost: 800 },
    { method: '機械精米', label: '機械精米（高精度・高コスト）', cost: 1500 },
  ];

  const renderDialogue = () => {
    let imageSrc = '';
    let speakerName = '';

    if (step === 0) {
      imageSrc = playerImage;
      speakerName = playerName;
    } else {
      imageSrc = '/characters/character_rice_saburo_transparent.png';
      speakerName = '三郎';
    }

    const isSelectionStep = step === polishingDialogues.length;

    return (
      <div className="relative w-full h-full">
        <Image
          src="/backgrounds/bg_rice_storage_room.png"
          alt="背景"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="absolute bottom-1/4 w-full flex justify-center items-end">
          <Image
            src={imageSrc}
            alt={speakerName}
            width={220}
            height={220}
            className="z-10"
          />
        </div>

        {!isSelectionStep && (
          <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
            <div className="relative w-[80%] max-w-md">
              <Image
                src="/ui/ui_comment_window_base.png"
                alt="コメント枠"
                width={800}
                height={200}
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-6 text-base font-bold leading-relaxed text-black whitespace-pre-line">
                {step === 0 ? getFirstDialogue() : polishingDialogues[step - 1]}
              </div>
            </div>
          </div>
        )}

        {!isSelectionStep && (
          <div className="absolute bottom-2 right-4 z-30">
            <Button onClick={handleNext}>▶</Button>
          </div>
        )}

        {isSelectionStep && (
          <div className="absolute bottom-8 w-full flex flex-col items-center space-y-4 z-30">
            <Image
              src="/ui/ui_choices_panel_3options.png"
              alt="選択肢パネル"
              width={500}
              height={200}
            />
            <div className="absolute flex flex-col space-y-2">
              {polishingOptions.map((option) => (
                <Button
                  key={option.method}
                  onClick={() => onSelect(option.method)}
                  disabled={option.method === '機械精米' && isFirstPlay}
                >
                  {`${option.label} - ¥${option.cost}`}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return <div className="relative w-full h-screen overflow-hidden">{renderDialogue()}</div>;
}
