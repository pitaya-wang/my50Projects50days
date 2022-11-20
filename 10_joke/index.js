
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", getjoke)

getjoke()

async function getjoke(){
    const config = {
        headers:{
            Accept:"application/json",
        }
    };

    const res = await fetch("https://icanhazdadjoke.com", config)

    const data = await res.json();

    // 将笑话内容插入页面
    jokeEl.innerHTML = data.joke
}