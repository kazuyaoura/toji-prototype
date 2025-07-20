type Props = {
  onSelect: (name: string) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-50 text-center space-y-6">
      <h2 className="text-2xl font-bold">キャラクター選択</h2>
      <div className="flex gap-6">
        <button
          onClick={() => onSelect("隆介")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          隆介で始める
        </button>
        <button
          onClick={() => onSelect("鈴")}
          className="px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
        >
          鈴で始める
        </button>
      </div>
    </div>
  );
}
