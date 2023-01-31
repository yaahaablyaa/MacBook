let btns = document.querySelectorAll('.btns button')
let tab_content = document.querySelectorAll('.tabcontent')

function show(c = 0) {
    tab_content.forEach(elem => {
        elem.style.display = "none"
    })
    tab_content[c].style.display = "flex"
    tab_content[c].classList.add('fade')


    btns.forEach((btn, i) => {
        btn.onclick = () => {
            btns.forEach(el => el.classList.remove('active'))
            btn.classList.add('active')
            show(i)
        }
    })
}
show()