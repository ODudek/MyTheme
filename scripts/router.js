"http://localhost:8888/wordpress/2018/05/14/kolejny-test/";
const $linkList = document.querySelectorAll("a");
let $linkArray = Array.from($linkList);
let filteredList = $linkArray.filter(link => link.href);
let finalArray = filteredList.slice(0, filteredList.length - 2);
let $container = document.querySelector(".container");

finalArray.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    fetch(link.href)
      .then(res => res.text())
      .then(date => {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(date, "text/html");
        let content = htmlDoc.querySelector(".post");
        $container.innerHTML = "";
        $container.appendChild(content);
      });
  });
});
