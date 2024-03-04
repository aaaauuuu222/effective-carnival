import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterWindow = () => {
  return (
    <div className="twitter-window">
      {/* Twitterタイムラインを埋め込む */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="survivetheark" // 実際のTwitterハンドルに置き換えてください
        options={{ height: 400, width: 640 }}
        
      />
    </div>
  );
};

export default TwitterWindow;