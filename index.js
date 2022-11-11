
var mandar = document.getElementById("PROMO");

var numero = [ , , , , , , , , ];
for(var i = 0; i < numero.length; i++){
    numero[i] = parseInt(Math.random() * 24 + 1);
}

//mandar.innerHTML = numero[i]; FUNCIONA

for(var i = 0; i < numero.length; i++){
    // mandar.innerHTML += numero[i] + " ";
    switch(numero[i]){
        case 1:
            mandar.innerHTML += `
            <div class="c1">
                    Late    S/.9.00 <button>Añadir</button><br>
                    <img src="Imagenes/Café/CafeLate.jpg" alt="expresso">
                </div>
            `;
        break;
        case 2:
            mandar.innerHTML += `
            <div class="c1">
                    Capuccino   S/.9.00 <button>Añadir</button><br>
                    <img src="Imagenes/Café/Capuchino.jpg.jpg" alt="Cappuccino">
                </div>
            `;
        break;
        case 3:
            mandar.innerHTML += `
            <div class="c1">
                    Caramel Frapuchino   S/.7.00 <button>Añadir</button><br>
                    <img src="Imagenes/Café/CaramelFrapuchino.jpg" alt="americano"><br>
                </div>
            `;
        break;
        case 4:
            mandar.innerHTML += `
            <div class="c1">
                    Dopio S/.7.50 <button>Añadir</button><br>
                    <img src="Imagenes/Café/Doppio.jpg" alt="cafe con leche"><br>
                </div>
            `;
        break;
        case 5:
            mandar.innerHTML += `
            <div class="c1">
                    Expreso S/.7.50 <button>Añadir</button><br>
                    <img src="Imagenes/Café/Expreso.jpg" alt="mocca"><br>
                </div>
            `;
        break;
        case 6:
            mandar.innerHTML += `
            <div class="c1">
                    Frape S/.7.50 <button>Añadir</button><br>
                    <img src="Imagenes/Café/Frape.jpg" alt="frappe"><br>
                </div>
            `;
        break;
        case 7:
            mandar.innerHTML += `
            <div class="c1">
                    Lungo S/.8.00 <button>Añadir</button><br>
                <img src="Imagenes/Café/Lungo.jpg" alt="cortado"><br>
                </div>
            `;
        break;
        case 8:
            mandar.innerHTML += `
            <div class="c1">
                    Machiato S/.8.00 <button>Añadir</button><br>
                    <img src="Imagenes/Café/Macchiato.jpg" alt="carajillo"><br>
                </div>
            `;
        break;
        case 9:
            mandar.innerHTML += `
            <div class="g1">
                Galletas de alfajor   S/.3.50 <button>Añadir</button><br>
                <img src="Imagenes/Galleta/Alfajor.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 10:
            mandar.innerHTML += `
            <div class="g1">
                Galletas con chocochips   S/.3.50 <button>Añadir</button><br>
                <img src="Imagenes/Galleta/Chips.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 11:
            mandar.innerHTML += `
            <div class="g1">
                Galletas de chocolate   S/.3.50 <button>Añadir</button><br>
                <img src="Imagenes/Galleta/Chocolate.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 12:
            mandar.innerHTML += `
            <div class="g1">
                Galletas con crema        S/3.50 <button>Añadir</button><br>
                <img src="Imagenes/Galleta/Crema.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 13:
            mandar.innerHTML += `
            <div class="g1">
                Galleta con lucuma     S/4.00 <button>Añadir</button><br>
                <img src="Imagenes/Galleta/Lucuma.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 14:
            mandar.innerHTML += `
            <div class="g1">
                Galletas con manjar  S/3.00 <button>Añadir</button><br>
                <img src="Imagenes/Galleta/Manjar.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 15:
            mandar.innerHTML += `
            <div class="g1">
                Galletas con nutella  S/3.00 <button>Añadir</button><br>
            <img src="Imagenes/Galleta/Nutella.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 16:
            mandar.innerHTML += `
            <div class="g1">
                Galletas S'More  S/3.00 <button>Añadir</button><br>
            <img src="Imagenes/Galleta/S'More.jpg" alt="galletas"><br>
            </div>
            `;
        break;
        case 17:
            mandar.innerHTML += `
            <div class="k1">
                Keke de calabaza     S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/calabaza.jpg" alt="naranja"><br>
            </div>
            `;
        break;
        case 18:
            mandar.innerHTML += `
            <div class="k1">
                Keke de chocolate   S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/chocolate.jpg" alt="chocolate"><br>
            </div>
            `;
        break;
        case 19:
            mandar.innerHTML += `
            <div class="k1">
                Keke de fresa     S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/fresa.jpg" alt="marmoleado"><br>
            </div>
            `;
        break;
        case 20:
            mandar.innerHTML += `
            <div class="k1">
                Keke de hershey   S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/hershey.jpg" alt="zanahoria"><br>
            </div>
            `;
        break;
        case 21:
            mandar.innerHTML += `
            <div class="k1">
                Cupcake de oreo          S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/oreo-cupcake.jpg" alt="keke ingles"><br>
            </div>
            `;
        break;
        case 22:
            mandar.innerHTML += `
            <div class="k1">
                Pie de limon      S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/piedelimon.jpg" alt="de limon"><br>
            </div>
            `;
        break;
        case 23:
            mandar.innerHTML += `
            <div class="k1">
                Keke de vainilla   S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/vainilla.jpg" alt="mandarina"><br>
                </div>
            `;
        break;
        case 24:
            mandar.innerHTML += `
            <div class="k1">
                Keke de zanahoria       S/.5.00 <button>Añadir</button><br>
                <img src="Imagenes/Keke/zanahoria.jpg" alt="marmoleado"><br>
            </div>
            `;
        break;
        default:
            mandar.innerHTML += `
            <h1>Sebastian</h1>
            `;
        break;
    }
}

ScrollReveal().reveal('.slider');
ScrollReveal().reveal('.slide-track');
ScrollReveal().reveal('.bloque');
ScrollReveal().reveal('.bloque1');
ScrollReveal().reveal('.bloque2');
ScrollReveal().reveal('.secTitulo');
ScrollReveal().reveal('.secCafe');
ScrollReveal().reveal('.c1');
ScrollReveal().reveal('.secGalleta');
ScrollReveal().reveal('.g1');
ScrollReveal().reveal('.secKeke');
ScrollReveal().reveal('.k1');

Swal.fire({
    title:'¡Bienvenido!',
    text:'Nos da gusto que estes aqui',
    icon:'success',
    width:'50%'
});


button()
function button(){
    Swal("¿Seguro que desea añadir este producto?",{
    buttons:["Si","No"]
})
}