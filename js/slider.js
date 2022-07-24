let left = 0

const slider = document.querySelector('.case_box')

const btnLeft = document.querySelector('.btn_left')

const btnRight = document.querySelector('.btn_right')

document.querySelector('.btn_left').addEventListener('click', function(){

    left+=1200

    if (left > 0) {
        btnRight.removeAttribute('disabled', true)
    }

    if (left > 2400) {
        btnLeft.setAttribute('disabled', true)
    }

    slider.style.left=-left+'px'
})

document.querySelector('.btn_right').addEventListener('click', function(){
    
    left-=1200

    if (left < 3600) {
        btnLeft.removeAttribute('disabled', true)
    }

    if (left < 1200) {
        btnRight.setAttribute('disabled', true)
    }

    slider.style.left=-left+'px'
})