import {section} from "../variables.js"
const nextImage = () => {
    let nextBtn = document.querySelectorAll(".next-image")
    const slides = document.querySelectorAll(".gallery-zoom__div")

   nextBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{      
            const ids = `${slides[index].getAttribute('id')}`
            const slide = document.getElementById(ids)
            let nextImg = slide.nextElementSibling
        section.classList.add("section-next")
        if(nextImg === null){
            nextImg = slides[0]      
        }
            nextImg.classList.add("isVisible")
            nextImg.classList.remove("noVisible")
            nextImg.classList.add("orginTop")
            nextImg.classList.remove("orginBottom")
            slide.classList.add("noVisible")
            slide.classList.remove("isVisible")
            slide.classList.add("orginBottom")
            slide.classList.remove("orginTop")
       })
   })

}

export default nextImage