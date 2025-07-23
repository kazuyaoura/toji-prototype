'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div
      onClick={onNext}
      className="w-screen h-screen overflow-hidden m-0 p-0 relative cursor-pointer"
    >
      <Image
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
