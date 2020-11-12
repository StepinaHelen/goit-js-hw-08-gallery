import galleryItems from "./gallery-items.js";
import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery")
const modalRef = document.querySelector(".js-lightbox")
const modalImageRef = document.querySelector(".lightbox__image")
const modalButton = document.querySelector("button[data-action='close-lightbox']")
const overlayModalRef = document.querySelector(".lightbox__overlay")
let indexImg = 0;



const image = gallery.map((element,index) => {
    const listRef = document.createElement("li")
listRef.classList.add("gallery__item")
   
const linkRef = document.createElement("a")
linkRef.classList.add("gallery__link")
    linkRef.setAttribute('href', `${element.original}`);
    //  linkRef.setAttribute('data-index', `${index}`);
    
    const imageRef = document.createElement("img")
    imageRef.classList.add("gallery__image")
    imageRef.setAttribute('src', `${element.preview}`)
    imageRef.setAttribute('data-source', `${element.original}`)
    // imageRef.setAttribute('data-index', `${index}`)
    imageRef.setAttribute('alt', `${element.description}`)

 listRef.appendChild(linkRef);
  linkRef.appendChild(imageRef);
    return listRef;

})
galleryRef.append(...image)

 

galleryRef.addEventListener("click", openModal)
modalButton.addEventListener("click", onCloseModalOverlay)
overlayModalRef.addEventListener("click", onCloseModal)


function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        console.log("кликнули не по картинке")
        return
    }
    const imgTarget = event.target
    const altRef= imgTarget.getAttribute("alt")
    const largeImg = imgTarget.dataset.source;


    modalRef.classList.add("is-open")
    modalImageRef.src = largeImg;
    modalImageRef.alt = altRef
window.addEventListener("keydown", keyDowwnPress)

 }
 
 function keyDowwnPress(event) {
    if (event.code === "Escape") {
        removeClass() 
        console.log("fghjkl;")

        }
     if (event.key === "ArrowRight") {  
       
         if (indexImg < gallery.length - 1) {
             indexImg += 1
             modalImageRef.src = gallery[indexImg].original
         }
         else {
              indexImg = 0
          modalImageRef.src = gallery[indexImg].original
}
        
    }
    else if (event.code === "ArrowLeft") {

         if (indexImg > 0) {
              indexImg -= 1
          modalImageRef.src = gallery[indexImg].original
         }
          else {
             indexImg = gallery.length - 1;
          modalImageRef.src = gallery[indexImg].original
}
         
    } 
}

function onCloseModal(event) {   
     if (event.target === event.currentTarget) {
        removeClass()
    }   
}

function removeClass() {
    modalImageRef.src = " ";
    window.removeEventListener("keydown", keyDowwnPress);
    modalRef.classList.remove("is-open");
}

function onCloseModalOverlay(event) {
    removeClass() 
}




