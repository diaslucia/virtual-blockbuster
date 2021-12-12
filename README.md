# Virtual BlockBuster 📽️

Este sitio web simula ser una tienda online para alquilar o comprar películas y series.  

La idea surgió después de notar el auge de servicios de streaming que traen consigo el problema de tener que suscribirse a más de uno, para poder ver nuestra película/show favorito.  

¿Por qué no inspirarse en los viejos tiempos y, crear un sitio donde puedas encontrar todo en un solo lugar? Así nace "BlockBuster Virtual, just like the good old times".
 
## Estado del Proyecto 🚧

El proyecto todavía se encuentra en desarrollo. Se espera sumarle al sitio un carrito y más contenido/componentes.
 
## Tecnologías 🛠️

Lista de tecnologías utilizadas para este proyecto:

- [Node JS](https://nodejs.org/es/): Version 14.17.6

- [React](https://es.reactjs.org/): Version 17.0.2

- [Javascript](https://www.javascript.com/)

- [SASS](https://sass-lang.com/): Version 6.0.1

## Instalación y Ejecución 🚀

Lista de pasos para empezar con la instalación del proyecto.

1. Instalar Node JS de https://nodejs.org/es/
2. Abrimos la consola y la ubicamos en el directorio de nuestro proyecto
```
$cd directorioDeTuProyecto
$npm install
```
3. Creamos la App de React
```
$npm create-react-app nombreDeTuProyecto
```
4. Iniciamos la aplicación con npm (para finalizar su ejecución usamos Ctrl + C)
```
$npm start
```
5. Instalamos SASS desde consola
```
$npm install node-sass --save
```
6. Renombramos "src/App.css" a "src/App.scss" y actualizamos "src/App.js" para que importe "src/App.scss". Para más información: https://create-react-app.dev/docs/adding-a-sass-stylesheet/

## Información sobre su funcionamiento 🍿

Dentro de la carpeta ***src*** se encuentras las carpetas y los archivos del proyecto.

> ### src/App.js
> Contiene la navegación del sitio web. 

> ### src/products.js
> Simula el backend, se encuentran el listado de los productos con su respectiva información y detalle.
> 
> #### ***getProducts()***
> 
> A través de una promesa, esta función me devuelve todos mis productos.
> 
> ![getProducts](http://imgfz.com/i/zKQC8lO.png)
>
> #### ***getProductById()***
>
> A través de una promesa, esta función me devuelve un producto por Id por props.
> 
> ![getProductById](http://imgfz.com/i/Z2xy7tg.png)
> 
> #### ***getProductByCategory()***
> 
> A través de una promesa, esta función me devuelve todos mis productos filtrados por una categoría que se define por props.
> 
> ![getProductByCategory](http://imgfz.com/i/my28oMJ.png)
>
> #### ***getItem()***
> 
> A través de una promesa, esta función me devuelve el primer producto de mi lista de productos.
> 
> ![getItem](http://imgfz.com/i/PhkQ1t3.png)

> ### src/components/NavBar.js
> NavBar contiene el componente del navegador del sitio y pasa por props a {children} que es el menú del carrito (src/components/CartWidget.js)

> ### src/components/ItemListContainer.js
> ***useEffect*** nos permite mostrar los productos cuando estos ya estén listos.
> 
> ***useState*** nos guarda en una variable los productos que traemos con la función *getProducts()* o *getProductByCategory()* según corresponda.
> 
> ***useParams*** nos trae el valor del path.
> 
> Dentro del ***useEffect*** pasé un condicional dónde *if* el path no tiene una categoría definida, voy a traer a todos mis productos, pero si *else* hay una categoría definida, voy a traer a todos los productos de esa categoría. Al mismo tiempo, queda atento a cualquier cambio con *[category]*.
>
>![ItemListContainer](http://imgfz.com/i/dyQw06U.png)

> ### src/components/ItemList.js
> Toma a los productos traidos por props y los mapea para crear un componente *Item* (src/components/Item.js) con cada uno.
>![ItemList](http://imgfz.com/i/Df62toE.png) 

> ### src/components/ItemDetailContainer.js
> ***useParams*** nos trae el valor del path.
> 
> ***useState*** nos guarda en una variable los productos que traemos con la función *getProductById()*.
>
> ***useEffect*** nos permite mostrar los productos cuando estos ya estén listos. Con la función *getProductById()*, usamos el path (paramId) como parámetro para traer la información del producto que haga match. Al mismo tiempo, queda atento a cualquier cambio con *[paramId]*.
>
> El componente ***ItemDetail*** envuelve al componente *ItemCount* que explicaré a continuación.
> 
>![ItemDetailContainer](http://imgfz.com/i/4jdVlOq.png) 

> ### src/components/ItemDetail.js
> Pasan como props la información del producto *{item}* y *{children}* (src/components/ItemCount.js). La información se distribuye para poder armar la card y el children se agrega a la card como un componente separado.

> ### src/components/ItemCount.js
> Primero se establece un número de conteo inicial (el valor *initial* que se pasó por props) y se lo almacena como variable usando *useState*.
>
> Los botón para sumar y sustraer tienen sus propios eventListeners que suman o restar el valor que este en el *useState*.
>
> ![ItemCount](http://imgfz.com/i/Rxase4w.png)
