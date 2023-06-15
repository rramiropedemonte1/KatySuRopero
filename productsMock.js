export const products = [
  {
    id: 1,
    title: "Buzo Essentials",
    price: 25000,
    img: "/img/buzo essentials.webp",
    stock: 3,
    category: "buzo",
  },
  {
    id: 2,
    title: "Buzo Balenciaga ",
    price: 30000,
    img: "/img/buzo balenciaga blanco.JPG",
    stock: 2,
    category: "buzo",
  },
  {
    id: 3,
    title: "Buzo Balenciaga",
    price: 30000,
    img: "/img/buzo balenciaga negro.JPG",
    stock: 3,
    category: "buzo",
  },
  {
    id: 4,
    title: "Buzo Burberry ",
    price: 22000,
    img: "/img/buzo burberry negro.JPG",
    stock: 4,
    category: "buzo",
  },
  {
    id: 5,
    title: "Campera Lakers",
    price: 50000,
    img: "/img/campera lakers kobe.jpg",
    stock: 2,
    category: "campera",
  },
  {
    id: 6,
    title: "Campera North Face",
    price: 40000,
    img: "/img/campera negra north",
    stock: 4,
    category: "campera",
  },
  {
    id: 7,
    title: "Campera North Face",
    price: 40000,
    img: "/img/campera north blanca",
    stock: 1,
    category: "campera",
  },
  {
    id: 8,
    title: "Campera North Face",
    price: 40000,
    img: "/img/campera north rosa",
    stock: 3,
    category: "campera",
  },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((res) => {
    const productos = products.filter(
      (product) => product.category === category
    );
    setTimeout(() => {
      res(productos);
    }, 1000);
  });
};
