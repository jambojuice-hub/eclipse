const topNavButton = document.querySelector('.burger__btn');
const topNav = document.querySelector(".topnav__list");
topNavButton.addEventListener("click", toggleClass);
function toggleClass(){
    topNav.classList.toggle("active");
}

