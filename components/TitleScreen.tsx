type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">今日から杜氏！</h1>
      <button onClick={onStart} className="mt-4 p-2 bg-blue-500 text-white rounded">
        はじめる
      </button>
    </div>
  );
}
