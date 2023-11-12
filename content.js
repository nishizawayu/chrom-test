console.log(document);
window.onload = () => {
  document.querySelector(".App").style = "background:red";
  // ボタンの宣言
  const btns = document.querySelectorAll(".chome-btn");

  // フェードインのアニメーション関数
  function fadeIn(element) {
    let opacity = 0;
    let position = -100;

    // 100ミリ秒ごとにopacityを増加させる
    const intervalId = setInterval(function() {
      opacity += 0.1;
      element.style.opacity = opacity;

      // opacityが1以上になったらアニメーションを停止
      if (opacity >= 1) {
        clearInterval(intervalId);
      }
    }, 100);
  }

  function removetext(element) {
    setTimeout(function() {
      element.remove();
    }, 1000); //
  }  

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
        newParagraph.classList.add('animete-text1');

        //cssの指定
        newParagraph.style.color=("#ff0000");
        newParagraph.style.position=("absolute");
        newParagraph.style.right=("10%");
        newParagraph.style.bottom=("10%");

        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);

        // アニメーションを追加
        fadeIn(newParagraph);

        //pタグを削除する
        const chrometextdata = document.querySelector(".animete-text1");
        removetext(chrometextdata);
      }
      // ボタン2
      else if(index == 1){
        console.log("btn2 ok");
        const newParagraph = document.createElement('p');

        // <p>要素にテキストを設定
        newParagraph.textContent = 'かっこいい';
        // <p>にクラス付与
        newParagraph.classList.add('animete-text2');

         //cssの指定
        newParagraph.style.color=("#0000ff");
        newParagraph.style.position=("absolute");
        newParagraph.style.right=("10%");
        newParagraph.style.bottom=("10%");

        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);

        // アニメーションを追加
        fadeIn(newParagraph);

        //pタグを削除する
        const chrometextdata = document.querySelector(".animete-text2");
        removetext(chrometextdata);
      }

      // ボタン3
      else if(index == 2){
        console.log("btn3 ok");
        const newParagraph = document.createElement('p');

        // <p>要素にテキストを設定
        newParagraph.textContent = '可愛い';
        // <p>にクラス付与
        newParagraph.classList.add('animete-text3');
        
         //cssの指定
        newParagraph.style.color=("#00ff00");
        newParagraph.style.position=("absolute");
        newParagraph.style.right=("10%");
        newParagraph.style.bottom=("10%");
        
        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);

        //pタグを削除する
        const chrometextdata = document.querySelector(".animete-text3");
        removetext(chrometextdata);
      }
    })
  });

}
