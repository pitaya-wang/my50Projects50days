const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", ()=>{
        
        // toggle()有则移除，无则添加
        // parentNode 给父级添加类名
        toggle.parentNode.classList.toggle("active")
    })
})