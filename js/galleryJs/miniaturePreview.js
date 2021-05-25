import { gallery } from '../variables.js'

const miniaturaPreview = () => {
const galleryHref = document.querySelectorAll(".gallery__href")
const galleryDiv = document.querySelectorAll(".gallery-zoom__div")
    

galleryHref.forEach((item, i) => {
    item.addEventListener("click", () => {

        if(galleryDiv[i].classList.contains("isVisible")){
            gallery.classList.remove("gallery")
            gallery.classList.add("gallery-zoom__miniature-wrapper")
        }else{
            gallery.classList.remove("gallery-zoom__miniature-wrapper")
            gallery.classList.add("gallery")
        }
    })
    

})
}


export default miniaturaPreview