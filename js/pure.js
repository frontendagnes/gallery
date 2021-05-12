import { images, gallery } from "./variables.js"

const galleryPure = () => {
        images.forEach(image => {
            const img = new Image()
            const divEl = document.createElement("div")
            img.src = image.img
            img.classList.add("gallery__image")
            divEl.appendChild(img)
            gallery.appendChild(divEl)
    })
}

export default galleryPure