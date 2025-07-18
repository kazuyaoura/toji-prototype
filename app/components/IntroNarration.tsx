// app/components/IntroNarration.tsx

import React, { useState } from 'react';
import DialogueBox from './DialogueBox';
import KichizaemonIntro from './KichizaemonIntro';
import CharacterSelection from './CharacterSelection'; // あらかじめ作成済みのコンポーネント

const IntroNarration = () => {
  const [step, setStep] = useState(0);

  const narrationLines = [
    'これは、ひとりの杜氏が、本蔵を任されるまでのお話——',
    '近代、酒造りが変わり始めた時代のこと。',
    'この蔵にも、新たな風が吹き込もうとしていた。'
  ];

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <>
      {step === 0 && (
        <DialogueBox dialogues={narrationLines} onComplete={nextStep} />
      )}

      {step === 1 && (
        <KichizaemonIntro onComplete={nextStep} />
      )}

      {step === 2 && (
        <CharacterSelection />
      )}
    </>
  );
};

export default IntroNarration;
