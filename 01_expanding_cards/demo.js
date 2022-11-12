
// 获取所有的pic类
const pics = document.querySelectorAll(".pic")

pics.forEach((pic) =>{
    // 增加一个监听事件
    pic.addEventListener("click", ()=>{
        removeActiveClasses();  //添加类名之前先移除已有的类名
        pic.classList.add("active")  //添加一个类名，展开图片
    })
})
function removeActiveClasses(){
    pics.forEach(pic =>{
        pic.classList.remove("active"); //遍历所有的pic类，移除类名active
    })
}