'use client';

import DialogueBox from '../../components/DialogueBox'; // ← パスは必要に応じて調整

const dialogue = [
  {
    speaker: '吉左衛門',
    text: 'よう来てくれたな。',
    image: 'kichizaemon_character.png',
  },
  {
    speaker: '吉左衛門',
    text: '杜氏としての腕、見せてもらおうか。',
    image: 'kichizaemon_character.png',
  },
  {
    speaker: '吉左衛門',
    text: 'まずは、この蔵の様子を見て回るがいい。',
    image: 'kichizaemon_character.png',
  },
];

export default function ProloguePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <DialogueBox dialogue={dialogue} />
    </main>
  );
}
