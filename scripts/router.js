import postTemplate from "../templates/post.js";
let post = document.querySelector(".blog-post");

class MyRouter extends HTMLElement {
  set href(link) {
    this.setAttribute("href", link);
  }

  get href() {
    return this.getAttribute("href");
  }

  clickHandler(event) {
    event.preventDefault();
    let path = event.target.href;
    window.location.hash = path;
    fetch(`/wordpress/wp-json/wp/v2/${path}`)
      .then(res => res.json())
      .then(data => {
        let parser = new DOMParser();
        let html = parser.parseFromString(postTemplate(data), "text/html");
        let blog = html.querySelector("blog-post");
        console.log(blog);
        post.innerHTML = blog.innerHTML;
      });
  }

  createdCallback() {
    this.routes = document.querySelectorAll("my-router");
  }

  attachedCallback() {
    Array.from(this.routes).forEach(route => {
      route.addEventListener("click", this.clickHandler);
    });
  }
}

document.registerElement("my-router", MyRouter);
// (async () => {
//   const res = await fetch(Data.url + "/templates/post.html", {
//     method: "get",
//     headers: new Headers({
//       "X-WP-Nonce": Data.noonce
//     })
//   });
//   const textTemplate = await res.text();
//   console.log(textTemplate);
// })();
