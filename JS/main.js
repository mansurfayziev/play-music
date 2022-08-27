const link = document.getElementById('link');
let themeBtn = document.getElementById('themeBtn')
let keyTheme = false

keyTheme === false ? themeBtn.innerText = 'Light Mode' : themeBtn.innerText = 'Dark Mode'

function theme() {
    if (keyTheme === false) {
        link.setAttribute('href', './CSS/dark.css')
        themeBtn.innerText = 'Dark Mode'
        keyTheme = true
    } else {
        link.setAttribute('href', './CSS/light.css')
        themeBtn.innerText = 'Light Mode'
        keyTheme = false
    }
}

let nav = document.getElementById('nav')
let h1 = document.getElementById('h1')
h1.style.transition = '.5s'

let key = false
function toggle() {
    if (key === false) {
        nav.style.marginLeft = '0'
        h1.style.transform = 'rotate(45deg)'
        key = true
    } else {
        nav.style.marginLeft = '-100%'
        h1.style.transform = 'rotate(0deg)'
        key = false
    }
}