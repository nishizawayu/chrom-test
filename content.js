console.log(document);
window.onload = () => {
  document.querySelector(".App").style = "background:red";
  // ボタンの宣言
  const btns = document.querySelectorAll(".chome-btn");

  btns.forEach(function(btn,index) {
    btn.addEventListener("click",()=>{
      console.log(btn);
      // ボタン1
      if(index == 0){
        console.log("btn1 ok");
        const newParagraph = document.createElement('p');

        // <p>要素にテキストを設定
        newParagraph.textContent = 'すごい';
        // <p>にクラス付与
        newParagraph.classList.add('animete-text');
        newParagraph.style.color=("#ff0000");
        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);

      }
      // ボタン2
      else if(index == 1){
        console.log("btn2 ok");
        const newParagraph = document.createElement('p');

        // <p>要素にテキストを設定
        newParagraph.textContent = 'かっこいい';
        // <p>にクラス付与
        newParagraph.classList.add('animete-text');
        newParagraph.style.color=("#0000ff");
        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);
      }
      // ボタン3
      else if(index == 2){
        console.log("btn3 ok");
        const newParagraph = document.createElement('p');

        // <p>要素にテキストを設定
        newParagraph.textContent = '可愛い';
        // <p>にクラス付与
        newParagraph.classList.add('animete-text');
        newParagraph.style.color=("#00ff00");
        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);
      }
    })
  });

}
