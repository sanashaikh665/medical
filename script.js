let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbarr');
let navItems = document.querySelectorAll('.navbarr a');  

menu.onclick = () => {
  menu.classList.toggle('bi-x');
  navbar.classList.toggle('open');
};


navItems.forEach(item => {
  item.onclick = () => {
    navbar.classList.remove('open'); 
    menu.classList.remove('bi-x'); 
  };
});
