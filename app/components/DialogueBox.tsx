'use client';
import React from 'react';

type DialogueBoxProps = {
  speaker: 'ryusuke' | 'suzu' | 'kichizaemon';
  text: string;
};

const speakerImages: Record<DialogueBoxProps['speaker'], string> = {
  ryusuke: '/images/ryusuke_character.png',
  suzu: '/images/suzu_character.png',
  kichizaemon: '/images/kichizaemon_character.png',
};

const DialogueBox = ({ speaker, text }: DialogueBoxProps) => {
  return (
    <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-md border border-gray-300 max-w-2xl">
      <img
        src={speakerImages[speaker]}
        alt={speaker}
        className="w-24 h-24 object-contain"
      />
      <div className="flex-1 text-lg leading-relaxed">{text}</div>
    </div>
  );
};

export default DialogueBox;
