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
}


