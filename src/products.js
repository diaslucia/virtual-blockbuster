const products = [
    {
      "id": 1,
      "name": "Dune",
      "price": 100,
      "img": "https://www.themoviedb.org/t/p/w220_and_h330_face/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg",
      "category": "Science Fiction, Adventure",
      "duration": "2h 35m",
      "plot": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      "trailer": "https://www.youtube.com/embed/n9xhJrPXop4"
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
        }, 2000)    
    })
    }

export const getItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0]);
        }, 2000)
    })
}
