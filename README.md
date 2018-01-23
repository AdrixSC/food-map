#INSTRUCCIONES

Crear una web-app que a través de un input pueda filtrar los restaurantes que se encuentran cerca de ti. (la estructura de los datos puede ser en un arreglo, objeto o individual).
##Flujo de la aplicación:
1. Debe tener una vista splash con duración de 2 a 5 segundos que redirecciona a tu vista principal.
2. En la vista principal se muestran todos los restaurantes cerca junto con el input para filtrar tu elección (los criterios de filtrado pueden ser por tipo de comida, costos, orden alfabético, etc.)
3. Una vez hecha la eleccion del filtro, deben mostrarse sólo los restaurantes que cumplan con la condición
4. Al seleccionar alguno de los restaurantes, deberá mostrarse la información de el a traves de un modal (dirección, foto, mapa, botón);
5. Una vez cerrado el modal, debe volver a la vista principal

#PSEUDOCÓDIGO

//HTML
1. Enlazar CDN de bootstrap y jQuery.
2. Maquetar el diseño de la aplicación.
3. Dar estilos necesarios.

//JS
1. Para la función del splash se crea una vista independiente que tendrá un contador de tiempo con setTimeOut (3500 milisegundos), y cuando pase el tiempo establecido debe redireccionar a la la vista principal.
2. En el home, que será la siguiente vista a la que nos direcciona el splash, necesitamos un input para ingresar la busqueda (que nos deje escribir un dato,obtener el unput en javascript por su id o lo que sea,  obtener lo que el usuario ingrese -su valor- .val())
2.1 Necesitamos una base de datos (se creará una data de objetos, y cada objeto se va a diferenciar por el tipo de comida, por lo que la búsqueda se hará por medio de ese tipo de dato)
3. Comparar el dato ingresado con la data utilizando el método .filter() en jQuery.
4. Los datos devueltos del resultado de la búsqueda en el filtro, serán imágenes, las cuales se jalarán de la data, por lo cual sus direcciones src deben ser generadas en la data, y creadando su contenedor en el DOM.
3. Para la función del restaurante elegido se le debe agregar un evento click a la imagen para que se abra el modal con su información.
4. Para la función que va a cerrar el modal, el boton va a tener la función de que se vuelva a recargar la página, para que se regrese a su vista principal.
