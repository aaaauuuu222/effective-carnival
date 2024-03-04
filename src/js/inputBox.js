typingInput.addEventListener('input', function() {
    if(typingInput.value === currentWord) {
        message.textContent = "正解!";
        
        // テキストボックスの中身を空にする
        typingInput.value = '';
        
        // テキストボックスのフォーカスを外す
        typingInput.blur();

        // 少し待ってから再度テキストボックスにフォーカスを合わせる
        setTimeout(function() {
            typingInput.focus();
        }, 100);  // 100ミリ秒待つ（この時間は必要に応じて調整）

        setRandomWord();
    }
});
