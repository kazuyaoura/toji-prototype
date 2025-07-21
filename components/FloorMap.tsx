'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

type FloorMapProps = {
  onNext: () => void;
};

export default function FloorMap({ onNext }: FloorMapProps) {
  return (
    <div className="p-4 text-center space-y-6">
      <h2 className="text-xl font-bold">本蔵フロアマップ</h2>
      <p className="text-base">
        まずはこれから働く「本蔵」の構造を頭に入れておこう！
        <br />
        カメラで撮ってもいいぞ！
      </p>

      {/* フロアマップ画像を入れる場所（後で差し替え可能） */}
      <div className="w-full max-w-md mx-auto border rounded-lg overflow-hidden shadow">
        <img
          src="/floor-map.jpg"
          alt="本蔵フロアマップ"
          className="w-full object-contain"
        />
      </div>

      {/* 次へ進むボタン */}
      <Button onClick={onNext}>
        理解した！次へ進む
      </Button>
    </div>
  );
}
