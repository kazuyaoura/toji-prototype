// app/debug/page.tsx

'use client';

export default function DebugScreen() {
  return (
    <div className="relative w-screen h-screen bg-gray-100">
      <button className="fixed top-0 left-0 m-2 bg-red-500 text-white px-4 py-2 z-50">
        左上
      </button>
      <button className="fixed top-0 right-0 m-2 bg-blue-500 text-white px-4 py-2 z-50">
        右上
      </button>
      <button className="fixed bottom-0 left-0 m-2 bg-green-500 text-white px-4 py-2 z-50">
        左下
      </button>
      <button className="fixed bottom-0 right-0 m-2 bg-yellow-500 text-black px-4 py-2 z-50">
        右下
      </button>
    </div>
  );
}
