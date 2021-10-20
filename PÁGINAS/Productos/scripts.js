/*HEADER */

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById('header');

    if(scroll > 20){
        header.classList.add('nav_mod');
        tress_letras.classList.add('tress_letras');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
        tress_letras.classList.remove('tress_letras');
    }
}

document.getElementById("btn__menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
nav = document.getElementById("nav");

function mostrar_menu(){

    menu.classList.toggle('move_content');

    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove("move_content");
        nav.classList.remove("move_nav");
    }
})

/*IMAGENES */

const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

/*opacidad en las imagenes */

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    //Agregamos los listener de los enlaces para filtar por categoria
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlaces) => enlaces.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });


    //listener para la barra de busqueda

    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
    });

    //listener en las imagenes para popup

    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripción = elemento.parentNode.parentNode.dataset.descripción;
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripción;
        });
    });
    
    //listener para el boton btn__cerrar__popup

    document.querySelector('#btn__cerrar__popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    //listener click en espacio en blanco quitar la clase activo

    overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });

    
});







