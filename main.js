link_content.innerHTML = '<li id="no_1">Products</li><li id="no_2">information</li><li></li>';
link_content_menu.innerHTML = '<ul style="list-style: none;/*! text-align: center; *//*! display: inline-block; */vertical-align: -20%;"><a href="/index.html" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">ホーム</li></a><a href="https://ku-daa.web.app/" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">ソフトウェアラインナップ</li></a><a style="color: rgb(0, 0, 0);" href="https://uzuber.f5.si"><li style="/*! float: left; */padding-right: 20px;">ブログ</li></a><a href="http://umaidango.y.ribbon.to/bbs/" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">掲示板</li></a><a href="https://share-tool.vercel.app/" style="color: rgb(0, 0, 0);"><li style="/*! float: left; */padding-right: 20px;">共有ツール</li></a></ul>';


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
  logo_img.innerHTML = '<svg version="1.1" viewBox="0 0 250 250.00001" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" sodipodi:docname="u_logo_svg.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" width="250" height="250" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" style="margin-left: 10px;height: 42px;width: 42px;"><defs id="defs18"></defs><sodipodi:namedview id="namedview18" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="0.50000001" inkscape:cx="95.999997" inkscape:cy="298.99999" inkscape:window-width="1920" inkscape:window-height="1129" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg18"></sodipodi:namedview><clipPath id="p.0"><path d="M 0,0 H 255.29396 V 250.58792 H 0 Z" clip-rule="nonzero" id="path1"></path></clipPath><path style="fill: #ffffff;fill-opacity:1;stroke-width:0.5" d="m 29.825172,225.375 c 0.257864,-1.03125 9.533851,-42.20616 20.613305,-91.49981 11.079455,-49.293635 20.238301,-89.708141 20.352993,-89.810006 0.306169,-0.271927 51.49517,-6.946687 51.69179,-6.74032 0.0918,0.09633 -6.5622,30.437636 -14.7866,67.425136 -8.2244,36.9875 -14.837525,67.55459 -14.69584,67.92687 0.141685,0.37229 0.588255,0.55 0.99238,0.39492 0.40412,-0.15507 11.14597,-1.1063 23.87078,-2.11384 12.72481,-1.00754 23.19583,-1.88256 23.26892,-1.94449 0.0731,-0.0619 7.0308,-31.82267 15.46155,-70.5794 l 15.32865,-70.466794 26.7352,-5.620213 c 14.70436,-3.091117 26.82424,-5.531179 26.93306,-5.422359 0.1684,0.168398 -46.32785,199.271566 -46.64541,199.741906 -0.0824,0.12206 -147.274425,10.5543 -149.267785,10.57935 -0.177009,0.002 -0.110856,-0.8397 0.147007,-1.87095 z" id="path43"></path></svg>';
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
  logo_img.innerHTML = '<svg version="1.1" viewBox="0 0 250 250.00001" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" sodipodi:docname="u_logo_svg.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" width="250" height="250" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" style="margin-left: 10px;height: 42px;width: 42px;"><defs id="defs18"></defs><sodipodi:namedview id="namedview18" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="0.50000001" inkscape:cx="95.999997" inkscape:cy="298.99999" inkscape:window-width="1920" inkscape:window-height="1129" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg18"></sodipodi:namedview><clipPath id="p.0"><path d="M 0,0 H 255.29396 V 250.58792 H 0 Z" clip-rule="nonzero" id="path1"></path></clipPath><path style="fill:#0795ff;fill-opacity:1;stroke-width:0.5" d="m 29.825172,225.375 c 0.257864,-1.03125 9.533851,-42.20616 20.613305,-91.49981 11.079455,-49.293635 20.238301,-89.708141 20.352993,-89.810006 0.306169,-0.271927 51.49517,-6.946687 51.69179,-6.74032 0.0918,0.09633 -6.5622,30.437636 -14.7866,67.425136 -8.2244,36.9875 -14.837525,67.55459 -14.69584,67.92687 0.141685,0.37229 0.588255,0.55 0.99238,0.39492 0.40412,-0.15507 11.14597,-1.1063 23.87078,-2.11384 12.72481,-1.00754 23.19583,-1.88256 23.26892,-1.94449 0.0731,-0.0619 7.0308,-31.82267 15.46155,-70.5794 l 15.32865,-70.466794 26.7352,-5.620213 c 14.70436,-3.091117 26.82424,-5.531179 26.93306,-5.422359 0.1684,0.168398 -46.32785,199.271566 -46.64541,199.741906 -0.0824,0.12206 -147.274425,10.5543 -149.267785,10.57935 -0.177009,0.002 -0.110856,-0.8397 0.147007,-1.87095 z" id="path43"></path></svg>';

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



