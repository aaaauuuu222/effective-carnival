const wordDisplay = document.getElementById('word-display');
const message = document.getElementById('message');

const words = ["こんにちは", "さようなら", "ありがとう", "すみません", "こんにちは"];
let currentWord = '';

function setRandomWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
}

setRandomWord();
// モーダルの要素を取得
const modal = document.getElementById('typingModal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

// モーダルを表示する関数
function openModal() {
    modal.style.display = "block";
}

// モーダルを非表示にする関数
function closeModal() {
    modal.style.display = "none";
}

// トリガーボタンがクリックされたときにモーダルを表示
openModalButton.addEventListener('click', openModal);

// クローズボタンやモーダルの外側がクリックされたときにモーダルを非表示にする
closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

