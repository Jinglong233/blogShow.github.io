var posts=["2026/01/28/hello-world/","2026/01/28/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };