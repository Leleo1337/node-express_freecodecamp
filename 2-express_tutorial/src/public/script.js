const burguerIcon = document.querySelector('img')
const ulElement = document.querySelector('ul')

window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth
    if(windowWidth >= 768){
        ulElement.classList.remove('hidden')
    }
})

burguerIcon.addEventListener('click', () => {
    ulElement.classList.toggle('hidden')
})