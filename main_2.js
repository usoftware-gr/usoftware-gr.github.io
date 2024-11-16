

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
logo_img.innerHTML = '<svg version="1.1" viewBox="0 0 250 250.00001" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" sodipodi:docname="u_logo_svg.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" width="250" height="250" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" style="margin-left: 10px;height: 42px;width: 42px;"><defs id="defs18"></defs><sodipodi:namedview id="namedview18" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="0.50000001" inkscape:cx="95.999997" inkscape:cy="298.99999" inkscape:window-width="1920" inkscape:window-height="1129" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg18"></sodipodi:namedview><clipPath id="p.0"><path d="M 0,0 H 255.29396 V 250.58792 H 0 Z" clip-rule="nonzero" id="path1"></path></clipPath><path style="fill: #ffffff;fill-opacity:1;stroke-width:0.5" d="m 29.825172,225.375 c 0.257864,-1.03125 9.533851,-42.20616 20.613305,-91.49981 11.079455,-49.293635 20.238301,-89.708141 20.352993,-89.810006 0.306169,-0.271927 51.49517,-6.946687 51.69179,-6.74032 0.0918,0.09633 -6.5622,30.437636 -14.7866,67.425136 -8.2244,36.9875 -14.837525,67.55459 -14.69584,67.92687 0.141685,0.37229 0.588255,0.55 0.99238,0.39492 0.40412,-0.15507 11.14597,-1.1063 23.87078,-2.11384 12.72481,-1.00754 23.19583,-1.88256 23.26892,-1.94449 0.0731,-0.0619 7.0308,-31.82267 15.46155,-70.5794 l 15.32865,-70.466794 26.7352,-5.620213 c 14.70436,-3.091117 26.82424,-5.531179 26.93306,-5.422359 0.1684,0.168398 -46.32785,199.271566 -46.64541,199.741906 -0.0824,0.12206 -147.274425,10.5543 -149.267785,10.57935 -0.177009,0.002 -0.110856,-0.8397 0.147007,-1.87095 z" id="path43"></path></svg>';
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
logo_img.innerHTML = '<svg version="1.1" viewBox="0 0 250 250.00001" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" sodipodi:docname="u_logo_svg.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" width="250" height="250" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" style="margin-left: 10px;height: 42px;width: 42px;"><defs id="defs18"></defs><sodipodi:namedview id="namedview18" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="0.50000001" inkscape:cx="95.999997" inkscape:cy="298.99999" inkscape:window-width="1920" inkscape:window-height="1129" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg18"></sodipodi:namedview><clipPath id="p.0"><path d="M 0,0 H 255.29396 V 250.58792 H 0 Z" clip-rule="nonzero" id="path1"></path></clipPath><path style="fill:#0795ff;fill-opacity:1;stroke-width:0.5" d="m 29.825172,225.375 c 0.257864,-1.03125 9.533851,-42.20616 20.613305,-91.49981 11.079455,-49.293635 20.238301,-89.708141 20.352993,-89.810006 0.306169,-0.271927 51.49517,-6.946687 51.69179,-6.74032 0.0918,0.09633 -6.5622,30.437636 -14.7866,67.425136 -8.2244,36.9875 -14.837525,67.55459 -14.69584,67.92687 0.141685,0.37229 0.588255,0.55 0.99238,0.39492 0.40412,-0.15507 11.14597,-1.1063 23.87078,-2.11384 12.72481,-1.00754 23.19583,-1.88256 23.26892,-1.94449 0.0731,-0.0619 7.0308,-31.82267 15.46155,-70.5794 l 15.32865,-70.466794 26.7352,-5.620213 c 14.70436,-3.091117 26.82424,-5.531179 26.93306,-5.422359 0.1684,0.168398 -46.32785,199.271566 -46.64541,199.741906 -0.0824,0.12206 -147.274425,10.5543 -149.267785,10.57935 -0.177009,0.002 -0.110856,-0.8397 0.147007,-1.87095 z" id="path43"></path></svg>';
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
logo_img.innerHTML = '<svg version="1.1" viewBox="0 0 250 250.00001" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" sodipodi:docname="u_logo_svg.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" width="250" height="250" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" style="margin-left: 10px;height: 42px;width: 42px;"><defs id="defs18"></defs><sodipodi:namedview id="namedview18" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="0.50000001" inkscape:cx="95.999997" inkscape:cy="298.99999" inkscape:window-width="1920" inkscape:window-height="1129" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg18"></sodipodi:namedview><clipPath id="p.0"><path d="M 0,0 H 255.29396 V 250.58792 H 0 Z" clip-rule="nonzero" id="path1"></path></clipPath><path style="fill:#0795ff;fill-opacity:1;stroke-width:0.5" d="m 29.825172,225.375 c 0.257864,-1.03125 9.533851,-42.20616 20.613305,-91.49981 11.079455,-49.293635 20.238301,-89.708141 20.352993,-89.810006 0.306169,-0.271927 51.49517,-6.946687 51.69179,-6.74032 0.0918,0.09633 -6.5622,30.437636 -14.7866,67.425136 -8.2244,36.9875 -14.837525,67.55459 -14.69584,67.92687 0.141685,0.37229 0.588255,0.55 0.99238,0.39492 0.40412,-0.15507 11.14597,-1.1063 23.87078,-2.11384 12.72481,-1.00754 23.19583,-1.88256 23.26892,-1.94449 0.0731,-0.0619 7.0308,-31.82267 15.46155,-70.5794 l 15.32865,-70.466794 26.7352,-5.620213 c 14.70436,-3.091117 26.82424,-5.531179 26.93306,-5.422359 0.1684,0.168398 -46.32785,199.271566 -46.64541,199.741906 -0.0824,0.12206 -147.274425,10.5543 -149.267785,10.57935 -0.177009,0.002 -0.110856,-0.8397 0.147007,-1.87095 z" id="path43"></path></svg>';
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

