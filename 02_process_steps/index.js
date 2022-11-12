const progress = document.getElementById("progress");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = document.querySelectorAll(".circle");

// 设置当前的流向
let currentActive = 1;

// 监听下一个的点击事件
next.addEventListener('click',()=>{
    currentActive++;

    // 
    if(currentActive>circles.length){
        currentActive = circles.length;
    }
    update();
});

// 监听上一个的点击事件
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive<1){
        currentActive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle, id) => {
        if(id < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}