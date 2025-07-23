'use client';

import { Button } from '@/components/ui/button';

type FloorMapProps = {
  onNext: () => void;
};

export default function FloorMap({ onNext }: FloorMapProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden" onClick={onNext}>
      {/* 背景（酒蔵内部） */}
      <img
        src="/images/bg_wooden_storage_room.png"
        alt="本蔵内部"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* コメント枠 */}
      <img
        src="/images/ui_comment_window_base.png"
        alt="コメント枠"
        className="absolute bottom-0 left-0 w-full h-[25vh] object-cover"
      />

      {/* コメントテキスト */}
      <div className="absolute bottom-[6vh] left-[5vw] right-[5vw] text-[1.2rem] font-bold text-gray-800 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
        ではまず、これから働くこの本蔵の構造をしっかり撮影しておこう。
      </div>
    </div>
  );
}
