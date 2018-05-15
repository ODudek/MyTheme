const $button = document.querySelector("button");
const $container = document.querySelector(".showcase > .container");
const $loader = document.querySelector(".loader");

$button.addEventListener("click", () => {
  let currentUrl = window.location.href;
  if (currentUrl.includes("#")) {
    let newUrl = fixUrl(currentUrl);
    window.location.href = `${newUrl}blog`;
  } else {
    window.location.href += "blog";
  }
});

function fixUrl(url) {
  let indexOfHash = url.indexOf("#");
  const newUrl = url.substr(0, indexOfHash);
  return newUrl;
}

const homePage = () => {
  return fetch("/wordpress/wp-json/wp/v2/pages")
    .then(res => res.json())
    .then(pages => pages.filter(page => page.slug === "home"))
    .then(page => {
      renderHeader(
        page[0].title.rendered,
        page[0].content.rendered,
        $container
      );
    })
    .then(() => {
      $loader.style.display = "none";
    });
};

function renderHeader(title, content, container) {
  let $h1 = document.createElement("h1");
  $h1.textContent = title;
  $h1.classList.add("marginless");
  container.appendChild($h1);
  let $p = document.createElement("p");
  $p.textContent = content;
  container.appendChild($p);
}

function displayFooter() {
  const $p = document.querySelector(".blog-footer p");
  $p.classList.add("marginless");
}

homePage();
