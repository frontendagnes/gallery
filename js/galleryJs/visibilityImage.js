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

 export default vsibilityImage