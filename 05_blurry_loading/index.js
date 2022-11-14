
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

// 声明一个计时器，30毫秒一刷新
let int = setInterval(bluring, 30);

function bluring(){
    load++;
    if(load > 99){
        // 加载到100时就取消掉计时器
        clearInterval(int);
    }
    // 将计时器显示到页面
    loadText.innerHTML = `${load}%`

    //二、三号参数是load的值，四、五号参数是透明度的变化计时器数字逐渐模糊
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // 30是模糊滤镜的像素，0时图片就会最清晰，所以这是个随着数字加载图片逐渐清晰的过程
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
