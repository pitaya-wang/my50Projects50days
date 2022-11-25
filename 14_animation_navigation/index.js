const toggle =  document.getElementById("toggle");
const nav = document.getElementById("nav")

// 有则去除，无则添加
toggle.addEventListener("click", ()=> nav.classList.toggle("active"))