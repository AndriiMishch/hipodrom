import Notiflix from "notiflix";

const addHorseBtn = document.querySelector('[data-addHorse]')

addHorseBtn.addEventListener('click', ()=>{
    Notiflix.Notify.success('Horse succesfuly added')
})