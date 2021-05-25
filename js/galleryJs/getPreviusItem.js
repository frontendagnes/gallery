import { previouslyClickedElement, previouslyClickedMiniatures } from '../variables.js'

const getPreviusItem = () => {
    const galleryHref = document.querySelectorAll('.gallery__href')
    
    galleryHref.forEach( (href, index) => {
        href.addEventListener("click", (e) => { 
            const galleryDivZoom = document.querySelectorAll('.gallery-zoom__div')
            const galleryDiv = document.querySelectorAll(".gallery__div")
            
            if(galleryDiv[index].classList.contains("gallery--checked")) return
            
            galleryDiv[index].classList.add("gallery--checked")

            previouslyClickedElement.push(galleryDivZoom[index])
            previouslyClickedMiniatures.push(galleryDiv[index])
            
            const previouslyClickedItem = previouslyClickedElement[previouslyClickedElement.length-2]
            const previouslyClickedMiniature = previouslyClickedMiniatures[previouslyClickedMiniatures.length-2]
            const lastClickedMiniature =previouslyClickedMiniatures[previouslyClickedMiniatures.length-1]

                if(previouslyClickedElement.length > 2){
                    previouslyClickedItem.classList.remove("isVisible")
                    previouslyClickedItem.classList.add("noVisible")                   
                }
            
                if(previouslyClickedElement.length > 2){
                    previouslyClickedElement.splice(0, previouslyClickedElement.length-2)
                }
                 
                if(previouslyClickedMiniatures.length > 2){
                    lastClickedMiniature.classList.add("gallery--checked")
                    previouslyClickedMiniature.classList.remove("gallery--checked")
                }

                if(previouslyClickedMiniatures.length > 2){
                    previouslyClickedMiniatures.splice(0, previouslyClickedMiniatures.length-2)
                }
        })

    })
    
}

export default getPreviusItem