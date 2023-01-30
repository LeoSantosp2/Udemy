const sec = document.querySelector('.container')
const ps = sec.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}