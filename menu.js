window.addEventListener("scroll", function() {
    let mainnav = document.querySelector("#main-nav")
    mainnav.classList.toggle('rolagem', window.scrollY > 0)
})