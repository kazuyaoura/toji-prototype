'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type NoticeScreenProps = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: NoticeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Image
        src="/images/ui_notice_game_disclaimer.png"
        alt="注意事項"
        width={800} // スマホで合わせるなら調整可能
        height={600}
        className="rounded-lg shadow-lg"
      />
      <Button onClick={onNext} className="mt-6">
        つぎへ
      </Button>
    </div>
  );
}
