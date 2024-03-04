// TopPage.jsx
import React, { useState } from 'react';
import Ark2TopContents from './ark2TopContents'; // ARK2Wiki コンポーネントをインポート

function TopPage() {
    const [iframeSrc, setIframeSrc] = useState('');

    return (
        <div className="container">
            {/* ... 他のコンテンツ */}
            <Ark2TopContents /> {/* ARK2Wiki コンポーネントを配置 */}
            {/* ... 他のコンテンツ */}
        </div>
    );
}

export default TopPage;