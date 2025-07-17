// app/components/TitleScreen.tsx
import React from 'react';

const TitleScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">今日から杜氏！</h1>
      <p className="text-lg">本蔵へようこそ。</p>
    </div>
  );
};

export default TitleScreen;
