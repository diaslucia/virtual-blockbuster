const products = [
    {
      "id": 1,
      "name": "Dune",
      "price": 100,
      "img": "https://www.themoviedb.org/t/p/w220_and_h330_face/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg"
    },
    {
        "id": 2,
        "name": "Last Night in Soho",
        "price": 120,
        "img": "https://www.themoviedb.org/t/p/w220_and_h330_face/5iGVofFc0mCr8aJYsVICm42ThIu.jpg"  
    }
  
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000)
    })
}