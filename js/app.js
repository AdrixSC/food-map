// 

//Data de restaurantes
//var restaurantes = ['comida mexicana', 'comida española', 'comida argentina', 'comida china', 'comida italiana'];
var restaurants = [
    comidaEspañola = {
        name: 'Galera',
        dirección: 'Av. 20 de Noviembre, Col. 25 de Julio',
        teléfono: '55230596',
        photo: "assets/images/galera.jpg"
    },
    comidaMexicana = {
        name: 'Sabor',
        dirección: 'Tonalá No. 55, Col. Roma Norte',
        teléfono: '55270737',
        photo: "assets/images/sabor.png"
    },
    comidaArgentina = {
        name: 'Galera',
        dirección: 'Av. 20 de Noviembre, Col. 25 de Julio',
        teléfono: '55230596',
        photo: "assets/images/galera.jpg"
    },
    comidaChina = {
        name: "hola",
        dirección: 'Av. 20 de Noviembre, Col. 25 de Julio',
        teléfono: '55105397',
        photo: "assets/images/galera.jpg"
    },
    comidaItaliana = {
        name: "hola",
        dirección: 'Av. 20 de Noviembre, Col. 25 de Julio',
        teléfono: '55108493',
        photo: "assets/images/galera.jpg"
    }

]
console.log(restaurants);

//Traer elementos del HTML
//var $inputFilter = $("#input-filter");

//Funciones
var loadPage = function() {
    $("#input-filter").keyup(filter);
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
            //paintContactsInHTML(comidaEspañola);
        });
    } else {
        $("#publish-restaurants").empty();
        restaurants.forEach(function(comidaEspañola) {
            //paintContactsInHTML(comidaEspañola);
        });
    }
};

var paintLogo = function(comidaEspañola) {

    /* Crear elementos con DOM html al publicar contacto */


    //Asignando atributos y/o eventos
    $deleteContactButton.addClass("btn right");
    $removeIcone.text("delete");
    $deleteContactButton.click(removeContact);

    /*var $container = $(".container");
    $container.html()*/

    /* Asignando valores a los elementos*/
    $deleteContactButton.append($removeIcone);
    $nameContact.append(newContact.name);
    $phoneContact.append(newContact.phone);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $contactPaint.append($nameContact);
    $contactPaint.append($deleteContactButton);
    $contactPaint.append($phoneContact);

    $("#publish-contacts").prepend($contactPaint);
}

$(document).ready(loadPage);