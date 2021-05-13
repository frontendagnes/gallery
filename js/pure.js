import { images, gallery, galleryZoom } from "./variables.js"

const zoomImage = () => {
    images.forEach((image, index) => {
        const imgZoom = new Image()
            imgZoom.src = image.img
            imgZoom.classList.add("gallery-zoom__image")

        const divZoom = document.createElement("div")
            divZoom.classList.add("gallery-zoom__div")
            divZoom.id =`img-${image.id}`

        const divImg = document.createElement("span")
            divImg.classList.add("gallery-zoom__image-div")

        const close = document.createElement("a")
            close.classList.add("gallery-zoom--close")
            close.href = "#"
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
const miniatureImage = () => {
    images.forEach(image => {
        const href = document.createElement('a')
        href.href = `#img-${image.id}`
        href.classList.add("gallery__href")

        const img = new Image()
            img.src = image.img
            img.alt = image.img
            img.title = image.img
            img.classList.add("gallery__image")

        const divEl = document.createElement("div")
            divEl.classList.add("gallery__div")
        
            href.appendChild(img)
            divEl.appendChild(href)
            gallery.appendChild(divEl)
    })
}
const galleryPure = () => {
    miniatureImage()
    zoomImage()
}
export default galleryPure