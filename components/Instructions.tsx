'use client';

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div
      onClick={onNext}
      className="w-screen h-screen overflow-hidden m-0 p-0 relative cursor-pointer"
    >
      <img
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
