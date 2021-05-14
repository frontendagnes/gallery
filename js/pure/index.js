
import zoomImage from './zoomImage.js'
import miniatureImage from './miniatureImage.js'

const nextImage = () => {
    let nextBtn = document.querySelectorAll(".next-image")
    const slides = document.querySelectorAll(".gallery-zoom__div")
    const links = document.querySelectorAll("gallery__href")
   nextBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{      
            const ids = `${slides[index].getAttribute('id')}`
            const slide = document.getElementById(ids)
            const nextImg = slide.nextElementSibling

       links.forEach((link, i )=> {
           link.addEventListener("click", () => {
            slides[i].classList.add("isVisible")
            slides[i].classList.remove("noVisible")
           })
       })           

            nextImg.classList.add("isVisible")
            nextImg.classList.remove("noVisible")
            slide.classList.add("noVisible")
            slide.classList.remove("isVisible")
       })
   })

}
const closeZoom = () => {
    const exitZoom = document.querySelectorAll(".gallery-zoom--close")
    const slides = document.querySelectorAll(".gallery-zoom__div")
       exitZoom.forEach( (exit, i) => {
        exit.addEventListener("click", () => {
            slides[i].classList.remove("isVisible")
            slides[i].classList.add("noVisible")
            console.log("exit")
        })
    })
}

const galleryPure = () => {
    miniatureImage()
    zoomImage()
    nextImage()
    closeZoom()
}
export default galleryPure