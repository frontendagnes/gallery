const closeZoom = () => {
    const exitZoom = document.querySelectorAll(".gallery-zoom--close")
    const slides = document.querySelectorAll(".gallery-zoom__div")
       exitZoom.forEach((exit, i) => {
        exit.addEventListener("click", () => {
            slides[i].classList.remove("isVisible")
            slides[i].classList.add("noVisible")
        })
    })
}

export default closeZoom