const firstH1 = document.querySelector("h1");
firstH1.addEventListener("click", () => {
  if (firstH1.classList.includes("yellow") firstH1.classList.remove("yellow");
  else firstH1.classList.add("yellow");
  console.log("h1 clicked");
})
