// blog-details.js

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
  
    if (blogId) {
      loadBlogDetails(blogId);
    } else {
      console.error('Blog ID is missing!');
    }
  });
  
  function loadBlogDetails(blogId) {
    // Example data
    const blogData = {
      1: {
        title: "A Vision for a Better Kenya",
        image: "Images/blog1.jpg",
        content: "This is the detailed content of the blog 'A Vision for a Better Kenya'. Here we describe our hopes and plans for a better future..."
      },
      2: {
        title: "Building a Stronger Community",
        image: "Images/blog2.jpg",
        content: "This blog is about the steps we can take to create a more connected and supportive community..."
      }
    };
  
    const blog = blogData[blogId];
    if (blog) {
      document.getElementById("blog-title").textContent = blog.title;
      document.getElementById("blog-image").src = blog.image;
      document.getElementById("blog-image").alt = blog.title;
      document.getElementById("blog-text").innerHTML = blog.content;
    } else {
      console.error('Blog not found!');
    }
  }
  