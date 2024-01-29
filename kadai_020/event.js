// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされた時にイベントを実行する
btn.addEventListener('click' , () => {
  // 「ボタンをクリックしました」というテキストを追加
  text.textContent = 'ボタンをクリックしました';
});