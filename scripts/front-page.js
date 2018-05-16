const $button = document.querySelector("button");
const $container = document.querySelector(".u-showcase > .u-container");
const $loader = document.querySelector(".u-loader");

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
  $h1.classList.add("u-margin-less");
  container.appendChild($h1);
  let $p = document.createElement("p");
  $p.classList.add("u-margin-bottom-small");
  $p.textContent = content;
  container.appendChild($p);
}

homePage();
