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
0. Crear el splash que tenga una transicion de 5 segundos máximo, y redireccione a otra vista 0.1 necesitamos investigar como redireccionar a otra vista(location)
0.2 como hacer la animación (settimeout)
0.3 necesito un js para el splash y linkearlo a mi html
1. Una página que sirve para el celular


2. Necesitamos un input para ingresar la busqueda (que nos deje escribir un dato,obtener el unput en javascript por su id o lo que sea,  obtener lo que el usuario ingrese -su valor- .val() )
2.1 Necesitamos una base de datos (crearla con objetos, arreglo o arreglo de objetos)
3. Comparar el dato ingresado con la data (si busco tacos, mostrar las coincidencias con tacos, investigar .filter() en js)


1. Para la función del splash se crea una vista con clase hidden que tendrá un contador de tiempo (2 a 5 segundos), y cuando pase el tiempo se debe ocultar y mostrar la vista principal.(necesitamos un js y html separados; investigar el location del boom que nos ayuda a redireccionar).
2. Para la función del filtro se va a crear un input y se debe validar el texto que el usuario ingrese, entonces se van a mostrar los restaurantes que coincidan con la busqueda, van a ser imágenes de los logos de los restaurantes.
3. Para la función del restaurante elegido se le debe agregar un evento click para que se abra el modal con su información.
4. Para la función que va a cerrar el modal, el boton va a tener la función de que se vuelva a recargar la página.
