import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../css/circleMenu.css';
// ... その他のコード ...

const CircleMenu = () => {
  // ステートを追加して、どの小さい円がホバーされているかを追跡します
  const [hoveredCircle, setHoveredCircle] = useState(null);

  // マウスが小さい円の上に入った時のハンドラ
  const handleMouseEnter = (circleId) => {
    setHoveredCircle(circleId);
  };

  // マウスが小さい円から出た時のハンドラ
  const handleMouseLeave = () => {
    setHoveredCircle(null);
  };

  return (
    
    <div className="circle-menu-container">

      
      {/* 1個目*/}
      <div className="circle-menu">
        {/* ここにメインの円の内容を配置 */}
        <div
          className={`small-circle ${hoveredCircle === 'circle1' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('circle1')}
          onMouseLeave={handleMouseLeave}
        ></div>
        {/* ここにメインの円の内容を配置 */}
        <div
          className={`small-circle second-circle ${hoveredCircle === 'circle2' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('circle2')}
          onMouseLeave={handleMouseLeave}
        ></div>
        {/* ここにメインの円の内容を配置 */}
      </div>

      {/* 2個目*/}
      <div className="circle-menu">
        {/* ここにメインの円の内容を配置 */}
        <div
          className={`small-circle ${hoveredCircle === 'circle1' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('circle1')}
          onMouseLeave={handleMouseLeave}
        ></div>
        {/* ここにメインの円の内容を配置 */}
        <div
          className={`small-circle second-circle ${hoveredCircle === 'circle2' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('circle2')}
          onMouseLeave={handleMouseLeave}
        ></div>
        {/* ここにメインの円の内容を配置 */}
      </div>

      {/* 3個目*/}
      <div className="circle-menu">
        {/* ここにメインの円の内容を配置 */}
        <div
          className={`small-circle ${hoveredCircle === 'circle1' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('circle1')}
          onMouseLeave={handleMouseLeave}
        ></div>
        {/* ここにメインの円の内容を配置 */}
        <div
          className={`small-circle second-circle ${hoveredCircle === 'circle2' ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter('circle2')}
          onMouseLeave={handleMouseLeave}
        ></div>
        {/* ここにメインの円の内容を配置 */}
      </div>
      {/* 新しいセット1 */}
      {/* ... 同様に他のセットにも適用 ... */}
    </div>
  );
};

export default CircleMenu;