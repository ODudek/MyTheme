class Resize {
  constructor(image, width, height) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.removeAttrs();
    this.startResize();
  }

  startResize() {
    let mainCanvas = document.createElement("canvas");
    mainCanvas.width = this.width;
    mainCanvas.height = this.height;
    let ctx = mainCanvas.getContext("2d");
    ctx.drawImage(this.image, 0, 0, mainCanvas.width, mainCanvas.height);
    this.image.src = mainCanvas.toDataURL("image/jpeg");
  }

  getPercent() {
      let [width, height] = this.size;
      
  }

  get size() {
    let imageWidth = this.image.width;
    let imageHeight = this.image.height;
    return { width: imageWidth, height: imageHeight };
  }

  removeAttrs() {
    this.image.removeAttribute("width");
    this.image.removeAttribute("height");
    this.image.removeAttribute("srcset");
  }
}

new Resize(document.querySelector(".post-thumb > img"), 500, 500);
console.log(document.querySelector(".post-thumb > img"));
