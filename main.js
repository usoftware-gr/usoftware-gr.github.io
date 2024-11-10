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

  body.style.background = "#333";
  header_content.style.background = "#333";
  document.body.style.color = "#fff";
  sun.style.display = "block";
  moon.style.display = "none";
  logo_img.src = "img/white_logo.svg";
  localStorage.setItem("color_mode", "dark");
  menu_svg.innerHTML = '<img style="vertical-align: 38%;margin-left: 20px; height:28px;" src="img/menu_white.svg">';
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
  logo_img.src = "img/logo.svg";
  localStorage.setItem("color_mode", "light");
  menu_svg.innerHTML = '<img style="vertical-align: 38%;margin-left: 20px; height:28px;" src="img/menu.svg">';
  document.getElementById("menu").style.background = "#fff";
  const allLinks = document.querySelectorAll('a');

// 各 a タグのスタイルを変更
allLinks.forEach(link => {
  link.style.color = '#000';
});
}

link_content_menu = document.getElementById("link_content_menu");
link_content_menu.innerHTML = '<ul style="list-style: none;/*! text-align: center; *//*! display: inline-block; */vertical-align: -20%;"><a href="/index.html"><li style="/*! float: left; */padding-right: 20px;">ホーム</li></a><a href="/about.html"><li style="/*! float: left; */padding-right: 20px;">U Softwareについて</li></a><a href="/products.html"><li style="/*! float: left; */padding-right: 20px;">製品</li></a><a href="https://ku-daa.web.app/"><li style="/*! float: left; */padding-right: 20px;">ソフトウェアラインナップ</li></a><a href="/blog/"><li style="/*! float: left; */padding-right: 20px;">ブログ</li></a><a href="http://umaidango.y.ribbon.to/bbs/"><li style="/*! float: left; */padding-right: 20px;">掲示板</li></a><a href="/character.html"><li style="padding-right: 20px;">キャラクター</li></a><a href="/kabegami/"><li style="/*! float: left; */padding-right: 20px;">壁紙</li></a><a href="/dic/"><li style="/*! float: left; */padding-right: 20px;">だんご大百科</li></a><a href="/hamster/"><li style="/*! float: left; */padding-right: 20px;">ハムスター日記</li></a><a href="/me/"><li style="/*! float: left; */padding-right: 20px;">うまいだんごのブログ</li></a><a href="/web-styles/"><li style="/*! float: left; */padding-right: 20px;">Web Styles</li></a><a href="/chipi-audio/"><li style="/*! float: left; */padding-right: 20px;">Chipi Audio</li></a><a href="https://share-tool.vercel.app/"><li style="/*! float: left; */padding-right: 20px;">共有ツール</li></a></ul>';


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
