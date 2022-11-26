const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = "0"

    const updateCounter = ()=>{

        // +:转换为数值
        const target = +counter.getAttribute("data-target")
        const c = +counter.innerText

        // 定义增量
        const increment = target / 200

        if(c < target) {

            // 向上取整
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})