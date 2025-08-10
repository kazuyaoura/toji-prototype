'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = { onNext: () => void };

const SRC = '/images/ui_notice_game_disclaimer.png';

export default function Instructions({ onNext }: Props) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setStatus('ok');
    probe.onerror = () => setStatus('error');
    probe.src = SRC; // 直接ロード確認
  }, []);

  return (
    <div className="w-screen h-screen bg-black text-white">
      {/* 診断バー */}
      <div className="fixed top-0 left-0 right-0 z-[9999] text-sm px-3 py-2 bg-[#111]/80">
        画像診断: {status === 'loading' ? '読み込み中…' : status === 'ok' ? 'OK（取得成功）' : 'NG（取得失敗）'}
        <span className="ml-3 opacity-70">URL: {SRC}</span>
      </div>

      {/* 1. background-image 方式（他CSSの影響を受けにくい） */}
      <section
        className="relative h-1/3 border-b border-white/20"
        style={{
          backgroundImage: `url(${SRC})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute left-2 top-2 text-xs bg-white/10 px-2 py-1 rounded">background-image</div>
      </section>

      {/* 2. <img> 方式（display:none 等の全体CSSに弱い） */}
      <section className="relative h-1/3 grid place-items-center border-b border-white/20">
        <img
          src={SRC}
          alt="ご注意"
          className="max-h-[95%] max-w-[95%] object-contain block"
          onError={() => setStatus('error')}
          onLoad={() => setStatus('ok')}
          draggable={false}
        />
        <div className="absolute left-2 top-2 text-xs bg-white/10 px-2 py-1 rounded">&lt;img&gt;</div>
      </section>

      {/* 3. next/image 方式（fill ではなくサイズ指定で干渉回避） */}
      <section className="relative h-1/3 grid place-items-center">
        <div className="relative w-[90vw] h-[80%]">
          <Image
            src={SRC}
            alt="ご注意"
            fill
            sizes="90vw"
            className="object-contain"
            priority
            onError={() => setStatus('error')}
          />
        </div>
        <div className="absolute left-2 top-2 text-xs bg-white/10 px-2 py-1 rounded">next/image (fill+contain)</div>
      </section>

      {/* 本来の「次へ」ボタン（テスト用に最前面） */}
      <button
        onClick={onNext}
        className="fixed z-[9998] bottom-[5%] left-1/2 -translate-x-1/2 w-[75vw] max-w-[520px] h-12 bg-blue-600 text-white font-bold rounded-lg shadow"
      >
        ▶ 次へ
      </button>
    </div>
  );
}
