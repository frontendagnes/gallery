
import zoomImage from './zoomImage.js'
import miniatureImage from './miniatureImage.js'
import nextImage from './nextIamge.js'
import prevImage from './prevImage.js'
import closeZoom from './closeZoom.js'
import vsibilityImage from './visibilityImage.js'

const galleryPure = () => {
    miniatureImage()
    zoomImage()
    prevImage()
    nextImage()
    closeZoom()
    vsibilityImage()
}
export default galleryPure