type Props = {
  onFinish: () => void;
};

export default function KichizaemonIntro({ onFinish }: Props) {
  const lines = [
    '──今津の杜氏が倒れたそうじゃ。',
    '急きょ、本蔵の杜氏としてお前に働いてもらいたい。',
    '大丈夫じゃ。頭には鈴がおる。',
    'この蔵のことは、よう知っとる。',
    'さ、準備はええか？',
  ];

  return (
    <div className="p-4">
      {lines.map((line, index) => (
        <div key={index} className="mb-4">
          <div className="text-sm font-bold mb-1">吉左衛門</div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
            {line}
          </div>
        </div>
      ))}
      <button
        onClick={onFinish}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        はい（次へ）
      </button>
    </div>
  );
}
