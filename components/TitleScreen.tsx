import React from "react";
import { useNavigate } from "react-router-dom";
import "./TitleScreen.css";

const TitleScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/notice"); // 注意画面など次のページへ
  };

  return (
    <div className="title-screen">
      <img
        src="/images/title_main_with_start.png"
        alt="タイトル背景"
        className="title-background"
      />
      {/* 画像内にSTARTボタンが描かれているので、実際のボタンは透明で配置 */}
      <button className="start-overlay-button" onClick={handleStart}>
        はじめる
      </button>
    </div>
  );
};

export default TitleScreen;
