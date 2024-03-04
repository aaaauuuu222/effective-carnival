const typingInput = document.getElementById('typing-input');
const keys = document.querySelectorAll('.key');

//キー押下時
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();  // Tabキーのデフォルトの動作をキャンセル
    }

    let keyElement = document.querySelector(`.key[data-key="${event.key.toLowerCase()}"]`);
    if (keyElement) {
        keyElement.classList.add('pressed');
    }
});

//キーを放したとき
document.addEventListener('keyup', function(event) {
    let key = event.key;
    let halfWidthKey = toHalfWidth(key).toLowerCase();
    let keyElement = document.querySelector(`.key[data-key="${halfWidthKey}"]`);
    if (keyElement) {
        keyElement.classList.add('pressed');
        setTimeout(() => {
            keyElement.classList.remove('pressed');
        }, 300);  // 0.3秒後に色を戻す
    }
});

//正規表現を利用して文字列内の全角ASCII文字を検出して半角文字に変換
function toHalfWidth(str) {
    return str.replace(/[！-～]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}



