import url from "url";

const urlString = "https://www.google.com/?q=hello";

const urlObj = new URL(urlString);
console.log(urlObj.searchParams);

const urlPath = url.format(urlObj); // It takes the url as obj and returns the exact url
console.log(urlPath);

// import.meta.url
console.log(import.meta.url);
const filePath = url.fileURLToPath(import.meta.url); //this will give just the path excluding (file://)
console.log(filePath);

const params = new URLSearchParams(urlObj.search);
console.log(params.get("q")); // this is not a proper object we need to get the data from the key
