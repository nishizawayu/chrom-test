console.log(document);
window.onload = () => {
  document.querySelector(".App").style = "background:red";
  // ボタンの宣言
  const btns = document.querySelectorAll(".chome-btn");

  // フェードインのアニメーション関数
  function fadeIn(element) {
    
    //テキストを動かす処理
    setInterval(function() {
      element.style.transition = 'transform 1s ease-in-out';
      element.style.transform = 'translateY(-150%)';
    }, 10);    
  }

  //テキストを消す処理
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
        newParagraph.style.fontSize=("32px");
        newParagraph.style.fontWeight=("700");
        newParagraph.style.opacity=("0.7");
        newParagraph.style.position=("absolute");
        newParagraph.style.right=("10%");
        newParagraph.style.bottom=("0");

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
        newParagraph.style.fontSize=("32px");
        newParagraph.style.fontWeight=("700");
        newParagraph.style.opacity=("0.7");
        newParagraph.style.position=("absolute");
        newParagraph.style.right=("10%");
        newParagraph.style.bottom=("0");

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
        newParagraph.style.color=("black");
        newParagraph.style.fontSize=("32px");
        newParagraph.style.fontWeight=("700");
        newParagraph.style.opacity=("0.7");
        newParagraph.style.position=("absolute");
        newParagraph.style.right=("10%");
        newParagraph.style.bottom=("0");
        
        // <body>要素に新しい<p>要素を追加
        document.body.appendChild(newParagraph);

        fadeIn(newParagraph);

        //pタグを削除する
        const chrometextdata = document.querySelector(".animete-text3");
        removetext(chrometextdata);
      }
    })
  });

}
