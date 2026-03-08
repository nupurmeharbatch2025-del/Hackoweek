const images = document.querySelectorAll(".gallery img")

const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")

const title = document.getElementById("photo-title")
const locationText = document.getElementById("photo-location")
const camera = document.getElementById("photo-camera")

const counter = document.getElementById("counter")

let imageArray = Array.from(images)
let currentIndex = 0

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index
showImage()
lightbox.style.display="flex"

})

})

function showImage(){

const img = imageArray[currentIndex]

lightboxImg.src = img.src

title.textContent = img.dataset.title
locationText.textContent = "Location: " + img.dataset.location
camera.textContent = "Camera: " + img.dataset.camera

counter.textContent = (currentIndex+1)+" / "+imageArray.length

}

function nextImage(){

currentIndex++

if(currentIndex >= imageArray.length){

currentIndex = 0

}

showImage()

}

function prevImage(){

currentIndex--

if(currentIndex < 0){

currentIndex = imageArray.length - 1

}

showImage()

}

function closeLightbox(){

lightbox.style.display="none"

}

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight") nextImage()
if(e.key==="ArrowLeft") prevImage()
if(e.key==="Escape") closeLightbox()

}

})

/* DOWNLOAD */

function downloadImage(){

const link = document.createElement("a")
link.href = lightboxImg.src
link.download = "photo.jpg"
link.click()

}

/* LIKE SYSTEM */

function likeImage(){

let likes = localStorage.getItem(lightboxImg.src)

if(!likes){

likes = 1

}else{

likes = Number(likes) + 1

}

localStorage.setItem(lightboxImg.src,likes)

alert("❤️ Photo liked! Total likes: "+likes)

}

/* FILTER */

function filterImages(category){

imageArray.forEach(img=>{

if(category==="all" || img.dataset.category===category){

img.style.display="block"

}else{

img.style.display="none"

}

})

}