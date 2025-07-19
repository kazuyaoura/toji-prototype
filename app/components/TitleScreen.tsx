import React from 'react';

export default function TitleScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/sakagura.jpg')" }}>
      <h1 className="text-5xl font-bold text-white bg-black bg-opacity-50 p-6 rounded-lg">
        今日から杜氏！
      </h1>
    </div>
  );
}
