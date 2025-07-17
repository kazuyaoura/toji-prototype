type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">今日から杜氏！</h1>
      <button
        onClick={onStart}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        はじめる
      </button>
    </div>
  );
}
