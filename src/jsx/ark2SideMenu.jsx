import React, { useState, useEffect } from 'react';
import '../css/sidebar.css'; // CSSファイルのパスを適宜調整してください

const Ark2SideMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // マウスが画面の左端から内側に10%の範囲内に入ると、
      //setMenuVisibleを使ってisMenuVisibleステートをtrueに設定し、メニューを表示します。
      const threshold = window.innerWidth * 0.10;
      setMenuVisible(e.clientX < threshold);
    };

    // マウスの動きを監視するイベントリスナーを追加
    window.addEventListener('mousemove', handleMouseMove);

    // コンポーネントのクリーンアップ時にイベントリスナーを削除
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`sidebar ${isMenuVisible ? 'visible' : ''}`}>
      {/* ここにメニューの内容を追加 */}
      <ul>
        <br />
        <br />
        <li><span class="hover-text">初心者の方</span></li>
        <li><span class="hover-text">おすすめのリスポーン地点</span></li>
        <li><span class="hover-text">リスポーン後にやること</span></li>
        <br />
        <br/>
        <br/>
        <br/>
        <li><span class="hover-text">中級者の方</span></li>
        <li><span class="hover-text">メニュー項目2</span></li>
        <li><span class="hover-text">メニュー項目3</span></li>
        <li><span class="hover-text">メニュー項目4</span></li>
        <li><span class="hover-text">メニュー項目5</span></li>
        <li><span class="hover-text">メニュー項目6</span></li>
        <li><span class="hover-text">メニュー項目7</span></li>
        <li><span class="hover-text">メニュー項目8</span></li>
        <li><span class="hover-text">メニュー項目9</span></li>
        <br/>
        <br/>
        <br/>
        <br/>
        <li><span class="hover-text">上級者の方</span></li>
        <li><span class="hover-text">ブリーディング計算機</span></li>
        <li><span class="hover-text">メニュー項目12</span></li>
        <li><span class="hover-text">メニュー項目13</span></li>
        <li><span class="hover-text">メニュー項目14</span></li>
        <li><span class="hover-text">メニュー項目15</span></li>
        {/* 他のメニュー項目... */}
      </ul>
    </div>
  );
};

export default Ark2SideMenu;