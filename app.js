const btn = document.querySelector('button')
const h1 = document.querySelector('h1')
btn.addEventListener('click', function () {

    const newcolor = makeRandColor()
    document.body.style.backgroundColor = newcolor;
    h1.innerText = newcolor
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 50 && g < 50 && b < 100) {
        h1.style.color = 'white'
    }
    return `rgb(${r},${g},${b})`
}

