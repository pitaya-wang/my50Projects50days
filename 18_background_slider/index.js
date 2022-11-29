const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

// 设置一个初始值
let activeSlide = 0

// 点击右边箭头时
rightBtn.addEventListener("click", ()=> {
    activeSlide++

    // 设置回归第一张图片
    if(activeSlide > slides.length -1 ){
        activeSlide = 0
    }

    setBgToBody() 
    setActiveSlide()
})

leftBtn.addEventListener("click", ()=> {
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})

// 初始时显示图片
setBgToBody()

// 一个设置背景图片的函数
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}

// 一个点击添加类名的函数，
function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove("active"))
    slides[activeSlide].classList.add("active")
}