type Props = {
  text: string;
  onNext: () => void;
};

export default function IntroNarration({ text, onNext }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-xl text-center space-y-6"
      onClick={onNext}
    >
      <p>{text}</p>
      <p className="text-sm text-gray-400">(タップして進む)</p>
    </div>
  );
}
