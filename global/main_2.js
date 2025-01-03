
// 要素を取得
const body = document.getElementsByTagName("html")[0];
const li = document.getElementsByTagName("li")[0];
const sun = document.getElementById("sun"); // IDで取得する
const moon = document.getElementById("moon"); // IDで取得する

// ローカルストレージからカラーモードを取得
const colorMode = localStorage.getItem("color_mode");

// カラーモードに応じてスタイルを変更
if (colorMode === "dark") {
const body = document.getElementsByTagName("html")[0];
const li = document.getElementsByTagName("li")[0];
const sun = document.getElementById("sun"); // IDで取得する
const moon = document.getElementById("moon"); // IDで取得する
logo_img.innerHTML = '<img src="img/white_logo.svg">';
body.style.background = "#333";
header_content.style.background = "#333";
document.body.style.color = "#fff";
sun.style.display = "block";
moon.style.display = "none";
localStorage.setItem("color_mode", "dark");
document.getElementById("menu_svg").innerHTML = '<svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="25px" style="vertical-align: 38%;margin-left: 20px; height:28px;"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill="#fff"></path> <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill="#fff"></path> <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z" fill="#fff"></path> </g></svg>';

const allLinks = document.querySelectorAll('a');

// 各 a タグのスタイルを変更
allLinks.forEach(link => {
link.style.color = 'white';
});

menu.style.background = "#242424";



} 
else if (colorMode === "light") {
const body = document.getElementsByTagName("html")[0];
const li = document.getElementsByTagName("li")[0];
const sun = document.getElementById("sun"); // IDで取得する
const moon = document.getElementById("moon"); // IDで取得する
body.style.background = "#fff";
header_content.style.background = "#fff";
sun.style.display = "none";
moon.style.display = "block";
document.body.style.color = "#000";
logo_img.innerHTML = '<img src="img/logo.svg">';
localStorage.setItem("color_mode", "light");
document.getElementById("menu_svg").innerHTML = '<svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="25px" style="vertical-align: 38%;margin-left: 20px; height:28px;"> <g id="SVGRepo_bgCarrier" stroke-width="0"/> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> <g id="SVGRepo_iconCarrier"> <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill="#0F0F0F"/> <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill="#0F0F0F"/> <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z" fill="#0F0F0F"/> </g></svg>';
const allLinks = document.querySelectorAll('a');
document.getElementById("menu").style.background = "#fff";

// 各 a タグのスタイルを変更
allLinks.forEach(link => {
link.style.color = '#000';
});

} 
else {
const body = document.getElementsByTagName("html")[0];
const li = document.getElementsByTagName("li")[0];
const sun = document.getElementById("sun"); // IDで取得する
const moon = document.getElementById("moon"); // IDで取得する
body.style.background = "#fff";
logo_img.innerHTML = '<img src="img/logo.svg">';
header_content.style.background = "#fff";
sun.style.display = "none";
moon.style.display = "block";
document.body.style.color = "#000";
localStorage.setItem("color_mode", "light");

document.getElementById("menu").style.background = "#fff";
const allLinks = document.querySelectorAll('a');

// 各 a タグのスタイルを変更
allLinks.forEach(link => {
link.style.color = '#000';
});
}

header_sc.style.color = "#000";

const myElement = document.getElementById('p_menu');
const myElement2 = document.getElementById('no_1');


  myElement2.addEventListener('mouseover', () => {
    // マウスが重なったときの処理
    myElement.style.display = "block";

    
  });
  


  myElement.addEventListener('mouseover', () => {
    // マウスが重なったときの処理
    myElement.style.display = "block";

    
  });



    myElement.addEventListener('mouseout', () => {
    // マウスが重なったときの処理
    myElement.style.display = "none";

    
  });

setTimeout(() => {
  myElement2.addEventListener('mouseout', () => {
    // マウスが重なったときの処理
    myElement.style.display = "none";

  });
}, 800)






// JavaScript
const myElement_0 = document.getElementById('info_menu');
const myElement_2 = document.getElementById('no_2');


  myElement_2.addEventListener('mouseover', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "block";

    
  });
  


  myElement_0.addEventListener('mouseover', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "block";

    
  });



    myElement_0.addEventListener('mouseout', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "none";

    
  });

setTimeout(() => {
  myElement_2.addEventListener('mouseout', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "none";

  });
}, 800)

