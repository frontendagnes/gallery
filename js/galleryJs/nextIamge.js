import { previouslyClickedElement, previouslyClickedMiniatures } from '../variables.js'


const nextImage = () => {
    let nextBtn = document.querySelectorAll(".next-image")


   nextBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{  
        const slides = document.querySelectorAll(".gallery-zoom__div")
        const galleryDiv = document.querySelectorAll(".gallery__div")
        const galleryImage = document.querySelectorAll(".gallery__image")

        galleryImage.forEach(item => {
            item.removeAttribute('id')
        })

//#region Przewijanie miniatur (następna miniatura)
        const idDiv = `${galleryDiv[index].dataset.active}`
        const div = document.getElementById(idDiv)   
        let nextDiv = div.nextElementSibling

        if(nextDiv === null){
            nextDiv = galleryDiv[0]
        }
        previouslyClickedMiniatures.push(nextDiv)

        div.classList.remove("gallery--checked")
        nextDiv.classList.add("gallery--checked")

        if(previouslyClickedMiniatures.length > 2){
            previouslyClickedMiniatures.splice(0, previouslyClickedMiniatures.length-2)
        }
//#endregion
//#region Następny slajd
        const ids = `${slides[index].getAttribute('id')}`
        const slide = document.getElementById(ids)
        let nextImg = slide.nextElementSibling

        if(nextImg === null){
            nextImg = slides[0] 
        }
        previouslyClickedElement.push(nextImg)
            nextImg.classList.add("isVisible")
            nextImg.classList.remove("noVisible")
            nextImg.classList.add("orginTop")
            nextImg.classList.remove("orginBottom")
            slide.classList.add("noVisible")
            slide.classList.remove("isVisible")
            slide.classList.add("orginBottom")
            slide.classList.remove("orginTop")
//#endregion
            if(previouslyClickedElement.length > 2){
                previouslyClickedElement.splice(0, previouslyClickedElement.length-2)
            }
            // activeSlide()
       })
   })

}

export default nextImage