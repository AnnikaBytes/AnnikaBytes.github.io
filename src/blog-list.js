var blogs = [
    {
        title: "Embracing the Craft",
        date: "March 8, 2026",
        description: "Lessons learned while building my first personal website and finding beauty in the details of software engineering.",
        slug: "embracing-the-craft"
    },
];
// Create & append elements for each blog
function renderBlogs(list) {
    var container = document.getElementById("blog-container");
    if (!container)
        return;
    container.innerHTML = "";
    list.forEach(function (b) {
        var post = document.createElement("div");
        post.className = "post";
        var h1 = document.createElement("h1");
        var a = document.createElement("a");
        a.href = "./blogs/".concat(b.slug, ".html");
        a.textContent = b.title;
        h1.appendChild(a);
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
        var p = document.createElement("p");
        p.textContent = b.description;
        post.append(p);
        var date = document.createElement("div");
        date.className = "date";
        date.textContent = b.date;
        post.append(date);
        container.append(post);
    });
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { return renderBlogs(blogs); });
}
else {
    renderBlogs(blogs);
}
