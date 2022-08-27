let blog = document.getElementById('blog')
let block = document.getElementById('block')
let fileUrl = document.getElementById('fileUrl')


let musics = []
let array = []

let arr = [
    { m: './assets/For You/music-1.mp3' },
    { m: './assets/For You/music-2.mp3' },
    { m: './assets/For You/music-3.mp3' },
    { m: './assets/For You/music-4.mp3' },
    { m: './assets/For You/music-5.mp3' },
    { m: './assets/For You/music-6.mp3' },
    { m: './assets/For You/music-7.mp3' },
    { m: './assets/For You/music-8.mp3' },
    { m: './assets/For You/music-9.mp3' },
    { m: './assets/For You/music-10.mp3' },
    { m: './assets/For You/music-11.mp3' },
    { m: './assets/For You/music-12.mp3' },
    { m: './assets/For You/music-13.mp3' },
    { m: './assets/For You/music-14.mp3' },
    { m: './assets/For You/music-15.mp3' },
]
// localStorage.setItem('musicsArray', JSON.stringify(news))

function draw() {
    let store = localStorage.getItem('musicsArray')
    let news = JSON.parse(store)

    localStorage.setItem('musicsArray', JSON.stringify(musics))

    block.innerHTML = news.map((item, index) => `
    <div class="card">
        <button onclick='del(${index + 1})' style='color: red;'> ♥ </button>
        <h1>🎶</h1>
        <audio src="${item.m}" controls></audio>
    </div>
    `).join('')

    localStorage.setItem('musicsArray', JSON.stringify(news))
    drawed()
}

function drawed() {
    let store = localStorage.getItem('musicsArr')
    let newArr = JSON.parse(store)

    localStorage.setItem('musicsArr', JSON.stringify(arr))

    let a = newArr.map((item, index) => `<div class="card">
        <button onclick='pushed(${index})'> ♥ </button>
        <h1>🎶</h1>
        <audio src="${item.m}" controls></audio>
    </div>`).join('')
    blog.innerHTML = a

    localStorage.setItem('musicsArr', JSON.stringify(newArr))
}

function pushed(i) {
    let store = localStorage.getItem('musicsArray')
    let news = JSON.parse(store)

    news.push(arr[i])
    arr.splice(i, 1)

    localStorage.setItem('musicsArray', JSON.stringify(news))
    localStorage.setItem('musicsArr', JSON.stringify(arr))

    drawed()
    draw()
}

function del(index) {
    let store = localStorage.getItem('musicsArray')
    let news = JSON.parse(store)

    news.splice(index - 1, 1)
    array.push({ m: news[index] })

    localStorage.setItem('musicsArray', JSON.stringify(news))
    localStorage.setItem('musicsArr', JSON.stringify(arr))

    drawed()
    draw()
}

draw()
drawed()