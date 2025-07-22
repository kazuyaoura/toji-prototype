// components/DialogueBox.tsx
import Image from 'next/image';

interface DialogueBoxProps {
  text: string;
}

export default function DialogueBox({ text }: DialogueBoxProps) {
  return (
    <div className="fixed bottom-0 w-full h-1/4 flex items-end justify-center z-50">
      <div className="relative w-11/12 max-w-xl">
        <Image
          src="/images/dialogue-frame.png" // 保存した画像のパス
          alt="Dialogue Box"
          layout="responsive"
          width={800}
          height={200}
        />
        <div className="absolute top-[20%] left-6 right-6 text-black text-base leading-relaxed font-medium">
          {text}
        </div>
      </div>
    </div>
  );
}
