import { images, gallery } from "../variables.js"

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
export default miniatureImage