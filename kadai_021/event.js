// textをidにもつHTML要素を取得し、定数に代入
const text =  document.getElementById('text');

//buttonをidにもつHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// ボタンをクリックし、2秒後に「ボタンをクリックしました」と表示する

btn.addEventListener('click',() =>{
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});