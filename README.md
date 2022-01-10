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

### Node JS & React App

1. Install Node JS from https://nodejs.org/en/
2. Clone the project
```
$git clone https://github.com/diaslucia/virtual-blockbuster.git
```
3. Open the console in your code editor and change the directory to the one in your current project
```
$cd yourProjectDirectory
```
4. Install the libraries
```
$npm install
```
5. Ejecute the app (and close it with Ctrl + C)
```
$npm start
```

### SASS

1. Install SASS. [More information here](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
```
$npm install node-sass --save
```
2. Rename the file "src/App.css" to "src/App.scss" and we make sure that "src/App.js" imports the "src/App.scss" file. 

### Spinners

1. Install Spinners. [More information here](https://www.davidhu.io/react-spinners/)
```
$npm install --save react-spinners
```
2. Create a .babelrc file in your project and add the following code (this is because the spinners package uses a pluggin called emotion):
```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@emotion"]
}
```

### Icons

1. Install Ant Design Icons. [More information here](https://ant.design/components/icon/)
```
$npm install --save @ant-design/icons
```

### Firebase

1. Configure the .env file with your firebase credentials

2. Fields for the first firebase db collection (categories)

> categories -> id: movies -> description: movies
> categories -> id: series -> description: series

3. Fields for the second firebase db collection (movies and series)

> item -> automatic id -> category(movies or series) / duration(string with movie lenght) / genre / img(url) / name / plot / price(number type) / stock(number type) / trailer(youtube link)


## Code 🍿

> ### src/App.js
> 
> In this file you will find the route map:
> 
> ***Path="/"*** contains the home page with the ***Banner*** and ***ItemListContainer*** components.
> 
> ***Path="/category/:category"*** contains the ***ItemListContainer*** component filtered by category.
> 
> ***Path="/item/:paramId"*** contains the ***ItemDetailContainer*** component and shows the details of the product you clicked in.
> 
> ***Path="/cart"*** contains the ***Cart*** component with the summary of your purchase.
> 
> ***Path="/checkout"*** contains the ***Checkout*** component with form to finished your purchase and returns your order number.
>
> ***Path="/login"*** contains the ***Login*** component.
> 
> The ***NavBar*** and ***Footer*** components render in every avaliable route.
> 
> ***CartContext*** wraps the whole app and contains the functions related to the cart.

> ### src/components/NavBar.js
> 
> ***NavBar*** contains the buttons to log in and to go to the cart.
> 
> It shows the element ***CartWidget*** as children.
> 
> The function ***GetDocs()*** opens the collection in the firebase dabase called "categories" and saves each of them in the state of ***setCategories()***. Those categories are mapped inside the return() to use them as buttons.

> ### src/components/CartWidget.js
> 
> We import the function ***totalAmount()*** from ***CartContext*** to get the number of total products saved in the cart and we display it.
> 
> If there are no products in the cart, we won't show it.

> ### src/components/ItemListContainer.js
> 
> We import the function ***GetProducts()*** from ***firebase*** that takes the parameters to filter our products.
> 
> ***setProducts()*** saves the products so we can display them.
> 
> We also imported a ***ClipLoader*** from the Spinner library that disappears once the products are loaded.

> ### src/services/firebase/firebase.js
>
> It contains the configuration of firebase so we can bring the products using some functions.
>
> ***getProducts()*** returns all the products in the firebase database collection or just some of them if the function was called with parameters.

> ### src/components/ItemList.js
>
> This component brings the products passed by props and maps each of them into the ***Item*** component.

> ### src/components/Item.js
>
> It contains the item card.

> ### src/components/ItemDetailContainer.js
>
> We import the function ***GetProducts()*** from ***firebase*** that takes the item with the id that matches the id of our path (*paramId*)
>
> We also imported a ***ClipLoader*** from the Spinner library that disappears once the product is loaded.

> ### src/components/ItemDetail.js
>
> It recieves the information of the item by props and builds a card. It contains the ***ItemCount*** component.

> ### src/components/ItemCount.js
>
> We set a ***counter*** state to 0 so the buttons can add or substract the amount we want to buy. We also set a ***price*** state at 0 so we can add or substract the price of the item and save it in the state.
>
> When we click on "buy" the ***buyButton()*** function adds this item to the cart (***addCart()***) with the quantity as the *counter* and the price as the *price* state.
