# Virtual Blockbuster 📽️

This website simulates an online shop to buy movies or series.

I came up with the idea after noticing the inconvinience of suscribing to soo many different streaming services, in order to watch your favorite movie/serie.

Why not letting yourself get inspired by the simplicity of the past and create a place where you can find anything you want to watch? That's how "Blockbuster Virtual, just like the good old times" was born.

## Website Navigation / Deploy 🧭

https://blockbuster-virtual.herokuapp.com/

![Gif](https://user-images.githubusercontent.com/88150989/149206376-208bb0d9-cc78-43c0-a2ad-345fa13154be.gif)

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
2. I renamed the file "src/App.css" to "src/App.scss" and I made sure that "src/App.js" imports the "src/App.scss" file. 

### Spinners

1. Install Spinners. [More information here](https://www.davidhu.io/react-spinners/)
```
$npm install --save react-spinners
```
2. To make it work, I created a .babelrc file in the project and added the following code (this is because the spinners package uses a pluggin called emotion):
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
```
categories -> id: movies -> description: movies
categories -> id: series -> description: series
```
3. Fields for the second firebase db collection (movies and series)
```
item -> automatic id -> category(movies or series) / duration(string with movie lenght) / genre / img(url) / name / plot / price(number type) / stock(number type) / trailer(youtube link)
```

## Code Description 🍿

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
> We also imported the ***LoadingSpinner*** component that contains a spinner from the Spinner Library. If *loading* is set true, the spinner will show. But, when the state changes to false, the children component will show.

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
> We also imported the ***LoadingSpinner*** component that contains a spinner from the Spinner Library. If *loading* is set true, the spinner will show. But, when the state changes to false, the children component will show.

> ### src/components/ItemDetail.js
>
> It recieves the information of the item by props and builds a card. It contains the ***ItemCount*** component.

> ### src/components/ItemCount.js
>
> We set a ***counter*** state to 0 so the buttons can add or substract the amount we want to buy. We also set a ***price*** state at 0 so we can add or substract the price of the item and save it in the state.
>
> When we click on "buy" the ***buyButton()*** function adds this item to the cart (***addCart()***) with the quantity as the *counter* and the price as the *price* state.

> ### src/context/CartContext.js
>
> Here we can find all the functions we need to build and manage the cart.
>
> ***cart*** starts as an empty object.
>
> ***addCart()*** checks if the item that wants to be added is repeated. If it's not duplicated, it saves the item in ***cart*** but if it is already in the cart, it finds the item and updates the price and quantity. It also checks if the product has stock.
>
> ***checkDuplicate()*** return a boolean if the item is duplicated or not.
> 
> ***removeItem()*** returns to ***cart*** all the products that are already there except for the one that we are removing.
> 
> ***deleteCart()*** sets the ***cart*** to an empty object.
>
> ***totalAmount()*** returns the total value of quantity of all products stored in the ***cart***.
>
> ***totalPrice()*** returns the total value of price of all products stored in the ***cart***.

> ### src/components/Cart.js
>
> We bring **totalPrice()***, ***deleteCart()*** and ***cart*** from ***CartContext***
>
> If the ***cart*** lenght is 0, it will show a message to go back shopping. If not, it will show all the products you are buying with the total price.

> ### src/components/Checkout.js
>
> Once we fill the form with our personal information and press "Confirm Order", the ***confirmOrder()*** function is ejecuted.
>
> ***objOrder*** builds an object with the user information. Then, for each product they buy, we check there is stock and we substract the amount they are buying from the firebase database.
>
> We also imported the ***LoadingSpinner*** component that contains a spinner from the Spinner Library. If *loading* is set true, the spinner will show. But, when the state changes to false, the children component will show.

> ### src/context/UserContext.js
>
> Here we can find all the functions we need to build and manage the log in.
>
> ***user*** starts empty.
>
> ***login()*** sets the ***user*** with the information passed through props. It also storages this object in the Local Storage.
>
> ***logout()*** sets the ***user*** as empty and deletes the user object from the LocalStorage.

> ### src/utils/HelperLocalStorage.js
>
> Inside this Helper we can find the function to get, set and remove a value from the Local Storage.

> ### src/components/Login.js
>
> When we submit the form, the function ***handleLogin()*** is ejecuted. The function builds an object with the information the user typed on the form and sends them as props to ***login()***.

> ### src/components/Loading.js
>
> This components stores the spinner from the *react-spinners* library.

