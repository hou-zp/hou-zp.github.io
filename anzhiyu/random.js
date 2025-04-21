var posts=["2025/04/21/hello-world/","2025/04/21/我的第一篇博客文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };