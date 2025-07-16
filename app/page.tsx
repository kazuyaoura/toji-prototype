// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      {/* タイトル画像 */}
      <Image
        src="/images/title-image.png"
        alt="今日から杜氏！タイトル"
        width={800}
        height={500}
        priority
      />

      {/* はじめにテキスト */}
      <div className="mt-6 text-center max-w-xl">
        <h2 className="text-xl font-bold">はじめに</h2>
        <p className="mt-2 text-sm">
          このゲームは、昭和初期の酒蔵を舞台に、あなたが杜氏として酒造りを体験する物語です。
        </p>

        {/* 注意事項 */}
        <h3 className="mt-4 font-semibold">注意事項</h3>
        <ul className="mt-1 text-sm text-left list-disc list-inside">
          <li>このゲームはフィクションです。実際の工程や製法とは異なる場合があります。</li>
          <li>プレイ中にセーブ機能は行われません。</li>
          <li>スマートフォン推奨です。</li>
        </ul>
      </div>

      {/* はじめるボタン */}
      <Link href="/character-select" className="mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600">
          はじめる
        </button>
      </Link>
    </main>
  );
}
