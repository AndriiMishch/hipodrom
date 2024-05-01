import Notiflix from "notiflix";

const form = document.querySelector('form')
const addHorseBtn = document.querySelector('[data-addHorse]')

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    Notiflix.Notify.success('Horse succesfuly added')
    createMarkup()
}
function createMarkup() {
    
}