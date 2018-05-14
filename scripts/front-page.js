const $button = document.querySelector("button");

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
