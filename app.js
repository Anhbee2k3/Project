const listImg = document.querySelector('.slide__img')
const imgs = document.getElementsByTagName('img')
const length = imgs.length
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

let current = 0

const clickChangeSlide = () => {
    if(current == length - 1){
        current = 0
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(0)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index__item-'+ current).classList.add('active')

    }else{
        current ++
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index__item-'+ current).classList.add('active')
    }
}
let handleEvent =  setInterval(clickChangeSlide, 5000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEvent)
    clickChangeSlide();
    handleEvent =  setInterval(clickChangeSlide, 5000)
})
btnLeft.addEventListener('click', () => {
    if(current == 0){
        current = length - 1
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index__item-'+ current).classList.add('active')

    }else{
        current --
        let width = imgs[0].offsetWidth
        listImg.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index__item-'+ current).classList.add('active')
    }
    handleEvent =  setInterval(clickChangeSlide, 5000)
})