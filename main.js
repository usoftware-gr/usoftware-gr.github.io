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

function