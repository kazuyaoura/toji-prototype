// app/components/DialogueBox.tsx

import React, { useState } from 'react';

type DialogueBoxProps = {
  dialogues: string[];
  onComplete?: () => void;
};

const DialogueBox: React.FC<DialogueBoxProps> = ({ dialogues, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete?.();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-blue-600 p-4 text-lg cursor-pointer text-center shadow-lg"
    >
      {dialogues[currentIndex]}
    </div>
  );
};

export default DialogueBox;
