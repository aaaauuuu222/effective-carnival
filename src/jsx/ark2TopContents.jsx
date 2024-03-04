import React from 'react';
import '../css/ark2Body.css';
import '../css/header.css';
import '../css/ark2BackGround.css';
import '../css/socialMediaStyle.css'
import Ark2SideMenu from './ark2SideMenu';
import Ark2HeaderMenu from './ark2HeaderMenu';
import TwitterWindow from './twitterWindow';
import YoutubeWindow from './youtubeWindow';
import CircleMenu from './circleMenu';
import TikTokWindow from './tikTokWindow';

const Ark2TopContents = () => {
  const videoId = 'MNRPO8KjosU'; // 実際のYouTube動画IDに置き換えてください
  return (
    //  <div className="background-image"> {/* 背景画像のクラスを適用 */}
    
      <div className="container mx-auto }">
        {/* <Ark2HeaderParts /> */}
        <Ark2HeaderMenu />
        <Ark2SideMenu />
        


        <div >
         {/* Sidebar */}
          <div className="p-4 ">
          
            <div className="top-contents-container">

            
             <div className="top-contents">
               <h1>ARK Survival Ascended</h1>
               <p>当攻略サイトは、初心者,中級者,上級者 </p>
               <p>それぞれの方に使いやすいと思ってもらえるように作成します。</p>

               {/* 他の概要情報 */}
              </div> 
            </div>
          </div>

          
          <div >
              <CircleMenu /> {/* CircleMenuコンポーネントを配置 */}
          </div>
         {/* Main Content */}


        </div>
        {/*footer Content */}
        <div className="social-media-windows" >
        
              <TwitterWindow />
              <YoutubeWindow videoId={videoId}/> 
              {/* <TikTokWindow /> */}
        </div>
      </div>

  );
};

export default Ark2TopContents;
