
const header = document.querySelector('#header_content');
const header_sc = document.querySelector('#header_sc');


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.display = 'none';
    header_sc.style.display = 'block';
  } else {
    header.style.display = 'block';
    header_sc.style.display = 'none';
  }
});

function dark_mode(){
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
  document.getElementById("menu").style.background = "#242424";
  
  const allLinks = document.querySelectorAll('a');

// 各 a タグのスタイルを変更
allLinks.forEach(link => {
  link.style.color = 'white';
});
  
}

function light_mode(){
  const body = document.getElementsByTagName("html")[0];
  const li = document.getElementsByTagName("li")[0];
  const sun = document.getElementById("sun"); // IDで取得する
  const moon = document.getElementById("moon"); // IDで取得する
  body.style.background = "#fff";
  header_content.style.background = "#fff";
  sun.style.display = "none";
  moon.style.display = "block";
  document.body.style.color = "#000";
  document.getElementById("menu_svg").innerHTML = '<svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="25px" style="vertical-align: 38%;margin-left: 20px; height:28px;"> <g id="SVGRepo_bgCarrier" stroke-width="0"/> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> <g id="SVGRepo_iconCarrier"> <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill="#0F0F0F"/> <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill="#0F0F0F"/> <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z" fill="#0F0F0F"/> </g></svg>';
  localStorage.setItem("color_mode", "light");
  const allLinks = document.querySelectorAll('a');
  document.getElementById("menu").style.background = "#fff";
logo_img.innerHTML = '<img src="img/logo.svg">';
  // 各 a タグのスタイルを変更
allLinks.forEach(link => {
  link.style.color = '#000';
});
}



function open_menu() {

  if(menu.style.display == "none"){
    menu.style.display = "block";
    menu.style.animation = "0.3s updown-anime";

  }
  else if(menu.style.display == "block"){
    menu.style.animation = "0.3s downup-anime";

    setTimeout(() => {
      menu.style.display = "none";
    }, 180);

  }
  
}


function close_menu()
{
  menu.style.animation = "0.3s downup-anime";

  setTimeout(() => {
    menu.style.display = "none";
  }, 280);
  
  
}


// JavaScript
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



link_content.innerHTML = '<li id="no_1">Products</li><li id="no_2">information</li><li></li>';
link_content_menu.innerHTML = '<ul style="list-style: none;/*! text-align: center; *//*! display: inline-block; */vertical-align: -20%;"><a href="/index.html" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">ホーム</li></a><a href="https://ku-daa.web.app/" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">ソフトウェアラインナップ</li></a><a style="color: rgb(0, 0, 0);" href="https://uzuber.f5.si"><li style="/*! float: left; */padding-right: 20px;">ブログ</li></a><a href="http://umaidango.y.ribbon.to/bbs/" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">掲示板</li></a><a href="https://share-tool.vercel.app/" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">共有ツール</li></a></ul>';

