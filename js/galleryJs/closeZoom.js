import { gallery } from '../variables.js'
const closeZoom = () => {
    const exitZoom = document.querySelectorAll(".gallery-zoom--close")
    const galleryDiv = document.querySelectorAll(".gallery__div")
    const galleryImage = document.querySelectorAll(".gallery__image")
       exitZoom.forEach((exit, i) => {
        exit.addEventListener("click", () => {
            const slides = document.querySelectorAll(".gallery-zoom__div")
                        slides[i].classList.remove("isVisible")
            slides[i].classList.add("noVisible")
            slides[i].classList.remove("orginTop")
            slides[i].classList.add("orginBottom")
            gallery.classList.add("gallery")
            gallery.classList.remove("gallery-zoom__miniature-wrapper")

            galleryDiv.forEach(item => {
                item.classList.remove("gallery--checked")
            })

            galleryImage.forEach((item, index) => {
                let ids = index + 1
                if(!item.id){
                     item.id = `img-${ids}`
                }
            })
        })

    })



}

export default closeZoom