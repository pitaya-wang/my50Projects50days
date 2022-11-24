
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

//一打开也，页面就是自动聚焦我文本输入框
textarea.focus();

// 添加一个键盘事件
textarea.addEventListener("keyup", (e)=>{

    // 根据键盘内容添加标签显示在页面
    createTags(e.target.value)

    // 设置回车后清空输入框的效果
    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        },10)

        // 回车后触发闪动的效果
        randomSelect()
    }
})

// 根据按键内容添加标签
function createTags(input) {
    // 将输入的内容根据逗号分隔开，返回一个数组
    const tags = input.split(",").filter(tag => tag.trim()!=="").map (tag => tag.trim()) //去除前后多余的空格
    
    // 严谨写法，清空标签内容
    tagsEl.innerHTML = ""

    
    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag")

        // 在页面显示
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
    });

}

//生成随机
function randomSelect() {
    const times = 30

    // 一个无限循环定时器
    const interval = setInterval(()=>{

        // 随机标签
        const randomTag = pickRandomTag()

        // 判断返回的随机标签 这的判断是双重保险
        if(randomTag !== undefined) {
            highlightTag(randomTag)

        // 一次性定时器：去除高光，形成闪一下的效果
        setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)
        }
    },100)

    // 3秒后触发一个取消上面的无限循环定时器
    // 停止闪动，同时随机获取一个标签
    setTimeout(() => {
        clearInterval(interval)

        // 触发闪动
        setTimeout(()=> {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        },100)
    }, times * 100)
} 

// 选择随机标签
function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")

    // 依据随机数返回标签
    return tags[Math.floor(Math.random()*tags.length)]
}

// 添加高光（css定义的类）
function highlightTag(tag) {
    tag.classList.add("highlight")
}

// 移除高光
function unHighlightTag(tag){
    tag.classList.remove("highlight")
}

