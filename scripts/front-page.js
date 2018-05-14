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
  const [newUrl, rubish] = url.split("#");
  return newUrl;
}
