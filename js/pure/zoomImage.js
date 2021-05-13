import { images, galleryZoom } from '../variables.js'

const zoomImage = () => {
    images.forEach((image, index) => {
        const imgZoom = new Image()
            imgZoom.src = image.img
            imgZoom.classList.add("gallery-zoom__image")

        const divZoom = document.createElement("div")
            divZoom.classList.add("gallery-zoom__div")
            divZoom.id =`img-${image.id}`

        const divImg = document.createElement("div")
            divImg.classList.add("gallery-zoom__image-div")

        const close = document.createElement("a")
            close.classList.add("gallery-zoom--close")
            close.href ="#0" 
            close.innerHTML = `<i class="far fa-times-circle"></i>`
        
        const counter = document.createElement("div")
            counter.innerText = `Zdjęcie ${index + 1} z ${images.length}`
            counter.classList.add("gallery-zoom--counter")

        divImg.appendChild(close)
        divImg.appendChild(imgZoom)
        divImg.appendChild(counter)
        divZoom.appendChild(divImg)
        galleryZoom.appendChild(divZoom)
})
}
export default zoomImage