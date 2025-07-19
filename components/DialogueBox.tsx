"use client";

import React from "react";

type Props = {
  speaker: string;
  text: string;
};

export default function DialogueBox({ speaker, text }: Props) {
  return (
    <div className="bg-white border border-gray-400 p-4 rounded shadow max-w-xl mx-auto mb-4">
      <p className="text-sm text-gray-500">{speaker}</p>
      <p className="text-lg">{text}</p>
    </div>
  );
}
