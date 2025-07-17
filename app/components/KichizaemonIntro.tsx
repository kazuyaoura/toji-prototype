// ファイル名: KichizaemonIntro.tsx
'use client';

import { useState } from 'react';

const lines = [
  '隆介よ、今年の冬はひとつ、お前に本蔵を任せたいと思うてな。',
  '今津の杜氏が倒れてしもうてな……。本蔵のことはお前に託す。',
  '鈴も補佐につけておる。しっかり支えてくれるじゃろう。'
];

export default function KichizaemonIntro({ onFinish }: { onFinish: () => void }) {
  ...
