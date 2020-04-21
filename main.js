const myBlog = "Tom Strother";

const sectionHead = document.querySelector(".article__header");
sectionHead.textContent = `Welcome to the ${myBlog} blog`;

const sectionHeadAll = document.querySelectorAll(".article__header");
for (let i = 0; i < sectionHeadAll.length; i++)
  sectionHeadAll[i].classList.add("important");

const sectionHeadLast = document.querySelector(".dashed");
sectionHeadLast.classList.remove("dashed");

const sectionFooter = document.querySelector(".article__footer");
sectionFooter.classList.add("goldenrod");
