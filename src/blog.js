// src/blog.ts
// At least two blogs
var blogs = [
    {
        title: "Embracing the Craft",
        date: "March 8, 2026",
        description: "Lessons learned while building my first personal website and finding beauty in the details of software engineering.",
        slug: "embracing-the-craft"
    },
];
// Create a card and append to the container
function renderBlogs(list) {
    var container = document.getElementById("blog-container");
    if (!container)
        return;
    container.innerHTML = "";
    list.forEach(function (b) {
        // Blog post container
        var post = document.createElement("div");
        post.className = "post";
        // Title (h1) linking to individual page via slug
        var h1 = document.createElement("h1");
        var a = document.createElement("a");
        a.href = "./blogs/".concat(b.slug, ".html");
        a.textContent = b.title;
        h1.appendChild(a);
        // Optional image
        if (b.image && b.image.trim() !== "") {
            var img = document.createElement("img");
            img.src = b.image;
            img.alt = b.imageAlt || "";
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.style.borderRadius = "8px";
            img.style.margin = "8px 0";
            post.append(h1, img);
        }
        else {
            post.append(h1);
        }
        // Description
        var p = document.createElement("p");
        p.textContent = b.description;
        post.append(p);
        // Date
        var date = document.createElement("div");
        date.className = "date";
        date.textContent = b.date;
        post.append(date);
        // Append to main container
        container.append(post);
    });
}
// Run after DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { return renderBlogs(blogs); });
}
else {
    renderBlogs(blogs);
}
