type Props = {
  text: string;
};

export default function IntroNarration({ text }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white text-xl">
      {text}
    </div>
  );
}
