
const boton = document.querySelector(".encabezado");
const ciudad = document.querySelector(".ciudadIngresada");

const ciudadMostrada = document.querySelector("#ciudad")
const temperaturaMostrada = document.querySelector("#grados")
const imagenMostrada = document.querySelector("#wicon")

boton.addEventListener("click", function () {
    if (ciudad.value === "") {
        console.log("Se debe ingresar una ciudad")
    } else {
        cargarCiudad(ciudad.value)
    }
})

function cargarCiudad(ciudad) {
    const apiKey = `34fe32fa9ee26cb57f124b71c8f246a1`;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod !== 200) {
                ciudadMostrada.textContent = "Ciudad no encontrada";
                temperaturaMostrada.textContent = "";
                imagenMostrada.src = "";
            } else {
                ciudadMostrada.textContent = data.name;
                temperaturaMostrada.textContent = `${Math.floor(data.main.temp - 273.15)}°`;
                categorizarTemperatura(Math.floor(data.main.temp - 273.15))
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });
}

function categorizarTemperatura(temperatura) {
    temperatura
    switch (true) {
        case (temperatura < 10):
            imagenMostrada.src = "https://i.imgflip.com/3mb1b6.jpg"
            break;
        case (temperatura >= 11 && temperatura <= 25):
            imagenMostrada.src = "https://i.redd.it/p0ag8p91leu71.png"
            break;
        case (temperatura > 25):
            imagenMostrada.src = "https://media.npr.org/assets/img/2023/01/14/this-is-fine_wide-0077dc0607062e15b476fb7f3bd99c5f340af356-s1400-c100.jpg"
            break;
        default:
            categoria = 'No categorizada';
    }
}



