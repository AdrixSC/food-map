//Data de restaurantes
var restaurants = [
    Galera = {
        foodType: 'comida argentina',
        name: 'Galera',
        address: 'Av. 20 de Noviembre, Col. 25 de Julio',
        phone: '55120477',
        photo: "assets/images/galera.jpg"
    },
    Sabor = {
        foodType: 'comida mexicana',
        name: 'Sabor',
        address: 'Tonalá No. 55, Col. Roma Norte',
        phone: '55270737',
        photo: "assets/images/sabor.png"
    },
    MiráMiró = {
        foodType: 'comida argentina',
        name: 'Mirá',
        address: 'Pedregal No. 352, Col. Lomas de Sotelo',
        phone: '55230596',
        photo: "assets/images/argentino.jpg"
    },
    Antojao = {
        foodType: 'comida italiana',
        name: "Antojao",
        address: 'Marcos carrillo No. 257, Col. Viaducto Piedad',
        phone: '55120865',
        photo: "assets/images/antojao.jpg"
    },
    Kumiko = {
        foodType: 'comida china',
        name: "Kumiko",
        address: 'San Felipe No. 16, Col. Narvarte',
        phone: '55941206',
        photo: "assets/images/chino.jpg"
    },
    Piato = {
        foodType: 'comida italiana',
        name: "Piato",
        address: 'Aragón No. 98, Col. Bosques de Aragón',
        phone: '55072696',
        photo: "assets/images/italiano.jpg"
    }

];

//Traer elementos del HTML
var $inputFilter = $("#input-filter");

//Funciones
var loadPage = function() {
    $("#input-filter").keyup(filter);
    //$inputFilter.keyup(validateRestaurant);
    //$(".modal").modal();
};

/*var validateRestaurant = function() {
    //En esta funcion tenemos que validar que el usuario ingrese datos y no valores vacios

    if ($(this).val().trim().length > 0) {
        $("#input-filter").removeAttr("disabled");
    } else {
        $("#input-filter").attr("disabled", true);
    }
};*/

var paintLogo = function(restaurantsIndice) {

    /* Crear elementos con DOM html al publicar restaurante */
    var $divRow = $("<div /> ", { "class": "row justify-content-center restaurant" });
    var $divCol = $("<div /> ", { "class": "col-6" });
    var $imgLogo = $("<img />", { "src": restaurants[0].photo});

    //Asignando atributos y/o eventos
    //$imgLogo.click(openModal);
    //imgLogo.src()

    /* Asignando valores a los elementos*/
    $divCol.append($imgLogo);
    $imgLogo.append(restaurants[0].photo);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $divRow.append($divCol);

    $("#publish-restaurants").prepend($divRow);
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
        });
        /*$("#publish-restaurants").empty();
        filtederedRestaurants.forEach(function(restaurantsIndice) {
            paintLogo(restaurantsIndice);
        });
    } else {
        $("#publish-restaurants").empty();
        restaurants.forEach(function(restaurantsIndice) {
            paintLogo(restaurantsIndice);
        });*/

    }
    console.log("filter", filtederedRestaurants)
};

$(document).ready(loadPage);
