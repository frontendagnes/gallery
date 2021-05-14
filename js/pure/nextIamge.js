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
            // nextImg.style.transformOrigin = "top"
            // slide.style.transformOrigin = "top"
       })
   })

}

export default nextImage