"use client";

import React from "react";

type Props = {
  text: string;
};

export default function IntroNarration({ text }: Props) {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center my-6 text-xl font-serif">
      {text}
    </div>
  );
}
