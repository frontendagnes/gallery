import { images, gallery, galleryZoom } from "./variables.js"

const zoomImage = () => {
    images.forEach(image => {
        const imgZoom = new Image()
            imgZoom.src = image.img
            imgZoom.classList.add("gallery-zoom__image")
            imgZoom.id = `img-${image.id}`

        const divZoom = document.createElement("div")
            divZoom.classList.add("gallery-zoom__div")

        divZoom.appendChild(imgZoom)
        galleryZoom.appendChild(divZoom)
})
}
const miniatureImage = () => {
    images.forEach(image => {
        const href = document.createElement('a')
        href.href = `#img-${image.id}`

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