const container = document.querySelector('.container')
const button = document.querySelector('.switch')

button.addEventListener('click',()=>{
    container.classList.toggle('dark-mode');
})