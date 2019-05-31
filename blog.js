const articleHeader = document.querySelector(".article__header");

console.log(articleHeader);

articleHeader.textContent = "Welcome to the SHANE blog!";

const allArticleHeader  = document.querySelectorAll(".article__header");

console.log(allArticleHeader)

allArticleHeader[0].classList.add("important")
allArticleHeader[1].classList.add("important")

const dashed = document.querySelector(".dashed");

console.log(dashed);

dashed.classList.remove("dashed");

const articleFooter = document.querySelector(".article__footer");

console.log(articleFooter)

articleFooter.classList.add("goldenrod");