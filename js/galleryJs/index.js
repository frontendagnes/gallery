
import zoomImage from './zoomImage.js' //wrapper zdjęć zoom +
import miniatureImage from './miniatureImage.js' //wrapper miniatur
import nextImage from './nextIamge.js'
import prevImage from './prevImage.js'
import closeZoom from './closeZoom.js'
import vsibilityImage from './visibilityImage.js'
import miniaturaPreview from './miniaturePreview.js'
import getPreviusItem from './getPreviusItem.js'


const galleryPure = () => {
    miniatureImage()
    zoomImage()
    prevImage()
    nextImage()
    closeZoom()
    vsibilityImage()
    miniaturaPreview()
    getPreviusItem()
}
export default galleryPure