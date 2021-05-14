const prevImage = () => {
    let prevBtn = document.querySelectorAll(".prev-image")
    const slides = document.querySelectorAll(".gallery-zoom__div")
   
    prevBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{      
            const idslide= `${slides[index].getAttribute('id')}`
            const activeSlide = document.getElementById(idslide)
            let prevImg = activeSlide.previousElementSibling

        if(prevImg === null){
            console.log("pusto prev")
            prevImg = slides[slides.length-1]      
        }         

            prevImg.classList.add("isVisible")
            prevImg.classList.remove("noVisible")
            activeSlide.classList.add("noVisible")
            activeSlide.classList.remove("isVisible")
            // prevImg.style.transformOrigin = "bottom"
            // activeSlide.style.transformOrigin = "bottom"
       })
   })
}

export default prevImage