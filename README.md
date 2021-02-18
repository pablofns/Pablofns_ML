# Test Práctico - Frontend

**Nota: se debe inicializar el servidor de Express que se encuentra en la carpeta  `/server` para atender las peticiones del lado del cliente.**

## Componentes

Todos los componenetes se encuentran en el directorio /src

# SearchBox

Caja de busqueda asociada a la ruta '/'.
Renderiza el formulario que toma el valor ingresado por el usuario y la envia el componente 'ItemsList'.

# ItemsList

Resultado de la búsqueda asociada a la ruta '/items:search'.
Toma el valor enviado por 'SearchBox' y consulta la api endpoint /api/items (server/index.js).
Renderiza los datos devueltos por la api creando un componente 'Item' por cada elemento devuelto por la api (4).

# Item

Representa un producto de la lista.

# Detail

Detalle del producto asociada a la ruta '/items/:id'.
A partir de un ID de producto consulta la api endpoint /api/items/:id (server/index.js).
Renderiza los datos devueltos por la api mostrando los detalles del producto.

### 