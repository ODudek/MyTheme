function formatData(data) {
  return {
    time: {
      day: "14 Maja",
      year: "2018"
    },
    title: data.title.rendered,
    author: {
      name: "olek",
      href: "test"
    },
    excerpt: data.excerpt.rendered,
    post: {
      href: "test"
    }
  };
}

const postTemplate = res => {
  let data = formatData(res);
  return `<blog-post>
    <div class="post-header">
        <div class="post-date">
            <p class="u-margin-less"> ${data.time.day} </p>
            <p class="u-margin-less u-center-text"> ${data.time.year} </p>
        </div>
        <div class="post-title">
            <h2 class="u-margin-less"> ${data.title} </h2>
        </div>
        <div class="post-author">
            <p class="u-margin-less">Autor: </p>
            <my-router href="${data.author.href}"> ${data.author.name} </my-router>
        </div>
    </div>
    <div class="post-content"> ${data.excerpt}
        <div class="post-options">
            <a class="line-hover">
                <i class="fa fa-download" aria-hidden="true"></i> Zapisz do czytania w trybie offline </a>
            <my-router href="${
              data.post.href
            }" class="line-hover"> Zobacz więcej </my-router>
        </div>
    </div>
</blog-post>`;
};

export default postTemplate;
