const btnEl = document.querySelector('.js-hover-btn')
const btnEl2 = document.querySelector('.js-click-btn')


btnEl.addEventListener('mouseover', e => {
    const x = e.pageX - btnEl.offsetLeft;
    const y = e.pageY - btnEl.offsetTop;
    

    btnEl.style.setProperty('--xPos', x + 'px')
    btnEl.style.setProperty('--yPos', y + 'px')
    
})

btnEl2.addEventListener('click', () => {
    const random1 = Math.floor(Math.random()*254);
    const random2 = Math.floor(Math.random()*254);
    const random3 = Math.floor(Math.random()*254);
    const color = `rgb(${random1}, ${random2}, ${random3})`
    btnEl2.style.setProperty('--clr', color);
})

