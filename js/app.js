//Data de restaurantes
var restaurants = [
    comidaEspañola = {
        name: 'Galera',
        address: 'Av. 20 de Noviembre, Col. 25 de Julio',
        phone: '55230596',
        photo: "assets/images/galera.jpg"
    },
    comidaMexicana = {
        name: 'Sabor',
        address: 'Tonalá No. 55, Col. Roma Norte',
        phone: '55270737',
        photo: "assets/images/sabor.png"
    },
    comidaArgentina = {
        name: 'Galera',
        address: 'Av. 20 de Noviembre, Col. 25 de Julio',
        phone: '55230596',
        photo: "assets/images/galera.jpg"
    },
    comidaChina = {
        name: "hola",
        address: 'Av. 20 de Noviembre, Col. 25 de Julio',
        phone: '55105397',
        photo: "assets/images/galera.jpg"
    },
    comidaItaliana = {
        name: "hola",
        address: 'Av. 20 de Noviembre, Col. 25 de Julio',
        phone: '55108493',
        photo: "assets/images/galera.jpg"
    }

]
console.log(restaurants);

//Traer elementos del HTML
var $inputFilter = $("#input-filter");

//Funciones
var loadPage = function() {
    $("#input-filter").keyup(filter);
    $inputFilter.keyup(validateRestaurant);
    //$(".modal").modal();
};

var validateRestaurant = function() {
    //En esta funcion tenemos que validar que el usuario ingrese datos y no valores vacios

    if ($(this).val().trim().length > 0) {
        $("#input-filter").removeAttr("disabled");
    } else {
        $("#input-filter").attr("disabled", true);
    }
};

var paintLogo = function(comidaEspañola) {

    /* Crear elementos con DOM html al publicar restaurante */
    var $divRow = $("<div /> ", { "class": "row justify-content-center restaurant" });
    var $divCol = $("<div /> ", { "class": "col-6" });
    var $imgLogo = $("<img />", { "src": "assets/images/galera.jpg", "alt": "galera" });

    //Asignando atributos y/o eventos
    $imgLogo.click(openModal);

    /* Asignando valores a los elementos*/
    $divCol.append($imgLogo);
    $imgLogo.append(comidaEspañola.photo);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $divRow.append($divCol);

    $("#publish-restaurants").prepend($divRow);
    console.log(paintLogo, "paint");
};

var filter = function() {
    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
    var inputFilter = $("#input-filter").val().toLowerCase();
    if ($("#input-filter").val().trim().length > 0) {
        var filtederedRestaurants = restaurants.filter(function(comidaEspañola) {
            return comidaEspañola.name.toLowerCase().indexOf(inputFilter) >= 0;
        });
        $("#publish-restaurants").empty();
        filtederedRestaurants.forEach(function(comidaEspañola) {
            paintLogo(comidaEspañola);
        });
    } else {
        $("#publish-restaurants").empty();
        restaurants.forEach(function(comidaEspañola) {
            paintLogo(comidaEspañola);
        });
    }
    console.log("filter", inputFilter)
};

$(document).ready(loadPage);