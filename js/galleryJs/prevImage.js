import { previouslyClickedElement, previouslyClickedMiniatures } from '../variables.js'
const prevImage = () => {
    let prevBtn = document.querySelectorAll(".prev-image")
    

    prevBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{    
        const galleryDiv = document.querySelectorAll(".gallery__div")
        const slides = document.querySelectorAll(".gallery-zoom__div")
        const galleryImage = document.querySelectorAll(".gallery__image")
        galleryImage.forEach(item => {
            item.removeAttribute('id')
        })
 //#region Przewijanie miniatur (poprzednia miniatura)
        const idDiv = `${galleryDiv[index].dataset.active}`
        const div = document.getElementById(idDiv)   
        let prevDiv = div.previousElementSibling

        if(prevDiv === null){
            prevDiv = galleryDiv[galleryDiv.length-1]      
        }
        previouslyClickedMiniatures.push(prevDiv)

        div.classList.remove("gallery--checked")
        prevDiv.classList.add("gallery--checked")   

        if(previouslyClickedMiniatures.length > 2){
            previouslyClickedMiniatures.splice(0, previouslyClickedMiniatures.length-2)
        }
//#endregion    
//#region Poprzedni slajd     
        const idslide= `${slides[index].getAttribute('id')}`
        const activeSlide = document.getElementById(idslide)
        let prevImg = activeSlide.previousElementSibling

        if(prevImg === null){
            prevImg = slides[slides.length-1]      
        }      
        previouslyClickedElement.push(prevImg)   
            prevImg.classList.add("isVisible")
            prevImg.classList.remove("noVisible")
            prevImg.classList.add("orginBottom")
            prevImg.classList.remove("orginTop")
            activeSlide.classList.add("noVisible")
            activeSlide.classList.remove("isVisible")
            activeSlide.classList.add("orginTop")
            activeSlide.classList.remove("orginBottom")
//#endregion
            if(previouslyClickedElement.length > 2){
                previouslyClickedElement.splice(0, previouslyClickedElement.length-2)
            }
       })
   })
}

export default prevImage