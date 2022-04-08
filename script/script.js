$(function () {
  //jQueryを使う場合ここに。
  /*$(".slide").prepend($("img:last-child"));*/

});

window.addEventListener("load", () => {
  //ネイティブなJavaScriptで記述する場合は、こちら。
  // let lastimage = document.querySelectorAll("img");
  // let slidewapper = document.querySelector(".slide");
  // slidewapper.insertBefore(lastimage[lastimage.length - 1], lastimage[0]);
});

//JavaScript
//全体を囲むdivはグローバル変数に
let slidewapper = document.querySelector(".slide");

let counter = 0;
let lastcunter = 5;
//関数の定義
function prevBtnChange() {
  let lastimage = document.querySelectorAll("img");
  slidewapper.insertBefore(lastimage[lastimage.length - 1], lastimage[0]);
  if (counter === 0) {
    counter = lastcunter;
    changelide(counter);
  } else {
    counter--;
    changelide(counter);
  }
};

function prevstart() {
  let lastimage = document.querySelectorAll("img");
  slidewapper.insertBefore(lastimage[lastimage.length - 1], lastimage[0]);
}


//関数の実行（最初の表示画面）
prevstart();



//nextBtnChange関数の定義
//左側の余分な（-2つめ）画像を右側の最後に追加
function nextBtnChange() {
  let extraimage = document.querySelector("img");
  slidewapper.appendChild(extraimage);
  if (counter === lastcunter) {
    counter = 0;
    changenext(counter);
  } else {
    counter++;
    changenext(counter);
  };

}

let nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", function () {
  nextBtnChange(); //関数の実行
});

let prevBtn = document.querySelector(".prevBtn");
prevBtn.addEventListener("click", function () {
  prevBtnChange(); //関数の実行
});
// window.setInterval(nextBtnChange, 2000);



function changenext(suuzi) {
  console.log(suuzi);
  let pagenation = document.querySelectorAll(".pagination-circle");
  pagenation[suuzi].classList.add("target");
  if (suuzi === 0) {
    pagenation[5].classList.remove("target");
  } else {
    pagenation[suuzi - 1].classList.remove("target");
  }
}

function changelide(suuzi) {
  console.log(suuzi);
  let pagenation = document.querySelectorAll(".pagination-circle");
  pagenation[suuzi].classList.add("target");
  if (suuzi === 5) {
    pagenation[0].classList.remove("target");
  } else {
    pagenation[suuzi + 1].classList.remove("target");
  }
}