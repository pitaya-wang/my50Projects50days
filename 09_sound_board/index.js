const sounds = ["applause", "boo", "gasp", "tada", "vitory", "wrong"]

sounds.forEach(sound =>{
    const btn = document.createElement("button")
    btn.classList.add("btn")

    // 在页面添加数组中的名称作为按钮
    btn.innerText = sound

    // 这里是循环后，给每个按钮添加一个监听事件
    btn.addEventListener("click", ()=> {
        stopSongs()   //停止当前的播放，以便开启后面的播放

        // 获取按钮，点击播放
        document.getElementById(sound).play()
    })

    // 在按钮里面添加按钮btn
    document.getElementById("buttons").appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()  //让当前播放停止
        song.currenTime = 0;  //将播放的进度归零
    })
}