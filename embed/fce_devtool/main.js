
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style = "z-index: 4; background:#fff; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;   width: 130px;   border-radius: 15px;   margin: 10px;";
        header.style.animation = "0.3s updown-anime";
        up_btn.style.display = 'block';
        logo.innerHTML = '<img src="favicon.png">';
    } else {

        header.style.animation = "0.15s downup-anime";
        setTimeout(() => {
            header.style = "";
            logo.innerHTML = '<img src="logo.png">';
            up_btn.style.display = 'none';
        }, 140);
    }
  });

function menu_click()
{
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