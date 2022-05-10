window.addEventListener('load', () => {
    const contenedor_loader = document.getElementsByClassName('images'); //Seleccionamos el contenedor de las imagenes
    for (let i = 0; i < contenedor_loader.length; i++) {
    contenedor_loader[i]
    .classList.add('img_loaded'); // agrega la clase img_loaded
    }
});

window.onscroll = () => {
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
};