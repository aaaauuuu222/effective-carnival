import React, { useEffect } from 'react';

const TikTokWindow = () => {
  useEffect(() => {
    // TikTokの埋め込みスクリプトを動的にページに追加する処理
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // コンポーネントがアンマウントされた時にスクリプトをページから削除する処理
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tiktok-window">
      <blockquote className="tiktok-embed" 
      cite="https://www.tiktok.com/@naniwadanshi_storm/video/7320597282796260626"
       data-video-id="7320597282796260626" 
       style={{  maxWidth: "400px", minWidth: "325px" }}>
        <section>
          {/* ここに埋め込みたいコンテンツを配置 */}
        </section>
      </blockquote>
      {/* スクリプトはuseEffect内で動的に追加されます */}
    </div>
  );
};

export default TikTokWindow;