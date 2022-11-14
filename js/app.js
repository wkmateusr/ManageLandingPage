const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    slidesPerView: window.innerWidth >= 820 ? 3 : window.innerWidth >= 650 ? 2 : 1 ,
    spaceBetween: 20,
    loop: false,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const nav = document.querySelector(".navlist")
  const menuBtn = document.querySelector(".hamburger i")
  const header = document.querySelector(".header")

  menuBtn.addEventListener("click", () =>{
 
    menuBtn.className === "fa-solid fa-close" ? ( 
      nav.classList.remove("active"),
      menuBtn.setAttribute("class", "fa-solid fa-bars")
      ) : (
        nav.classList.add("active"),
        menuBtn.setAttribute("class", "fa-solid fa-close")
       )
  })

window.onscroll = ()=>{
  if(window.scrollY >= 50){
    header.style.backgroundColor = "white"
  }else{
    header.style.backgroundColor = "transparent"
  }
}