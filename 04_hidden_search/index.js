const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

// 对按钮添加一个监听事件，鼠标点击时就会对search进行判断
// 有active类名就将其删除，没有就添加一个
btn.addEventListener('click', ()=>{
    search.classList.toggle("active");
    input.focus();

})
