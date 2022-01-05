# Virtual Blockbuster 📽️

This website simulates an online shop to buy movies or series.

I came up with the idea after noticing the inconvinience of suscribing to soo many different streaming services, in order to watch your favorite movie/serie.

Why not letting yourself get inspired by the simplicity of the past and create a place where you can find anything you want to watch? That's how "Blockbuster Virtual, just like the good old times" was born.
 
## Project status 🚧

The project is finished but it has potencially many other features that can be added.
 
## Tecnologies 🛠️

List of tecnologies used for this project:

- [Node JS](https://nodejs.org/es/): Version 14.17.6

- [React](https://es.reactjs.org/): Version 17.0.2

- [Javascript](https://www.javascript.com/)

- [SASS](https://sass-lang.com/): Version 6.0.1

## Instalation & Ejecution 🚀

Steps to install and run the project:

1. Install Node JS from https://nodejs.org/en/
2. Open the console in your code editor and change the directory to the one in your current project:
```
$cd yourProjectDirectory
$npm install
```
3. Create React App
```
$npm create-react-app nombreDeTuProyecto
```
4. You can start the app with npm (and close it with Ctrl + C)
```
$npm start
```
5. Install SASS. [More information here](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
```
$npm install node-sass --save
```
6. Rename the file "src/App.css" to "src/App.scss" and we make sure that "src/App.js" imports the "src/App.scss" file. 

7. Install Spinners. [More information here](https://www.davidhu.io/react-spinners/)
```
$npm install --save react-spinners
```
8. Create a .babelrc file in your project and add the following code (this is because the spinners package uses a pluggin called emotion):
```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@emotion"]
}
```
9. Install Ant Design Icons. [More information here](https://ant.design/components/icon/)
```
$npm install --save @ant-design/icons
```

## Información sobre su funcionamiento 🍿

Dentro de la carpeta ***src*** se encuentras las carpetas y los archivos del proyecto.

> ### src/App.js
> Contiene la navegación del sitio web. 

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
