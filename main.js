const firstH1 = document.querySelector("h1");
firstH1.addEventListener("click", () => {
  if (firstH1.classList.value.includes("yellow")) document.querySelector("h1").classList.remove("yellow");
  else document.querySelector("h1").classList.add("yellow");
})
