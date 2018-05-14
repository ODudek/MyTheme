const $galleryContainer = document.querySelector(
  ".post-gallery-container > .gallery"
);
const $imagesList = $galleryContainer.querySelectorAll("img");
const $leftArrow = $galleryContainer.querySelector(".fa-arrow-circle-o-left");
const $rightArrow = $galleryContainer.querySelector(".fa-arrow-circle-o-right");

class Gallery {
  constructor(imageList) {
    this.imageList = imageList;
    this.currentImageIndex = 0;
    this.addIndexAttr();
    this.hideAllImages();
    this.selectFirst();
    this.setupHandlers();
  }

  hideAllImages() {
    this.imageList.forEach(image => {
      this.hideImage(image);
    });
  }

  selectFirst() {
    let firstImage = this.imageList[0];
    this.showImage(firstImage);
  }

  addIndexAttr() {
    for (let i = 0; i < this.imageList.length; i++) {
      this.imageList[i].setAttribute("index", i);
    }
  }

  hideImage(image) {
    image.classList.remove("show");
    image.classList.add("hidden");
  }

  showImage(image) {
    image.classList.remove("hidden");
    image.classList.add("show");
  }

  isNull(element) {
    let isNull = false;
    return element === null ? (isNull = true) : (isNull = false);
  }

  addAnimation(element) {
    element.style.animation = "slide 1s ease 0.1s forwards;";
  }

  leftHandler() {
    let currentImage = $galleryContainer.querySelector(
      `[index="${this.currentImageIndex}"]`
    );
    this.hideImage(currentImage);
    this.currentImageIndex -= 1;
    let prevImage = $galleryContainer.querySelector(
      `[index="${this.currentImageIndex}"]`
    );
    if (this.isNull(prevImage)) {
      this.currentImageIndex = this.imageList.length - 1;
    }
    prevImage = $galleryContainer.querySelector(
      `[index="${this.currentImageIndex}"]`
    );
    this.showImage(prevImage);
  }

  rightHandler() {
    let currentImage = $galleryContainer.querySelector(
      `[index="${this.currentImageIndex}"]`
    );
    this.hideImage(currentImage);
    this.currentImageIndex += 1;
    let nextImage = $galleryContainer.querySelector(
      `[index="${this.currentImageIndex}"]`
    );
    if (this.isNull(nextImage)) {
      this.currentImageIndex = 0;
    }
    nextImage = $galleryContainer.querySelector(
      `[index="${this.currentImageIndex}"]`
    );
    this.showImage(nextImage);
  }

  setupHandlers() {
    $leftArrow.addEventListener("click", this.leftHandler.bind(this));
    $rightArrow.addEventListener("click", this.rightHandler.bind(this));
  }
}

new Gallery($imagesList);
