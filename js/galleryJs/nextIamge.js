const nextImage = () => {
    let nextBtn = document.querySelectorAll(".next-image")
    const slides = document.querySelectorAll(".gallery-zoom__div")

   nextBtn.forEach((button, index) => {
       button.addEventListener("click", () =>{      
            const ids = `${slides[index].getAttribute('id')}`
            const slide = document.getElementById(ids)
            let nextImg = slide.nextElementSibling
            
        if(nextImg === null){
            nextImg = slides[0]      
        }
            nextImg.classList.add("isVisible")
            nextImg.classList.remove("noVisible")
            slide.classList.add("noVisible")
            slide.classList.remove("isVisible")
       })
   })

}

export default nextImage