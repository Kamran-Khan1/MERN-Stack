const button = document.querySelector(".btn button");
const output = document.querySelector("#allposts");
const form = document.querySelector("#add-post-form");
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Error fetching posts");
    }

    const posts = await res.json(); //It takes time for data to come
    output.innerHTML = "";
    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.classList.add("beautify");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Couldn't fetch data", error);
  }
}

async function createPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");
  console.log(title);
  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) {
      throw new Error("Error posting data");
    }
    const newPost = await res.json();
    const postel = document.createElement("div");
    postel.textContent = newPost.title;
    output.appendChild(postel);
    showPosts();
  } catch (error) {
    console.log("Posting error", error);
  }
}

//create an even listner
button.addEventListener("click", showPosts);
form.addEventListener("submit", createPost);
