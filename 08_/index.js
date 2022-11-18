const labels = document.querySelectorAll(".form-control label");


labels.forEach(label => {

    // 标签与标签内的文本
    label.innerHTML = label.innerText.split("").map((letter, index)=>`<span style="transition-delay:${index*50}ms">${letter}</span>`)
    .join("")
})