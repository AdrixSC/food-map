//Traer elementos del HTML
var $inputFilter = $("#input-filter");

//Funciones
var loadPage = function() {
    $("#input-filter").keyup(filter);
    paintLogo(restaurantsIndice);
    //$(".modal").modal();
};

var paintLogo = function(restaurantsIndice) {
    /*Llamando elementos que se van a utilizar para crear elemento img*/

    /* Crear elementos con DOM html al publicar restaurante */
    var $containerImg = $("<div />", { "class": "col-6" });
    var $imgLogo = $("<img />", { "src": restaurantsIndice.photo });

    //console.log($imgLogo);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $containerImg.append($imgLogo);
    $("#publish-restaurants").prepend($containerImg);
};

var filter = function() {

    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
    var inputFilter = $("#input-filter").val().toLowerCase();
    if ($("#input-filter").val().trim().length > 0) {
        for (var i = 0; i > restaurants.length; i++) {
            var restaurantsIndice = restaurants[i];
        }
        var filtederedRestaurants = restaurants.filter(function(restaurantsIndice) {
            return restaurantsIndice.foodType.toLowerCase().indexOf(inputFilter) >= 0;
        })
        $("#publish-restaurants").empty();
        filtederedRestaurants.forEach(function(restaurantsIndice) {
            paintLogo(restaurantsIndice);
        });
    } else {
        $("#publish-restaurants").empty();
        restaurants.forEach(function(restaurantsIndice) {
            paintLogo(restaurantsIndice);
        });
    }
    //console.log("filter", filtederedRestaurants)
};

$(document).ready(loadPage);