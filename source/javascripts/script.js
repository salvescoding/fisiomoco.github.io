function attachEvents() {
  window.addEventListener("scroll", runScroll);
  selected();
  fade();
}


// Titles Fade In effect
function fade() {
  const titles = document.querySelector(".fadein");
  let opi = 0.1;
  const time = window.setInterval(fadeInTit, 200);

    function fadeInTit() {

      if(opi >= 1) {
        clearInterval(time);
      }
      else {
        titles.style.opacity = opi;
        opi += 0.1;
      }
    }
}


// Specialities now apppear as selected when you are on the page
function selected() {
  const links = document.querySelectorAll('div.navbar-wagon-right > a');
  links.forEach(function(element){
    if(window.location.href.includes(element.pathname) === true) {
      //console.log(element);
      element.classList.add("selected");
    }
  });
}

// Navbar change background color once you scroll
function runScroll() {
  const nav = document.querySelector(".navbar-wagon");

   if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240)  {
     nav.classList.add("nav-scroll");
   } else {
     nav.classList.remove("nav-scroll");
   }

}


document.addEventListener("DOMContentLoaded", attachEvents);

