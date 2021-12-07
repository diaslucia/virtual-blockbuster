const products = [
    {
      "id": 1,
      "name": "Dune",
      "price": 100,
      "img": "https://www.themoviedb.org/t/p/w220_and_h330_face/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg",
      "genre": "Science Fiction, Adventure",
      "duration": "2h 35m",
      "plot": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      "trailer": "https://www.youtube.com/embed/n9xhJrPXop4",
      "category": "movies"
    },
    {
        "id": 2,
        "name": "Last Night in Soho",
        "price": 120,
        "img": "https://www.themoviedb.org/t/p/w220_and_h330_face/5iGVofFc0mCr8aJYsVICm42ThIu.jpg" ,
        "genre": "Horror, Mystery, Thriller",
        "duration": "1h 57m",
        "plot": "A young girl, passionate about fashion design, is mysteriously able to enter the 1960s where she encounters her idol, a dazzling wannabe singer. But 1960s London is not what it seems, and time seems to be falling apart with shady consequences.",
        "trailer": "https://www.youtube.com/embed/AcVnFrxjPjI",
        "category": "movies" 
    },
    {
        "id": 100,
        "name": "Arcane",
        "price": 500,
        "img": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg" ,
        "genre": "Animation, Sci-Fi & Fantasy, Action & Adventure, Drama",
        "duration": "42m",
        "plot": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        "trailer": "https://www.youtube.com/embed/fXmAurh012s",
        "category": "series"
        
    },
    {
        "id": 101,
        "name": "Dark",
        "price": 300,
        "img": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg" ,
        "genre": "Sci-Fi & Fantasy, Drama, Mystery, Crime",
        "duration": "53m",
        "plot": "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.",
        "trailer": "https://www.youtube.com/embed/rrwycJ08PSA",
        "category": "series"
        
    }
  
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000)    
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getProductByCategory = (category) => {  
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.category === category)
        setTimeout(() => resolve(product), 1000)
    })
}

export const getItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0]);
        }, 1000)
    })
}
