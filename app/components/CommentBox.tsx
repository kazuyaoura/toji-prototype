// components/CommentBox.tsx

import Image from "next/image";

type CommentBoxProps = {
  character: string;
  text: string;
  imageSrc?: string;
};

export const CommentBox = ({ character, text, imageSrc }: CommentBoxProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-xl bg-amber-50 p-4 shadow-md">
      <div className="flex items-center space-x-3">
        {imageSrc && (
          <Image src={imageSrc} alt={character} width={64} height={64} className="rounded-full" />
        )}
        <div>
          <p className="font-bold">{character}：</p>
          <p className="text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};
