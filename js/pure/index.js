
import zoomImage from './zoomImage.js'
import miniatureImage from './miniatureImage.js'

const nextImage = () => {
    let nextBtn = document.querySelectorAll(".next-image")
    const slides = document.querySelectorAll(".gallery-zoom__div")

   nextBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{      
            const ids = `${slides[index].getAttribute('id')}`
            const slide = document.getElementById(ids)
            let nextImg = slide.nextElementSibling
            
        if(nextImg === null){
            console.log("pusto next")
            nextImg = slides[0]      
        }
            nextImg.classList.add("isVisible")
            nextImg.classList.remove("noVisible")
            slide.classList.add("noVisible")
            slide.classList.remove("isVisible")
       })
   })

}
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
       })
   })

}

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
 const vsibilityImage = () => {
    const slides = document.querySelectorAll(".gallery-zoom__div")
    const links = document.querySelectorAll(".gallery__href")

    links.forEach( (link, index) => {
        link.addEventListener("click", () =>{
            slides[index].classList.remove("noVisible")
            slides[index].classList.add("isVisible")
        })
    })
 }

const galleryPure = () => {
    miniatureImage()
    zoomImage()
    prevImage()
    nextImage()
    closeZoom()
    vsibilityImage()
}
export default galleryPure