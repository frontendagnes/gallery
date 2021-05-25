import { images, galleryZoom } from '../variables.js'

const zoomImage = () => {
    
    images.forEach((image, index) => {

        let last = image.id + 1
        let first = image.id - 1

        if(last > images.length){
            last = images[0].id
        }

        if(first < images[0].id){
            first = images[images.length-1].id
        }
        const imgZoom = new Image()
            imgZoom.src = image.img
            imgZoom.alt = image.img
            imgZoom.title = image.img
            imgZoom.classList.add("gallery-zoom__image")

        const divZoom = document.createElement("div")
            divZoom.classList.add("gallery-zoom__div")
            divZoom.classList.add("noVisible")
            divZoom.id =`img-${image.id}`

        const nextHref = document.createElement("a")
            nextHref.href = `#div-${last}`
            nextHref.classList.add("control-image")
            nextHref.classList.add("control-next")

        const nextImage = document.createElement("button")
            nextImage.classList.add("next-image")
            nextImage.innerHTML = `<i class="far fa-hand-point-right"></i>`
            nextImage.title = "Next Iamge"
        
        nextHref.appendChild(nextImage)

        const prevHref = document.createElement("a")
            prevHref.href = `#div-${first}`
            prevHref.classList.add("control-image")
            prevHref.classList.add("control-prev")

        const prevImage = document.createElement("button")
            prevImage.classList.add("prev-image")
            prevImage.innerHTML = `<i class="far fa-hand-point-left"></i>`
            prevImage.title = "Previous Image"
            
        prevHref.appendChild(prevImage)

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
        divZoom.appendChild(nextHref)
        divZoom.appendChild(prevHref)
        galleryZoom.appendChild(divZoom)     
})
}
export default zoomImage