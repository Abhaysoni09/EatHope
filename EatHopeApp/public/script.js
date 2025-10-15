
function menu(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function Close(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
function sign(){
    let signup = document.querySelector(".signup");
    signup.style.display = "block";
}
function show(){
    let signup = document.querySelector(".signup");
    let login = document.querySelector(".login");
    login.style.display = "block";
    signup.style.display = "none";
}
function signup(){
    let signup = document.querySelector(".signup");
    let login = document.querySelector(".login");
    login.style.display = "none";
    signup.style.display = "block";
}
function Closing(){
    let signup = document.querySelector(".signup");
    let login = document.querySelector(".login");
    login.style.display = "none";
    signup.style.display = "none";
}
// for scrolling
    const scrollContainer = document.getElementById('scrollContainer');
const btnLeft = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');
const scrollAmount = 240;

btnLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
btnRight.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
function updateButtons() {
  btnLeft.disabled = scrollContainer.scrollLeft <= 0;
  btnRight.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;
}
scrollContainer.addEventListener('scroll', updateButtons);
window.addEventListener('resize', updateButtons);
updateButtons();
//for Auto scroll
let autoScroll = setInterval(() => {
  if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}, 3000);

//for pause
scrollContainer.addEventListener('mouseenter', () => clearInterval(autoScroll));
scrollContainer.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, 3000);
});


