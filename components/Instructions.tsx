type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-yellow-50 text-center space-y-6">
      <h2 className="text-2xl font-bold">ご注意</h2>
      <p className="text-lg max-w-md">
        このゲームは史実をもとにしたフィクションです。内容は酒造り体験を目的としており、登場人物・酒銘などは一部創作を含みます。
      </p>
      <button
        onClick={onNext}
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        はじめる
      </button>
    </div>
  );
}
