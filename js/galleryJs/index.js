
import zoomImage from './zoomImage.js'
import miniatureImage from './miniatureImage.js'
import nextImage from './nextIamge.js'
import prevImage from './prevImage.js'
import closeZoom from './closeZoom.js'
import vsibilityImage from './visibilityImage.js'
import miniaturaPreview from './miniaturePreview.js'

const galleryPure = () => {
    miniatureImage()
    zoomImage()
    prevImage()
    nextImage()
    closeZoom()
    vsibilityImage()
    miniaturaPreview()
}
export default galleryPure