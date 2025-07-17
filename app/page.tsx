'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/select-character')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white">
      <Image
        src="/images/title-image.png"
        alt="今日から杜氏！"
        width={600}
        height={800}
        priority
      />
      <button
        className="mt-6 px-6 py-3 text-lg font-semibold text-black bg-yellow-200 rounded-lg shadow"
        onClick={handleStart}
      >
        はじめる
      </button>
    </div>
  )
}
