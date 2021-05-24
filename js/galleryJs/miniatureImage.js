import { images, gallery } from "../variables.js"

const miniatureImage = () => {
    images.forEach(image => {
        const href = document.createElement('a')
        href.href = `#img-${image.id}`
        href.classList.add("gallery__href")
        
        const img =  new Image()
            img.src = image.img
            img.alt = image.img
            img.title = image.img
            img.classList.add("gallery__image")
            img.loading = "lazy"
            img.id = `img-${image.id}`
        
        const divEl = document.createElement("div")
            divEl.classList.add("gallery__div")
            divEl.id = `div-${image.id}`
            divEl.dataset.active = `div-${image.id}`
        
        // const checkMarkDiv = document.createElement("div")
        //     checkMarkDiv.classList.add("check-mark-div")
        //     checkMarkDiv.id = `mark-${image.id}`

            href.appendChild(img)
            divEl.appendChild(href)
            // divEl.appendChild(checkMarkDiv)
            gallery.appendChild(divEl)
    })
}
export default miniatureImage