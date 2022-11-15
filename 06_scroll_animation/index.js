const contents = document.querySelectorAll(".content");

// 窗口滚动条移动时触发check函数
window.addEventListener('scroll', check)

check()


// 这里还是不太理解
function check(){
    // 定义一个元素快距离底部的大小
    const triggerBottom = window.innerHeight /5 * 4

    contents.forEach((content) => {

        // 元素块距离顶部的大小
        const boxTop = content.getBoundingClientRect().top

        // 下拉窗口过程中，元素块距离底部的大小要满足一定条件才会使下一个元素块返回
        if(boxTop < triggerBottom){
            content.classList.add("show")
        }else{
            content.classList.remove("show")
        }
    })
}